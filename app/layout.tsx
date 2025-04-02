import { Inter } from "next/font/google";
import Header from "./_components/Header/Header";
import "./globals.css";
import Footer from "./_components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });
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
