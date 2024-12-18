import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {FaApple, FaInstagram, FaSpotify, FaSquareFacebook, FaSquareXing, FaTiktok, FaYoutube} from "react-icons/fa6";
import merge from "../../lib/merge.ts";
import {HiMenuAlt2} from "react-icons/hi";


export default function Header() {

  const location = useLocation();
  const [scrollY, setScrollY] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false)

  const scroll_to_footer = () => {
    const footer = document.getElementById("footer")
    footer?.scrollIntoView({behavior: 'smooth'})
    setOpen(false)
  }

  useEffect(() => {
    const logo = document.getElementById("main-logo")
    window.onload = () => {
      if(logo) {
        logo.classList.remove("opacity-0");
        logo.classList.add("opacity-100");
      }
    }
    addEventListener("scroll", () => {
      setScrollY(window.scrollY)
    })

    return () => {
      console.log(window.scrollY)
    }
  }, []);
  useEffect(() => {
    setOpen(false)
  }, [location]);

  return (
    <>
      {/*Desktop navigation*/}
      <header className={`fixed top-0 w-full lg:border-b-2 border-gray-500 bg-black/50 hidden md:block z-[800]`}>
        <nav
          className={`w-full lg:w-[70%] mx-auto p-2 lg:border-x-2 border-gray-500 flex justify-around text-white uppercase text-lg xl:text-3xl xl2:text-4xl font-light`}>
          <Link to={`/`} className={`hover:text-red-600 duration-200 p-3`}>Home</Link>
          <Link to={`/news`} className={`hover:text-red-600 duration-200 p-3`}>News</Link>
          <Link to={`/music`} className={`hover:text-red-600 duration-200 p-3`}>Music</Link>
          <Link to={`/videos`} className={`hover:text-red-600 duration-200 p-3`}>Videos</Link>
          <Link to={`/bio`} className={`hover:text-red-600 duration-200 p-3`}>Bio</Link>
          <button onClick={scroll_to_footer} className={`hover:text-red-600 duration-200 p-3 uppercase`}>Contact
          </button>
          <button onClick={scroll_to_footer} className={`hover:text-red-600 duration-200 p-3 uppercase`}>Subscription
          </button>
        </nav>
        <img src="/images/logo2-removebg-preview.png" alt="sceleton"
             className={`fixed left-0 xl:left-10 -top-8 w-[200px] hover:animate-spin hidden lg:block`}/>
        <img src="/images/logo23-removebg-preview.png" alt="sceleton"
             className={`fixed right-0 xl:right-10 -top-8 w-[200px] hover:animate-ping hidden lg:block`}/>
      </header>

      {/*Main Logo img*/}
      <img id={"main-logo"} src="images/logo1-removebg-preview.png" alt="MadMan'sSpirit"
           className={merge(`hidden xs:block duration-700 fixed top-12 md:top-20 left-[40%] md:left-1/2 -translate-x-1/2 transition-all ease-in-out z-[800]`, scrollY === 0 ? "w-[70%] md:w-[60%]" : "w-[70%] md:w-1/4")} />

      {/*Burger button*/}
      <button
        className={`fixed top-10 right-5 z-[1000] md:hidden`}
        onClick={() => {
          setOpen(prev => !prev)
        }}>
        <HiMenuAlt2
          className={merge(`w-14 h-14 duration-300`, open ? "rotate-90 text-gray-800" : "rotate-0 text-white")}/>
      </button>

      {/*Small devices navigation*/}
      <header
        className={merge(`w-full fixed bg-gray-300 top-0 h-full py-5 duration-300 md:hidden z-[800]`, open ? "top-0" : "-top-[150%]")}>
        <nav
          className={`w-full mx-auto p-2 flex flex-col justify-center uppercase text-2xl font-bold text-gray-800 gap-1`}>
          <Link to={`/`} className={`hover:text-red-600 duration-200 p-3 text-center`}>Home</Link>
          <Link to={`/news`} className={`hover:text-red-600 duration-200 p-3 text-center`}>News</Link>
          <Link to={`/music`} className={`hover:text-red-600 duration-200 p-3 text-center`}>Music</Link>
          <Link to={`/videos`} className={`hover:text-red-600 duration-200 p-3 text-center`}>Videos</Link>
          <Link to={`/bio`} className={`hover:text-red-600 duration-200 p-3 text-center`}>Bio</Link>
          <button onClick={scroll_to_footer} className={`hover:text-red-600 duration-200 p-3 uppercase`}>Contact
          </button>
          <button onClick={scroll_to_footer} className={`hover:text-red-600 duration-200 p-3 uppercase`}>Subscription
          </button>
          <div className={`mt-5 flex w-full justify-center gap-5`}>
            <Link to={`#`}><FaSquareFacebook className={`w-7 h-7 hover:text-red-600 duration-200`}/></Link>
            <Link to={`#`}><FaSquareXing className={`w-7 h-7 hover:text-red-600 duration-200`}/></Link>
            <Link to={`#`}><FaInstagram className={`w-7 h-7 hover:text-red-600 duration-200`}/></Link>
            <Link to={`#`}><FaYoutube className={`w-7 h-7 hover:text-red-600 duration-200`}/></Link>
            <Link to={`#`}><FaSpotify className={`w-7 h-7 hover:text-red-600 duration-200`}/></Link>
            <Link to={`#`}><FaApple className={`w-7 h-7 hover:text-red-600 duration-200`}/></Link>
            <Link to={`#`}><FaTiktok className={`w-7 h-7 hover:text-red-600 duration-200`}/></Link>
          </div>
          <img src="/images/logo1-removebg-preview.png" alt="sceleton"
               className={`w-full`}/>
        </nav>
      </header>
    </>
  )
}