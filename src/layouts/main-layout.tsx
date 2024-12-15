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
      <Footer />
    </>
  )
}