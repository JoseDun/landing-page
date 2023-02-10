import AppLayout from "@/components/Layout/AppLayout/AppLayout";
import "@/styles/globals.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
