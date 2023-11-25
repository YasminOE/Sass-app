import getRawBody from "raw-body";
import { stripe } from "src/pricing/utils/stripe";
import { supabase, supabaseServer } from "../../../supabase";

// help stripe able to construct the event
export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req, res) {
  const signature = req.headers['stripe-signature'];
  const signingSecret = process.env.STRIPE_SIGNING_SECRET

  // store success construct event
  let event;

  // handle process failure
  try {
    // make stripe construct webhook using a buffer 
    const rawBody = await getRawBody(req, {limit: "2mb"});
    event = stripe.webhooks.constructEvent(rawBody, signature, signingSecret);

  } catch (error){
    // console.log('Webhook signature verification failed.');
    return res.status(400).end();
    // return res.status(400).send(`Webhook Error: ${error.message}`);
  }

  // handle process success and delete subscription
  try {
    switch(event.type){
      case "customer.subscription.updated":
        await updateSubscription(event);
        break;

      case "customer.subscription.deleted":
        await deleteSubscription(event);
        break;
    }
    // console.log(event);
    res.send({ success: true });

  } catch(error) {
    // console.log("Error processing webhook", error);
    res.send({ success: false });
  }
}

// handle user subscription creation in supabase profile table
async function updateSubscription(event){
  const subscription = event.data.object;
  const stripe_customer_id = subscription.customer;
  const subscription_status = subscription.status;
  const price = subscription.items.data[0].price.id;
  
  const { data: profile } = await supabase.from('profile').select('*').eq('stripe_customer_id', stripe_customer_id).single();

  if(profile){
    const updatedSubscription = {
      subscription_status,
      price
    }
    await supabase.from('profile').update(updatedSubscription).eq('stripe_customer_id', stripe_customer_id)
  }
  else{
    const customer = await stripe.customers.retrieve(stripe_customer_id);
    const name = customer.name;
    const email = customer.email;
    const newProfile = {
      name,
      email,
      stripe_customer_id,
      subscription_status,
      price
    }
    // await supabase.auth.admin.createUser({
    //   email,
    //   email_confirm: true,
    //   user_metadata: newProfile,
    // });

     await supabaseServer.auth.admin.createUser({
      email,
      email_confirm: true,
      user_metadata: newProfile,
    });
 
    
  }
} 

// handle user subscription cancelation
async function deleteSubscription(event){
  const subscription = event.data.object;
  const stripe_customer_id = subscription.customer;
  const subscription_status = subscription.status;
  const deletedSubscription = {
    subscription_status,
    price: null,
  }
  await supabase.from('profile').update(deletedSubscription).eq('stripe_customer_id', stripe_customer_id);
}