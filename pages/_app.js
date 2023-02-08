import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import "remixicon/fonts/remixicon.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
