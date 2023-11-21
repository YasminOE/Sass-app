import { supabase } from "../../../supabase"
import ProductCard from 'src/products/components/Card'

export async function getStaticProps(){
  let { data: products, error } = await supabase.from('product').select('*')
    return{
      props: {
        products,
      },
    }
  }

export default function ProductsPage({products}) {
  return (
    <>
    <div className="section bg-grass">
      <div className="container">
        <div className="section-intro">
          <h1 className="h1-smaller">Monthly Newsletters →</h1>
        </div>
      </div>
    </div>

    <div className="section small">
      <div className="container">
        <ul className="product-card-grid ">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </div>
    </>
  )
}

