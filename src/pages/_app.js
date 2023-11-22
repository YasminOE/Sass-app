
// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { createBrowserClient } from "@supabase/ssr"
// import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import "src/styles/globals.css";
import AppLayout from "../core/layouts/App";
import { useRouter } from "next/router";
import {motion , AnimatePresence} from "framer-motion"
import Logo from '/src/core/components/Logo.js'

export default function App({ Component, pageProps }) {
  const router = useRouter()
   // Check if environment variables are defined before using the non-null assertion operator
   const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
   const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
 
   if (!supabaseURL || !supabaseAnonKey) {
     throw new Error("Supabase URL or Supabase Anon Key is undefined");
   }
 
   // Create a new supabase browser client with non-null assertion
   const supabaseClient = createBrowserClient(
     supabaseURL,
     supabaseAnonKey 
   );
  return (

    <SessionContextProvider
  // supabaseClient={supabaseClient}
  supabaseClient={supabaseClient}
    initialSession={pageProps.initialSession}
  >
     <AnimatePresence mood="wait">
     <motion.div key={router.pathname}>
    <AppLayout >
      <Component {...pageProps} />
    </AppLayout>
  </motion.div>

  <motion.div
    className='slide-in'
    initial={{scaleY: 1}}
    animate={{scaleY: 0}}
    exit={{scaleY: 1}}
    transition={{ duration: 0.6, ease: [0.7, 0, 0.3, 1]}}
    // transition={{ duration: 1, ease: [0.7, 0, 0.3, 1]}}
    key='slide-in'
  >
       <motion.div className="centered">
      <Logo />
    </motion.div>
 
  </motion.div>

  {/* <motion.div
        className='slide-out'
        initial={{scaleY: 0}}
        animate={{scaleY: 0}}
        exit={{scaleY: 1}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
        key='slide-out'
  >
        <div className="centered">
      <Logo />
    </div>
  </motion.div> */}

  </AnimatePresence>

  </SessionContextProvider>
  ) 
}
