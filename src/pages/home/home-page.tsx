import {useEffect} from "react";


export default function HomePage () {

  useEffect(() => {
    const logo = document.getElementById("main-logo")
    window.onload = () => {
      if(logo) {
        logo.classList.remove("opacity-0");
        logo.classList.add("opacity-100");
      }
    }
  }, []);

  return (
    <section className={`mt-10`}>
      <img id={"main-logo"} src="images/logo1-removebg-preview.png" alt="" className={`mx-auto opacity-0 duration-700`}/>
      <div className={`p-5 flex justify-center items-center`}>

      </div>
    </section>
  )
}