import {Link} from "react-router-dom";
import {
  FaApple,
  FaInstagram,
  FaSpotify,
  FaSquareFacebook,
  FaSquareXing, FaTiktok,
  FaYoutube
} from "react-icons/fa6";
import {MdClose} from "react-icons/md";
import {useState} from "react";
import merge from "../../lib/merge.ts";
import {cookies, privacy, SectionPartInterface, terms} from "./conditions-dto.ts";

interface Modulwindow {
  open: boolean,
  section: SectionPartInterface[] | null
}

export default function Footer () {

  const [modul, setModul] = useState<Modulwindow>({
    open: false,
    section: []
  })

  const module_data = (arg: number) => {
    switch (arg) {
      case 1:
        setModul({open: true, section: terms})
        break;
      case 2:
        setModul({open: true, section: privacy})
        break;
      case 3:
        setModul({open: true, section: cookies})
        break;
      default:
        setModul({open: false, section: null})
        break;
    }
  }

  return (
    <>
      <footer id={`footer`} className={`bg-gray-300 mx-auto`}>
        <div className={`w-2/3 mx-auto text-black py-5 lg:py-20 flex gap-5 lg:gap-20 flex-col lg:flex-row justify-between tracking-wider`}>
          <div className={`w-full lg:w-1/3`}>
            <h2 className={`text-3xl font-extralight`}>Stay tuned</h2>
            <div className={`mt-5 lg:mt-20`}>
              Thanks for stopping by! We're always excited to hear from our fans and fellow rock enthusiasts. Drop us a message, and let’s keep the energy alive—your voice is what fuels our music!
            </div>

            <div className={`mt-10 flex flex-col items-start`}>
              <button onClick={() => module_data(1)} className={`border-b-2 border-gray-500 hover:border-red-600 duration-200 font-bold`}>Terms & conditions</button>
              <button onClick={() => module_data(2)} className={`border-b-2 border-gray-500 hover:border-red-600 duration-200 font-bold`}>Privacy policy</button>
              <button onClick={() => module_data(3)} className={`border-b-2 border-gray-500 hover:border-red-600 duration-200 font-bold`}>Cookies</button>
              <Link to={`https://www.quitegreat.co.uk/`} className={`border-b-2 border-gray-500 hover:border-red-600 duration-200 font-bold`}>Press</Link>
              <Link to={`/administration`} className={`border-b-2 border-gray-500 hover:border-red-600 duration-200 font-bold`}>Administration</Link>
            </div>
            <p className={`mt-5`}>© 2024 Mad Man's Spirit</p>
          </div>
          <div className={`w-full lg:w-2/3 mt-10 lg:mt-0`}>
            <div>
              <h2 className={`text-3xl font-extralight`}>Contact Us</h2>
              <form>
                <div className={`my-5 flex gap-10 flex-col md:flex-row`}>
                  <label className={`flex flex-col gap-3 text-gray-600`}>
                    First Name
                    <input type="text" placeholder={`Martin`} className={`focus:outline-0 bg-gray-300 border-b-2 border-black pb-2 text-red-600`}/>
                  </label>
                  <label className={`flex flex-col gap-3 text-gray-600`}>
                    Second Name
                    <input type="text" placeholder={`Johnson`} className={`focus:outline-0 bg-gray-300 border-b-2 border-black pb-2 text-red-600`}/>
                  </label>
                </div>
                <div className={`flex flex-col md:flex-row md:items-end gap-5`}>
                  <textarea rows={5} className={`w-full bg-gray-300 border-b-2 border-black focus:outline-0`} placeholder={`Hi, \n\n I would like to...`} />
                  <button onClick={() => {
                    alert("Thank you for your message. We will keep in touch as soon a possible!")
                  }} className={`px-5 py-2 bg-red-600 text-white`}>Submit</button>
                </div>
              </form>
            </div>
            <div className={`mt-20`}>
              <h2 className={`text-3xl font-extralight`}>Subscribe</h2>
              <p className={`my-5 text-gray-600`}>Sing up for the mailing list to get all of the latest news and updates!</p>
              <div className={`flex gap-5 flex-col md:flex-row`}>
                <input type="text" placeholder={`youremail@gmail.com`} className={`focus:outline-0 bg-gray-300 border-b-2 border-black pb-2 w-full text-red-600`}/>
                <button className={`px-5 py-2 bg-red-600 text-white`}>Subscribe</button>
              </div>
              <div className={`mt-5 flex gap-4`}>
                <Link to={`#`}><FaSquareFacebook className={`w-7 h-7 hover:text-red-600 duration-200`} /></Link>
                <Link to={`#`}><FaSquareXing className={`w-7 h-7 hover:text-red-600 duration-200`} /></Link>
                <Link to={`#`}><FaInstagram className={`w-7 h-7 hover:text-red-600 duration-200`} /></Link>
                <Link to={`#`}><FaYoutube className={`w-7 h-7 hover:text-red-600 duration-200`} /></Link>
                <Link to={`#`}><FaSpotify className={`w-7 h-7 hover:text-red-600 duration-200`} /></Link>
                <Link to={`#`}><FaApple className={`w-7 h-7 hover:text-red-600 duration-200`} /></Link>
                <Link to={`#`}><FaTiktok className={`w-7 h-7 hover:text-red-600 duration-200`} /></Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className={merge(`fixed top-0 w-full h-screen bg-black/60 flex justify-center items-center z-[2000]`, modul.open ? "" : "hidden")}>
        <div className={`bg-white text-black w-3/4 lg:w-2/3 xl:w-1/2 h-3/4 relative`}>
          {modul.section !== null ? <div className={`overflow-auto w-full h-full p-5`}>{modul.section.map((element, index) => {
              return (
                <p key={index} className={merge(`mb-5 tracking-wider font-light`, element.title ? "font-bold mt-5" : "", element.list ? "mb-0 pl-1" : "")}>
                  {element.part}
                </p>
              )
          })}</div> : null }

          <button onClick={() => setModul({open: false, section: null})} className={`absolute text-white -top-10 -right-10 hover:text-red-600 duration-200`}>
            <MdClose className={`w-10 h-10`} />
          </button>
        </div>
      </div>
    </>
  )
}