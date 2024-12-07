import {Route, Routes} from "react-router-dom";
import MainLayout from "../layouts/main-layout.tsx";


export default function Navigation () {

  return (
    <Routes>
      <Route path={`/`} element={<MainLayout />}>
        <Route index element={<div>Router path /</div>} />
      </Route>
    </Routes>
  )
}