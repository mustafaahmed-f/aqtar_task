import { Inter } from "next/font/google";
import Header from "./_components/Header/Header";
import "./globals.css";
import Footer from "./_components/Footer/Footer";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - M store",
    default: "Welcome to M store",
  },
  description: "Welcome to M store. The best online store for shopping.",
  icons: {
    icon: "/icons8-cart-40.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased min-h-screen grid grid-rows-[auto_1fr]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
