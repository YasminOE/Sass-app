import { supabase } from "../../../supabase";
import ProductCard from 'src/products/components/Card';
import gsap from "gsap";
import { useState, useEffect } from "react";

export async function getStaticProps(){
  let { data: products, error } = await supabase.from('product').select('*')
    return{
      props: {
        products,
      },
    }

  }


 // if(window.screenY > currentScroll){
  //   setScrollingDown = true;
  // }else{

  // }


export default function ProductsPage({products}) {
  let currentScroll =  0;
  const [ scrollingDown, setScrollingDown] = useState(true);
  // let setScrollingDown = true;

  useEffect(() => {
    let tween = gsap.to(".marquee-part", {
      xPercent: -100,
      repeat: -1,
      duration: 5,
      ease: "linear"
    }).totalProgress(0.4);

    gsap.set(".marquee-inner", { xPercent: -50 });

    const handleScrolling = () => {
      if (window.scrollY > currentScroll){
        setScrollingDown(true)
      }else{
        setScrollingDown(false)
      };
      
      gsap.to(tween, {
        timeScale: scrollingDown ? 1 : -1,
      });
  
      currentScroll = window.scrollY;
    };
  
    // Set up the event listener
    window.addEventListener("scroll", handleScrolling);
  
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScrolling);
    };
  }, []); 

  return (
    <>
    <div className="section bg-grass" >
      <div className="container">
        {/* <div className="section-intro"> */}
          <div className="marquee">
            {/* <div className="marquee-inner">
              <div className="marquee-part">
          <h1 className="h1-smaller">Monthly</h1>
          <h1 className="h1-smaller">Newsletters</h1>
          <h1 className="h1-smaller arrow">→</h1>
              </div>
              <div className="marquee-part">
              <h1 className="h1-smaller">Monthly</h1>
          <h1 className="h1-smaller">Newsletters</h1>
          <h1 className="h1-smaller arrow">→</h1>
              </div>
              <div className="marquee-part">
              <h1 className="h1-smaller">Monthly</h1>
          <h1 className="h1-smaller">Newsletters</h1>
          <h1 className="h1-smaller arrow">→</h1>
              </div>
              <div className="marquee-part">
              <h1 className="h1-smaller">Monthly</h1>
          <h1 className="h1-smaller">Newsletters</h1>
          <h1 className="h1-smaller arrow">→</h1>
              </div>
              <div className="marquee-part">
              <h1 className="h1-smaller">Monthly</h1>
          <h1 className="h1-smaller">Newsletters</h1>
          <h1 className="h1-smaller arrow">→</h1>
              </div>
              <div className="marquee-part">
              <h1 className="h1-smaller">Monthly</h1>
          <h1 className="h1-smaller">Newsletters</h1>
          <h1 className="h1-smaller arrow">→</h1>
              </div>
              <div className="marquee-part">
              <h1 className="h1-smaller">Monthly</h1>
          <h1 className="h1-smaller">Newsletters</h1>
          <h1 className="h1-smaller arrow">→</h1>
              </div>
            </div> */}
            <div className="marquee-inner">
        {Array.from({ length: 9 }, (_, index) => (
          <div className="marquee-part" key={index}>
            <h1 className="h1-smaller">Monthly</h1>
            <h1 className="h1-smaller">Newsletters</h1>
            <h1 className={`h1-smaller arrow ${scrollingDown ? '' : 'active'}`}>→</h1>
          </div>
        ))}
      </div>
          </div>
        {/* </div> */}
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

