"use client";
// import HeaderProvider from '../../context/Header/HeaderContext'
import HeaderProvider from '@/context/Header/HeaderContext';
// import { Header } from "@./components";
import TopNavbar from '../components/TopNavbar';
import MobileNavMenu from '../components/MobileNavMenu';
import Header from '../components/Header';
// import HeroSection from '../components/Hero/HeroSection';
import Brands from "../components/Brands";
import Vitrine from '../components/Vitrine';
import Gallery from '../components/Gallery';
import CustomersComment from '../components/CustomersComment';
// import Footer from '../components/footer';
import Footer from "../components/footer"

// import { Footer, PageLoadingProgressBar, ToastContainer  } from "@./components";
import PageLoadingProgressBar from '../components/PageLoadingProgressBar';
// import ToastContainer from '../.../components/ToastContainer';
import ToastContainer  from '../components/ToastContainer';
import Provider from '@/providers';

import useBuilderData from '../context/Builder/useBuilderData';
import useBuilderDispatch from '../context/Builder/useBuilderDispatch';
import HeroBuilderContext from '../context/Hero/HeroBuilderContext';
import HeroSection from '../components/HeroSection';



{/* 
 <PageLoadingProgressBar />
<Providers>
    <HeaderProvider>
      <Header/>
    </HeaderProvider>
    <ToastContainer />
    {children}
    <Footer />
</Providers> 
*/}

import { useEffect } from "react";

export default function BuilderPage() {
  useEffect(() => {
    const handler = (event) => {
      const data = event.data;

      if (!data || !data.type) return;

      // Parent asks to add overlay
      if (data.type === "addOverlay") {
        const el = document.getElementById(data.id);
        if (!el) return;

        // Make the element relative so overlay works
        el.style.position = "relative";

        // Add overlay
        const overlay = document.createElement("div");
        overlay.style.position = "absolute";
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.right = 0;
        overlay.style.bottom = 0;
        overlay.style.background = "rgba(0,0,0,0.2)";
        overlay.style.pointerEvents = "none";
        el.appendChild(overlay);

        // Add edit button
        const btn = document.createElement("button");
        btn.innerText = "Edit";
        btn.style.position = "absolute";
        btn.style.top = "5px";
        btn.style.right = "5px";
        btn.style.zIndex = 9999;
        btn.style.pointerEvents = "auto";
        btn.style.background = "yellow";

        btn.onclick = () => {
          // send element info back to parent
          window.parent.postMessage(
            {
              type: "edit",
              id: data.id,
              content: el.innerText,
            },
            "*"
          );
        };

        el.appendChild(btn);
      }

      // Parent sends new content
      if (data.type === "updateContent") {
        const el = document.getElementById(data.id);
        if (el) {
          el.innerText = data.content;
        }
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <Provider>
      <HeaderProvider>
        <PageLoadingProgressBar />
        <TopNavbar />
        <MobileNavMenu />
        <Header />
        <HeroBuilderContext>
          <HeroSection />
        </HeroBuilderContext>
        <Brands />
        <Vitrine
          id="new-arrivals"
          title="new arrivals"
          productShowCount={4}
          sortBy="createdAt"
          order="descending"
          buttonHref="/products"
        />
        <hr className="container opacity-70" />
        <Vitrine
          id="top-selling"
          title="top selling"
          productShowCount={4}
          sortBy="saleCount"
          order="descending"
          buttonHref="/products"
        />
        <Gallery />
        <CustomersComment />
        <Footer />
        <ToastContainer />
      </HeaderProvider>
    </Provider>
  );
}


// export default function page() {
//   const data = useBuilderData();
//   const dispatch = useBuilderDispatch();
//   console.log("Builder Data in Page:", data);
//   console.log("Builder Dispatch in Page:", dispatch);
//   return (

//     <Provider>
//       <HeaderProvider>
//           {/* <div style={{ transform: "scale(0.5)", transformOrigin: "top left" }}> */}
//             {/* <Header /> */}
//             <PageLoadingProgressBar />
//             <TopNavbar/>
//             <MobileNavMenu/>
//             <Header/>
//             <HeroBuilderContext>
//               <HeroSection/>
//             </HeroBuilderContext>
//             <Brands />
//             <Vitrine
//                 id="new-arrivals"
//                 title="new arrivals"
//                 productShowCount={4}
//                 sortBy="createdAt"
//                 order="descending"
//                 buttonHref="/products"
//             />
//             <hr className="container opacity-70" />
//             <Vitrine
//                 id="top-selling"
//                 title="top selling"
//                 productShowCount={4}
//                 sortBy="saleCount"
//                 order="descending"
//                 buttonHref="/products"
//             />
//             <Gallery />
//             <CustomersComment />
//             <Footer />
//             <ToastContainer />
//           {/* </div> */}

//       </HeaderProvider>
//     </Provider>
//   )
// }
