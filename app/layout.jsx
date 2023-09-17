"use client";
import Header from "@/component/header";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { ThemeContextProvider } from "@/context/theme-context";
import Theme from "@/component/theme";
import { Courgette, Comic_Neue } from "next/font/google";
import { metadata } from "./metatag";

const courgette = Courgette({ weight: "400", subsets: ["latin"] });
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
          --courgette-font: ${courgette.style.fontFamily};
        }
      `}</style>
      <body>
        <div className="bg-1"></div>
        <div className="bg-2"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Theme />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
