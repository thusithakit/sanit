import type { Metadata } from "next";
import "./globals.css";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
})

export const metadata: Metadata = {
  title: "SANIT",
  description: "Sanit Technologies is a premier provider of networking, telecommunication and security solutions in Sri Lanka. With a team of industry experts and years of experience, we deliver innovative IT infrastructure solutions that enhance connectivity, security and efficiency for business across various industries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${bricolage.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
