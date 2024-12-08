import {Outlet} from "react-router-dom";
import Header from "../components/header/header.tsx";
import Footer from "../components/footer/footer.tsx";


export default function MainLayout () {

  return (
    <>
      <Header />
      <main className={`px-40 min-h-screen`}>
        <Outlet />
      </main>
      <img src="images/logo2-removebg-preview.png" alt="" className={`fixed left-10 bottom-10 w-[200px] hover:animate-spin`}/>
      <img src="images/logo23-removebg-preview.png" alt="" className={`fixed right-10 bottom-10 w-[200px] hover:animate-ping`}/>
      <Footer />
    </>
  )
}