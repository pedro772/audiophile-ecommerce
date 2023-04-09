import { Manrope } from "next/font/google";

import "./styles/reset.scss";

export const metadata = {
  title: "Audiophile E-Commerce",
  description: "Multi-page ecommerce website",
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
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
