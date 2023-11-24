import Link from "next/link";

export default function SubscriberCard() {
  return (
    <section>
      <div>
        <h4>Browse all news</h4>
        <p style={{ fontSize:'1rem' }}>Check out our full catalog of news by going back to explore the entire collection. </p>
      </div>
      <Link href='/products' className="primary button black">
        Explore newsletters
      </Link>
    </section>
  )
}
