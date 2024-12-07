import {Link} from "react-router-dom";
import {
  FaApple,
  FaInstagram,
  FaSpotify,
  FaSquareFacebook,
  FaSquareXing, FaTiktok,
  FaYoutube
} from "react-icons/fa6";


export default function Footer () {

  return (
    <footer id={`footer`} className={`bg-gray-300 mx-auto`}>
      <div className={`w-2/3 mx-auto text-black py-20 flex gap-20 justify-between tracking-wider`}>
        <div className={`w-1/3`}>
          <h2 className={`text-3xl font-extralight`}>Stay tuned</h2>
          <div className={`mt-20`}>
            Thanks for stopping by! We're always excited to hear from our fans and fellow rock enthusiasts. Drop us a message, and let’s keep the energy alive—your voice is what fuels our music!
          </div>
          <div className={`mt-10`}>
            <p>Address and street</p>
            <p>London <span className={`font-bold`}>12812</span></p>
            <p>United Kingdom</p>
            <p className={`font-bold`}>All rights reserved</p>
          </div>
          <div className={`mt-10 flex flex-col items-start`}>
            <button className={`border-b-2 border-gray-500 hover:border-red-600 duration-200 font-bold`}>Terms & conditions</button>
            <button className={`border-b-2 border-gray-500 hover:border-red-600 duration-200 font-bold`}>Privacy policy</button>
            <button className={`border-b-2 border-gray-500 hover:border-red-600 duration-200 font-bold`}>Cookies</button>
            <button className={`border-b-2 border-gray-500 hover:border-red-600 duration-200 font-bold`}>Press</button>
          </div>
        </div>
        <div className={`w-2/3`}>
          <div>
            <h2 className={`text-3xl font-extralight`}>Contact Us</h2>
            <form>
              <div className={`my-5 flex gap-10`}>
                <label className={`flex flex-col gap-3 text-gray-600`}>
                  First Name
                  <input type="text" placeholder={`Martin`} className={`focus:outline-0 bg-gray-300 border-b-2 border-black pb-2 text-red-600`}/>
                </label>
                <label className={`flex flex-col gap-3 text-gray-600`}>
                  Second Name
                  <input type="text" placeholder={`Johnson`} className={`focus:outline-0 bg-gray-300 border-b-2 border-black pb-2 text-red-600`}/>
                </label>
              </div>
              <div className={`flex items-end gap-5`}>
                <textarea rows={5} className={`w-full bg-gray-300 border-b-2 border-black focus:outline-0`} placeholder={`Hi, \n\n I would like to...`} />
                <button onClick={() => {
                  alert("Thank you for your message. We will keep in touch as soons a possible!")
                }} className={`px-5 py-2 bg-red-600 text-white`}>Submit</button>
              </div>
            </form>
          </div>
          <div className={`mt-20`}>
            <h2 className={`text-3xl font-extralight`}>Subscribe</h2>
            <p className={`my-5 text-gray-600`}>Sing up for the mailing list to get all of the latest news and updates!</p>
            <div className={`flex gap-5`}>
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
  )
}