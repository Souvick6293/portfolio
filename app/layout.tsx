import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import "./../style/style.css"
import "./../style/mediaquery.css"
import Footer from "@/components/footer/Footer";


export const metadata: Metadata = {
  title: "Souvick Panja | Frontend Web Developer",
  description: "I specialize in building dynamic, responsive, and SEO-optimized websites using React.js, Next.js, and modern web technologies. Explore my projects now!",
  keywords: [
    "Souvick Panja",
    "SouvickDev",
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "Web Developer",
    "JavaScript Expert",
    "UI/UX Designer",
    "Portfolio Website",
    "Responsive Design",
    "SEO Optimization",
  ],
  openGraph: {
    title: "Souvick Panja | Frontend Web Developer",
    description: "Check out my portfolio showcasing modern web development skills using React.js and Next.js.",
    images: [
      {
        url: "/assets/og-img.png",
        width: 1200,
        height: 630,
        alt: "Portfolio-Banner"
      }
    ],
    url: "https://souvick-dev.vercel.app"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"antialiased"}>
          <Navbar/>
          {children}
          <Footer/>
      </body>
    </html>
  );
}
