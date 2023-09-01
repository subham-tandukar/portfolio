import Header from "@/component/header";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { ThemeContextProvider } from "@/context/theme-context";
import Theme from "@/component/theme";

export const metadata = {
  title: "Subham | Personal Portfolio",
  description:
    "Subham is a frontend web developer with more than 1 year of experience",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
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
