import Image from "next/image";
import Link from "next/link";
import hero from '../../public/assets/hero.png';
import heroLoged from '../../public/assets/hero2.png';
import Page from "../core/components/page";

import { useSession } from "@supabase/auth-helpers-react";

export default function HomePage() {
    // const user = useUser();
    const session = useSession();

  return (
    <Page>
  <div className="grid-halves h-screen-navbar home">
    <div className="border-right first-child">
      <div className="column-padding">
        <div className="tablet-centered">

          { session ? (
                      <div className="content-grid home-hero">

                        <h1>Hi there,</h1>
                        <p className="section-subtitle" style={{ fontSize:'1.3rem' }}>Explore your monthly digest:  Where updates become your headlines in the world of today.</p>
                        <Link href="/products" className="large-button">
                        <div className="large-button-text">Explore more</div>
                      </Link>
                      </div>
          )  : (
            <div className="content-grid home-hero">
            <h1>Newsletters, <br/> made simple</h1>
            <p className="section-subtitle">Today&apos;s headlines make today&apos;s head lines.</p>
            <Link href="/products" className="large-button">
              <div className="large-button-text">Explore more</div>
            </Link>
              </div>
          )}

            
        
        </div>
      </div>
    </div>
    <div  className="second-child">
    { session ? (
  <div className="centered">
  <div className="callout-wrap">
    <Image src={heroLoged} placeholder="empty" className="callout-image" alt="hero img"></Image>

  </div>
</div>
          )  : (
            <div className="second-child centered">
            <div className="callout-wrap">
              <Image src={hero} placeholder="empty" className="callout-image" alt="hero img"></Image>
    
            </div>
          </div>
          )}

            
        

    
    </div>
  </div>
    </Page>
  )

}
