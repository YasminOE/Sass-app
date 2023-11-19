import Image from "next/image"
import { supabase } from "../../../supabase"

import PromoCard from 'src/products/components/PromoCard'

export default function ProductPage({product}) {
  console.log(product)
  return (
    <section className="product-section">
      <article className="product">
        <div className="product-wrap">
          <Image width={1000} height={300} src={`/assets/${product.slug}.png`} alt={product.name}/>
        </div>
        <section>
          <header>
            <h3>{product.name}</h3>
          </header>
          <section>
            <div>
              <p>{product.description}</p>
            </div>
          </section>
        </section>
        <section>
          <PromoCard />
        </section>
      </article>
    </section>
  )
}



export async function getStaticPaths(){
  const {data: products} =  await supabase.from("product").select('slug')

  const paths = products.map(product => ({
    params: {
      slug: product.slug
    }
  }))

  // console.log(paths)
  return {
    paths,
    fallback: false,
  }
}


// 'getStaticPaths' requires using 'getStaticProps'
export async function getStaticProps(context){
  const slug = context.params.slug

  // Filter data from database to get a specific product slug
  let { data: product } = await supabase
  .from('product')
  .select("*")
  .eq('slug', slug)
  .single()
  // single is a method to return a single object instead of an array 

  return {
    // Passed to the page component as props
    props: {
      product
    },
  }
  
}