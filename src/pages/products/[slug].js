import Image from "next/image"
import { useEffect, useState } from "react"
import ReactPlayer from "react-player"

import { supabase } from "../../../supabase"
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react"

import PromoCard from 'src/products/components/PromoCard'
import SubscriberCard from 'src/products/components/SubscriberCard'
// import { createBrowserClient } from "@supabase/ssr"


export default function ProductPage({product}) {
  // call the supabase in a client component from _app.js
  const supabaseClient =  useSupabaseClient();
  const session = useSession();
  const [productContent, setProductContent] = useState(null);
  // console.log(product);

  useEffect(() => {
    async function getProductContent(){
      const { data: productContent } = await supabaseClient
      .from('product_content')
      .select('*')
      .eq('id', product.product_content_id).single();

      setProductContent(productContent);
    }
    getProductContent();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supabaseClient])

  // console.log(productContent)

  return (
    <section className="product-section ">
      <article className="product">
        <div className="product-wrap">
          {/* condition to handle the download url */}
          { productContent?.download_url && (
            <a href={`/assets/${productContent.download_url}`} download className="download-link large-button">
              <span className="large-button-text">Download</span>
            </a>
          )}

          { productContent?.video_url ? (
             <ReactPlayer controls url={productContent?.video_url} /> 
            ) :

            (
              <Image width={1000} height={300} src={`/assets/${product.slug}.png`} alt={product.name} className="inOne-product-image"/>
            )
          }
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
          { session ? <SubscriberCard /> : <PromoCard /> }
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