import { Manrope } from "next/font/google";
import { Footer } from "./components/Footer";
import { CartContextProvider } from "./context/cart";

import "./styles/reset.scss";
import { ModalContextProvider } from "./context/modal";

export const metadata = {
  title: "Audiophile E-Commerce",
  description: "Multi-page ecommerce website",
};

const manrope = Manrope({
  subsets: ["latin"],
  fallback: ["--font-family-serif"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Audiophile E-Commerce</title>
        <meta
          name="description"
          content="Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week."
        />
        <meta
          property="og:url"
          content="https://audiophile-ecommerce-alpha.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Audiophile E-Commerce" />
        <meta
          property="og:description"
          content="Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week."
        />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/50212896/235716321-2b301f6c-841a-40c8-9cc3-589d36530376.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="audiophile-ecommerce-alpha.vercel.app"
        />
        <meta
          property="twitter:url"
          content="https://audiophile-ecommerce-alpha.vercel.app/"
        />
        <meta name="twitter:title" content="Audiophile E-Commerce" />
        <meta
          name="twitter:description"
          content="Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week."
        />
        <meta
          name="twitter:image"
          content="https://user-images.githubusercontent.com/50212896/235716321-2b301f6c-841a-40c8-9cc3-589d36530376.png"
        />
      </head>

      {/* margin-top to offset navbar */}
      <body className={manrope.className} style={{ maxWidth: "100vw" }}>
        <CartContextProvider>
          <ModalContextProvider>{children}</ModalContextProvider>
        </CartContextProvider>
        <Footer />
      </body>
    </html>
  );
}
