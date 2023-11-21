import Link from "next/link";

export default function PromoCard() {
  return (
    <section>
      <div>
        <div>
          <h4>Get Instant Access</h4>
          <p style={{fontSize: '1.3rem'}}>
          {/* <p style={{fontSize: '1rem'}}> */}
            Access this newsletter plus dozens of others when you subscribe.
          </p>
        </div>
      </div>
      <Link href="/pricing" className="primary button">
        Subscribe
      </Link>
    </section>
  )
}
