import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";

import './styles/index.css'
import Navigation from "./navigation/navigation.tsx";
import ScrollToTop from "./layouts/scroll-to-top.tsx";
import Cookies from "./layouts/cookies-layout.tsx";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Cookies />
    <ScrollToTop />
    <Navigation />
  </BrowserRouter>
)
