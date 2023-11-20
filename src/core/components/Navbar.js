import Link from "next/link";
import Logo from "src/core/components/Logo"
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { SITE_URL } from "../utils";


export default function Navbar() {
  // const user = useUser();
  const session = useSession();

  // call the supabase in a client component from _app.js
  const supabaseClient =  useSupabaseClient();
  console.log(supabaseClient)

  // handle user's sign out
  function signOut(){
    supabaseClient.auth.signOut();
  }

  // handle user redirect to stripe billing portal
  // TODO: Fix the billing portal redirect -> the problem is within pages/api/manage-billing.js
  async function onManageBilling(){
    const response= await fetch(`${SITE_URL}/api/manage-billing`);
    const data = await response.json();
    if(data){
      window.location.href = data.url;
    }

  }
  // console.log({session})

  return (
    <div className="nav-container border-b-2 border-black">
      <Link href="/">
        <Logo />
      </Link>

     { session ? (
      <div className="nav-menu">
      <Link href="/products" className="nav-link white">
        <div>Products</div>
      </Link>
      
      <a onClick={onManageBilling} className="nav-link border-left white">
        <div>Billing</div>
      </a>
      <div onClick={signOut} className="nav-link black">
        <div>
          Sign out
        </div>
      </div>
    </div>
     ) : 
      (
        <div className="nav-menu">
        <Link href="/login" className="nav-link white">
          <div>Login</div>
        </Link>
        
        <Link href="/pricing" className="nav-link black">
          <div>Pricing</div>
        </Link>
      </div>
      ) }

    </div>


  )
}
