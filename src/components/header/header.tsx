import {Link} from "react-router-dom";


export default function Header () {

  return (
    <header className={`fixed top-0 w-full border-b-2 border-gray-500`}>
      <nav className={`w-[70%] mx-auto p-2 border-x-2 border-gray-500 flex justify-around text-white font-bold uppercase text-2xl`}>
        <Link to={`#`} className={`hover:text-red-600 duration-200 p-3`}>Home</Link>
        <Link to={`#`} className={`hover:text-red-600 duration-200 p-3`}>News</Link>
        <Link to={`#`} className={`hover:text-red-600 duration-200 p-3`}>Music</Link>
        <Link to={`#`} className={`hover:text-red-600 duration-200 p-3`}>Videos</Link>
        <Link to={`#`} className={`hover:text-red-600 duration-200 p-3`}>Bio</Link>
        <Link to={`#`} className={`hover:text-red-600 duration-200 p-3`}>Contact</Link>
        <Link to={`#`} className={`hover:text-red-600 duration-200 p-3`}>Subscription</Link>
      </nav>
    </header>
  )
}