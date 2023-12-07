import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import LoginForm from "src/login/components/LoginForm"
import LoginSubmitted from "src/login/components/LoginSubmitted"

import Logo from "src/core/components/Logo"
import login from "public/assets/login.png"

export default function LoginPage() {
  const [submitted, setSubmitted] = useState('')
  return (
    <div className="grid-halves h-screen login">
      <div className="border-right first-child">
        <div className="column-padding">
          <div className="tablet-centered">
            <Link href="/" className="logo-container">
              <Logo style={{ width: 210 }}/>
            </Link>
            { submitted ? <LoginSubmitted submitted={submitted} /> :  <LoginForm setSubmitted={setSubmitted}/>}
     
          </div>
        </div>
      </div>
      <div className="border-right second-child">
      {/* <div className="bg-offwhite border-right"> */}
      <div className="column-padding">
        <Image src={login} alt="Login page image" className="callout-image" />
      </div>
      </div>
    </div>
  )
}
