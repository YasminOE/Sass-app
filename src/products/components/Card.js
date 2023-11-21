import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <article className="product-card" >
      <Link href={`/products/${product.slug}`} className="product-img-link">
        <img src={`/assets/${product.slug}.png`} alt={product.name}/>
      </Link>
      <div>
        <header>
        <p>{product.name}</p>
      </header>
      <footer>
      <Link href={`/products/${product.slug}`} className="more">
        See more →
      </Link>
      <div>
        <span className="pill">
          {product.category}
        </span>
      </div>
      </footer> 
      </div>
     
    </article>
  )
}
