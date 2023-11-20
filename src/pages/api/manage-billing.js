// TODO: fix this page functionality
import { createServerClient } from '@supabase/ssr'
// import { cookies } from 'next/headers'
// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
// import { stripe } from 'src/pricing/utils/stripe';
import { stripe } from '../../pricing/utils/stripe';
import { SITE_URL } from '../../core/utils';

export default async function handler(req, res) {
  // const supabaseServerClient = createServerComponentClient({
  //   req,
  //   res,
  // });
  // const cookieStore = cookies(req.headers);
  const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
   const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabaseServerClient = createServerClient({
    supabaseURL,
    supabaseAnonKey,
    headers: {
      cookie: req.headers.cookie || '', // Pass cookies in headers
    },
  });

  const {
    data: {user},
  } = await supabaseServerClient.auth.getUser();

  if(!user){
    // return res.status(401).json({message:"Unauthorized"});
    return res.status(401).send("Unauthorized");
  }
  // const { data: profile } = await supabaseServerClient.from('profile').select('stripe_customer_id').eq('user_id', user.id).single();
  const { data: profile } = await supabaseServerClient
  .from('profile')
  .select('stripe_customer_id')
  .eq('user_id', user.id)
  .single();

  const session = await stripe.billingPortal.sessions.create({
    customer: profile.stripe_customer_id,
    return_url: SITE_URL,
  })
  res.send({ url: session.url});
}
