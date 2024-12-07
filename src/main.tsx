import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";

import './styles/index.css'
import Navigation from "./navigation/navigation.tsx";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Navigation />
  </BrowserRouter>
)
