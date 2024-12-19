import {useEffect} from "react";
import {useLocation} from "react-router-dom";


export default function HomePage () {


  // here is a failure with picture1 and picture2 ,but I have already solved it using another approach
  useEffect(() => {
    const picture3 = document.getElementById("home-img-3")
    const picture1 = document.getElementById("home-img-1")
    const picture2 = document.getElementById("home-img-2")
    const animateImages = () => {
      if (picture3) {
        picture3.classList.remove("-top-1/2");
        picture3.classList.add("top-1/2");
      }

      if (window.visualViewport) {
        if (picture2) {
          if (window.visualViewport.width > 768) {
            picture2.classList.remove("lg:-right-[40%]");
            picture2.classList.add("lg:right-[40%]");
          } else {
            picture2.classList.remove("-right-[100%]");
            picture2.classList.add("right-[30%]");
          }
        }
        if (picture1) {
          if (window.visualViewport.width > 768) {
            picture1.classList.remove("lg:-left-[40%]");
            picture1.classList.add("lg:left-[40%]");
          } else {
            picture1.classList.remove("-left-[100%]");
            picture1.classList.add("left-[30%]");
          }
        }
      }
    };
    setTimeout(() => {
      animateImages();
    }, 500)

  }, []);

  return (
    <section className={`mt-10 max-w-[1800px] mx-auto`}>
      <div className={`p-5 flex justify-center items-center relative overflow-hidden h-[60vh]`}>

        <img id={`home-img-1`} src="/home/outNow.png" alt="outNow" className={`absolute duration-700 
          xl:w-[40%] lg:w-[60%] w-[70%] 
          -left-[100%] lg:-left-[40%] 
          lg:top-[60%] top-[62%] 
          -translate-y-1/2 z-[52]`}/>
        <img id={`home-img-2`} src="/home/debut.png" alt="debug" className={`absolute duration-700 xl:w-[40%] lg:w-[60%] w-[70%] -right-[100%] lg:-right-[40%] top-[40%] -translate-y-1/2 z-[51]`}/>
        <img id={`home-img-3`} src="/home/pitbul.png" alt="debug" className={`absolute duration-700 
          xl:w-[40%] lg:w-[60%] w-[70%] 
          left-1/2 
          -top-1/2 
          -translate-x-1/2 -translate-y-1/2 z-[50]`}/>

      </div>
    </section>
  )
}