
// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { createBrowserClient } from "@supabase/ssr"
// import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import "src/styles/globals.css";
import AppLayout from "../core/layouts/App";
import { useState } from 'react';

export default function App({ Component, pageProps }) {
   // Create a new supabase browser client on every first render.
  //  const [supabaseClient] = useState(() => createBrowserClient())

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
  
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  </SessionContextProvider>
  ) 
}
