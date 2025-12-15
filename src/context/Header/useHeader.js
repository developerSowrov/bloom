import { Context } from "./HeaderContext";
import { useContext } from "react";
import { useEffect, useRef } from "react";

export default function useHeader() {

    const {           closeTopNavbar,
                isMobileNavMenuClose,
                   isShowSearchInput,
                   setCloseTopNavbar,
             setIsMobileNavMenuClose,
                setIsShowSearchInput, } =  useContext(Context)

    // useEffect(() => {
    //   function handleResize() {
    //     setIsSidebarOpen(!(window.innerWidth < 1024)) // Adjust breakpoint as needed
    //     setOpenedLOneMenu("")
    //   }

    //     handleResize(); // run on mount
    //     window.addEventListener("resize", handleResize);
    //     return () => window.removeEventListener("resize", handleResize);
    //   }, []);

    const menuBackgroundRef = useRef()
   const menuRef = useRef();
   
//    useEffect(() => {
//      function handleOutsideClick(e) {
//         console.log(e.target)
//         console.log(menuRef.current)
//          e.stopPropagation()
//             if ( !(menuRef.current == e.target) && !menuRef.current?.contains?.(e.target)) {
//                 setIsMobileNavMenuClose(true)
//             }
//         }
//         let ignore = false;
//         if(!ignore)
//             document.addEventListener("mousedown", handleOutsideClick);
//         return () => {
//             ignore = true;
//             document.removeEventListener("mousedown", handleOutsideClick);
//         }
//    }, [])

    function closeTopNavbarHandler() {
        setCloseTopNavbar(true);
    }

    // onClick
    function searchIconClickHandler() {
        setIsShowSearchInput((prev) => !prev);
    }

    function toggleMobileNavMenuHandler() {
        setIsMobileNavMenuClose((prev) => !prev);
    }

    function onBackgroundClick(e) {
      e.stopPropagation()
      if(menuRef.current && !menuRef.current.contains(e.target)){
         setIsMobileNavMenuClose(true)
      }
   }
    return {
            menuRef,
            closeTopNavbar,
            isMobileNavMenuClose,
            isShowSearchInput,

            onBackgroundClick,
            closeTopNavbarHandler,
            searchIconClickHandler,
            toggleMobileNavMenuHandler
        }
}
