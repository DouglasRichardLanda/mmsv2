import {FaAmazon, FaApple, FaArrowDownWideShort, FaSpotify} from "react-icons/fa6";
import {Link} from "react-router-dom";
import {useState} from "react";


// TODO:: after the layout is approved, finish the Song element
export default function AlbumElement () {

  return (
    <div className={`bg-red-600/60 p-5`}>
      <div className={`mb-5 flex gap-5 flex-col sm:flex-row`}>
        <div>
          <img src="images/PitBullThumbnail.jpg" alt="" className={`w-[300px]`} />
        </div>
        <div>
          <h3 className={`font-bold text-xl`}>Song name</h3>
          <p className={`my-2 italic tracking-wider`}>Singer name</p>
          <div className={`flex gap-3`}>
            <Link to={`#`}><FaSpotify className={`w-5 h-5 hover:text-red-600 duration-200`} /></Link>
            <Link to={`#`}><FaApple className={`w-5 h-5 hover:text-red-600 duration-200`} /></Link>
            <Link to={`#`}><FaAmazon className={`w-5 h-5 hover:text-red-600 duration-200`} /></Link>
          </div>
        </div>
      </div>
      <div className={`flex flex-col gap-2`}>
        <Song />
        <Song />
        <Song />
      </div>
    </div>
  )
}

export function Song () {

  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className={`group`}>
      <div onClick={() => {
        setOpen(prev => !prev)
      }} className={`flex justify-between p-3 bg-gray-300/20 items-center cursor-pointer`}>
        <div className={`flex items-center gap-5`}>
          <FaArrowDownWideShort className={`group-hover:text-green-600 duration-200`} />
          <span>Song Name</span>
        </div>
        <div className={`flex gap-3`}>
          <Link to={`#`}><FaSpotify className={`w-5 h-5 hover:text-red-600 duration-200`} /></Link>
          <Link to={`#`}><FaApple className={`w-5 h-5 hover:text-red-600 duration-200`} /></Link>
          <Link to={`#`}><FaAmazon className={`w-5 h-5 hover:text-red-600 duration-200`} /></Link>
        </div>
      </div>
      {open ? <div className={`bg-gray-300/20 px-5 sm:px-20 py-5 overflow-x-auto`}>
        <pre>
          Text from DB
        </pre>
      </div> : null}
    </div>
  )
}