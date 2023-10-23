"use client";
import Header from "@/component/header";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { ThemeContextProvider } from "@/context/theme-context";
import { Raleway, Comic_Neue } from "next/font/google";
import { metadata } from "./metatag";
import TopHeader from "@/component/top-header";

const raleway = Raleway({ weight: "400", subsets: ["latin"] });
const comicNeue = Comic_Neue({
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
          --comicNeue-font: ${comicNeue.style.fontFamily};
          --raleway-font: ${raleway.style.fontFamily};
        }
      `}</style>
      <body>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <TopHeader />
            <Header />
            <div className="container">{children}</div>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
