import {FaRegCirclePlay} from "react-icons/fa6";
import {useRef, useState} from "react";
import merge from "../../lib/merge.ts";
import ReactPlayer from "react-player";
import {MdClose} from "react-icons/md";


export default function VideoPage() {




  return (
    <section className={`mb-20`}>
      <div className={`flex gap-1 `}>
        <VideoElement image={`/images/PitBullThumbnail.jpg`} path={`https://www.youtube.com/watch?v=oEy0441CHFY`} />
      </div>
    </section>
  )
}


export function VideoElement({path, image}: {path: string, image: string}) {

  const [open, setOpen] = useState<boolean>(false)
  const videoRef = useRef<HTMLDivElement | null>(null)


  return (
    <>
      <div onClick={() => setOpen(true)}
           style={{backgroundImage: `url("${image}")`}}
           className={merge(`h-[500px] flex justify-center items-center max-w-[800px] w-full hover:w-[150%] duration-700 group cursor-pointer bg-cover bg-center`)}>
        <FaRegCirclePlay className={`w-32 h-32 text-white group-hover:text-red-600 duration-200`} />
      </div>

      <div className={merge(`fixed w-full h-screen justify-center items-center top-0 left-0 bg-black/50 z-[2000]`, open ? "flex" : "hidden")}>
        <div ref={videoRef} className={`flex justify-center items-center relative w-[60%] h-[60%]`}>
          <button
            className={`absolute -top-10 -right-10`}
            onClick={() => setOpen(false)}>
            <MdClose className={`w-10 h-10 hover:text-red-600 duration-200`} />
          </button>
          <ReactPlayer
            playing={open}
            controls={true}
            url={path}
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
    </>

  )
}