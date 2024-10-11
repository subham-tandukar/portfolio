"use client";
import Header from "@/components/header";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { ThemeContextProvider } from "@/context/theme-context";
import { Raleway, Comic_Neue } from "next/font/google";
import { metadata } from "./metatag";
import TopHeader from "@/components/top-header";
import Popup from "@/components/pop-up";
import grainImage from "@/public/images/grain.jpg";

const primary = Raleway({ weight: ["300", "400", "700"], subsets: ["latin"] });
const secondary = Comic_Neue({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Other meta tags, links, or scripts */}
      </head>
      <style jsx global>{`
        :root {
          --secondary-font: ${secondary.style.fontFamily};
          --primary-font: ${primary.style.fontFamily};
        }
      `}</style>
      <body className="relative z-0">
        <div
          className="absolute inset-0 -z-30 opacity-5 "
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <TopHeader />
            <Header />
            <Popup />
            <div className="">{children}</div>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
