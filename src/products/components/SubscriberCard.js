import Link from "next/link";

export default function SubscriberCard() {
  return (
    <section>
      <div>
        <h4>See all newsletters</h4>
        <p style={{ fontSize:'1rem' }}>Go back to see the entire catalogue. </p>
      </div>
      <Link href='/products' className="primary button black">
        Explore newsletter
      </Link>
    </section>
  )
}
