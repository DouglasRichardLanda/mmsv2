import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {FaApple, FaInstagram, FaSpotify, FaSquareFacebook, FaSquareXing, FaTiktok, FaYoutube} from "react-icons/fa6";
import merge from "../../lib/merge.ts";
import {HiMenuAlt2} from "react-icons/hi";


export default function Header() {

  const scroll_to_footer = () => {
    const footer = document.getElementById("footer")
    footer?.scrollIntoView({behavior: 'smooth'})
    setOpen(false)
  }

  const location = useLocation();
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    setOpen(false)
  }, [location]);

  return (
    <>
      <header className={`fixed top-0 w-full lg:border-b-2 border-gray-500 bg-black/50 hidden md:block`}>
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

      <button
        className={`fixed top-10 right-10 z-[1000] md:hidden`}
        onClick={() => {
        setOpen(prev => !prev)
      }}>
        <HiMenuAlt2 className={merge(`w-20 h-20 duration-300`, open ? "rotate-90 text-gray-800" : "rotate-0 text-white")} />
      </button>

      <header className={merge(`w-full fixed bg-gray-300 top-0 h-full py-10 duration-300 md:hidden`, open ? "top-0": "-top-[100%]")}>
        <nav
          className={`w-full mx-auto p-2 flex flex-col justify-center uppercase text-2xl font-bold text-gray-800 gap-5 sm:gap-1`}>
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