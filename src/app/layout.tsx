import { Manrope } from "next/font/google";
import { Navbar } from "./components/Navbar";

import "./styles/reset.scss";

export const metadata = {
  title: "Audiophile E-Commerce",
  description: "Multi-page ecommerce website",
  icons: "/assets/favicon-32x32.png",
};

const manrope = Manrope({
  subsets: ["latin"],
  fallback: ["--font-family-sans"],
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
      {/* margin-top to offset navbar */}
      <body className={manrope.className} style={{ marginTop: "90px" }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
