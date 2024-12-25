import {Route, Routes} from "react-router-dom";
import MainLayout from "../layouts/main-layout.tsx";
import HomePage from "../pages/home/home-page.tsx";
import NewsPage from "../pages/news/news-page.tsx";
import MusicPage from "../pages/music/music-page.tsx";
import VideoPage from "../pages/video/video-page.tsx";
import BioPage from "../pages/bio/bio-page.tsx";
import AdminPage from "../pages/administration/admin-page.tsx";


export default function Navigation () {

  return (
    <Routes>
      <Route path={`/`} element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path={`news`} element={<NewsPage />} />
        <Route path={`music`} element={<MusicPage />} />
        <Route path={`videos`} element={<VideoPage />} />
        <Route path={`bio`} element={<BioPage />} />
        <Route path={`administration`} element={<AdminPage />} />

        <Route path={`*`} element={<HomePage />} />
      </Route>
    </Routes>
  )
}