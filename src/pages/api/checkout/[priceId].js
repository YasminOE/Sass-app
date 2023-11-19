import { SITE_URL } from "../../../core/utils"
import { stripe } from "../../../pricing/utils/stripe"

// create stripe checkout session 
export default async function handler(req, res) {
  const { priceId } = req.query

 const session =  await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${SITE_URL}/success`,
    cancel_url: `${SITE_URL}/pricing`,
  })
  
  res.send({ id:session.id });
}
