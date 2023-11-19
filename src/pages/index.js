import Image from "next/image";
import Link from "next/link";
import hero from '../../public/assets/hero.png'
// import hero from '../../public/assets/hero2.png'

export default function HomePage() {
  return <div className="grid-halves h-screen-navbar">
    <div className="bg-teal border-right">
      <div className="column-padding">
        <div className="tablet-centered">
          <div className="content-grid home-hero">
            <h1>The most <br /> epic products.</h1>
            <p className="section-subtitle">All the most epic things in the internt, all in one place.</p>
            <Link href="/products" className="large-buttton">
              <div className="large-button-text">Explore Products</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-salmon">
      <div className="centered">
        <div className="callout-wrap">
          <Image src={hero} placeholder="empty" className="callout-image" alt="hero img"></Image>
          {/* <Image src={hero} placeholder="empty" className="callout-image" alt="hero img"></Image> */}
        </div>
      </div>
    </div>
  </div>
}
