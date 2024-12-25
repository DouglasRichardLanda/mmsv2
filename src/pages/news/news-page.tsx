import {Link} from "react-router-dom";


export default function NewsPage () {

  return (
    <section className={`mb-20`}>
      <NewsArticle />
    </section>
  )
}

export function NewsArticle () {

  return (
    <div className={`max-w-[1400px] w-full mx-auto bg-gray-300 text-black tracking-wider p-2 sm:p-10 relative`}>
      <img src="/images/newscorner.png" alt="newscorner" className={`absolute top-2 right-2 w-[30%] lg:w-[15%]`}/>
      <div className={`font-extralight`}>
        Date: <span className={`font-bold`}>5th November 2024</span>
      </div>
      <h2 className={`text-center text-lg sm:text-2xl font-bold uppercase block my-5 text-red-600 w-1/2 mx-auto`}>Hola Amigos, Hola Mexico! Banda de Punk llamada “Mad Man’s Spirit” Cargado De Energía y Adrenalina</h2>
      <pre className={`flex flex-col gap-3 break-words whitespace-pre-wrap font-nunito px-5 font-light `}>
          {`Recently we have discovered, that we are already known in Mexico too. Hola amigos! We wish that we could get your attention to our music and that you really enjoy it.
  
The news about our debut at Mexican Endsessions Magazine starts with " Hace poco la poderosa banda de Punk llamada “Mad Man’s Spirit” ha debutado con un proyecto cargado de energía y adrenalina, este lanzamiento es autenticidad pura para la agrupación ya que aquí nos demuestran de que están hechos, ofrecen temas densos con una atmósfera explosiva, es el perfecto balance entre libertad e intensidad, por ello al escuchar sus temas te sentirás enganchado, si eres un entusiasta de los sonidos picantes y tenaces entonces esta combinación de Rock retro, Rock Pop y Pop Punk será una de las mejores inmersiones que podrás tener…"

In English "Recently the powerful Punk band called "Mad Man's Spirit" has debuted with a project full of energy and adrenaline, this release is pure authenticity for the group since here they show us what they are made of, they offer dense songs with an explosive atmosphere, it is the perfect balance between freedom and intensity, so when listening to their songs you will feel hooked, If you are an enthusiast of spicy and tenacious sounds then this combination of Retro Rock, Pop Rock and Pop Punk will be one of the best dives you can have..."

It is unbelievable how perfect the communication through music works, that in whichever country it evokes the same feelings, understanding and impression, that the author put into it and to get the expected reaction from the listener. The tones and melody can't lie and the energy they are charged with, can not be hidden!

Muchos gracias Eduargocruz for Your astonishing review of our EP!`}
      </pre>
      <div className={`font-extralight mt-10 flex justify-between flex-col sm:flex-row`}>
        <div>
          Link: <Link to={`#`} className={`font-bold text-red-600 text-xs lg:text-lg`}>https://endsessions.com.mx/2024/08/21/mad-mans-spirit-mad-mans-spirit/</Link>
        </div>
      </div>
    </div>
  )
}