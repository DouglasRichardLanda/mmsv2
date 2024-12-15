import {Link} from "react-router-dom";


export default function Header() {

  const scroll_to_footer = () => {
    const footer = document.getElementById("footer")
    footer?.scrollIntoView({behavior: 'smooth'})
  }


  return (
    <>
      <header className={`fixed top-0 w-full border-b-2 border-gray-500 bg-black/50`}>
        <nav
          className={`w-[70%] mx-auto p-2 border-x-2 border-gray-500 flex justify-around text-white uppercase text-2xl font-light`}>
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
        <img src="images/logo2-removebg-preview.png" alt=""
             className={`fixed left-10 -top-8 w-[200px] hover:animate-spin hidden md:block`}/>
        <img src="images/logo23-removebg-preview.png" alt=""
             className={`fixed right-10 -top-8 w-[200px] hover:animate-ping hidden md:block`}/>
      </header>
    </>
  )
}