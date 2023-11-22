import Image from "next/image";
import Link from "next/link";
import confetti from 'public/assets/confetti.png'
export default function SuccessPage() {
  return (
    // <div className="section bg-pink h-screen centered">
    <div className="section bg-offwhite h-screen centered">
      <div className="container">
        <div className="section-intro welcome ">
          <Image 
            className="confetti"
            src={confetti}
            alt="Success checkout image" 
            height={250}
            width={250}
            // layout='fill' objectFit='contain'
          />
          <h1>You&apos;re in!</h1>
          <p>Thanks for creating a PaperBoy account.<br /> Ready to get started?</p>
          {/* <p>Thanks for creating a PaperBoy account. <br /> You can now access everything. Ready to get started?</p> */}
          <Link href="/login" className="large-button">
            <div className="large-button-text">
              Go to login
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
