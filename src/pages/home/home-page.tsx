import {useEffect} from "react";


export default function HomePage () {

  useEffect(() => {

  }, []);

  return (
    <section className={`mt-10`}>
      <div className={`p-5 flex justify-center items-center min-h-[60vh] relative`}>

        <img id={`home-img-1`} src="/home/outNow.png" alt="outNow" className={`absolute right-[10%] bottom-[10%] z-[52]`}/>
        <img id={`home-img-2`} src="/home/debut.png" alt="debug" className={`absolute left-[10%] top-[10%] z-[51]`}/>
        <img id={`home-img-3`} src="/home/pitbul.png" alt="debug" className={`absolute z-[50]`}/>

      </div>
    </section>
  )
}