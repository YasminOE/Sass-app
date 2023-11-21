import Image from "next/image";
import Link from "next/link";
import hero from '../../public/assets/hero.png';


export default function HomePage() {
  return <div className="grid-halves h-screen-navbar">
    <div className="border-right">
      <div className="column-padding">
        <div className="tablet-centered">
          <div className="content-grid home-hero">
            <h1>Monthly newsletters, <br/> made simple.</h1>
            <p className="section-subtitle">Today&apos;s headlines make today&apos;s head lines.</p>
            <Link href="/products" className="large-buttton">
              <div className="large-button-text">Explore more</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div >

      <div className="centered">
        <div className="callout-wrap">
          <Image src={hero} placeholder="empty" className="callout-image" alt="hero img"></Image>

        </div>
      </div>
    </div>
  </div>
}
