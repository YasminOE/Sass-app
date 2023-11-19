import "src/styles/globals.css";
import AppLayout from "../core/layouts/App";

export default function App({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  ) 
}
