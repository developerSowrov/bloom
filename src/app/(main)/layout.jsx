// SEO
import { staticPageMetadata } from "@/SEO";
// STYLE
import "swiper/css";
// import "./globals.css";
import "../globals.css";
// Provider
import Providers from "@/providers";
// COMPONENT
import { Header, Footer, ToastContainer  } from "@/components";
// import HeaderProvider from "../context/Header/HeaderContext";
// import HeaderProvider from '../../context/Header/HeaderContext';
import HeaderProvider from "@/context/Header/HeaderContext";
import { AuthContextProvider } from "../../context/Auth/AuthContext";


export const metadata = {
                           manifest: "/manifest.json",
                           title: staticPageMetadata.home.title,
                           description: staticPageMetadata.home.desc,
                        };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
         <body className="relative overflow-x-hidden font-satoshi">
            {/* <PageLoadingProgressBar /> */}
            <AuthContextProvider>
               <Providers>
                  <HeaderProvider>
                     <Header/>
                  </HeaderProvider>
                  {children}
                  <Footer />
                  <ToastContainer />
               </Providers>
            </AuthContextProvider>
         </body>
      </html>
  )
}


// export default RootLayout;
