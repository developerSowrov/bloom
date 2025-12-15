// SEO
import { staticPageMetadata } from "@/SEO";
// STYLE
import "swiper/css";
import "../globals.css";
// import BuilderProvider from "./context/Context.js";
import BuilderProvider from "./context/Builder/BuilderContext";

export const metadata = {
                           manifest: "/manifest.json",
                           title: "Home Builder",
                           description: "APIDoxy Builder, Build your Home page for apidoxy...",
                        };

export default function BuilderLayout({ children }) {
  return (
    <html lang="en">
         <body className="relative overflow-x-hidden font-satoshi">
            <BuilderProvider>
               {children}
            </BuilderProvider>
         </body>
      </html>
  )
}
