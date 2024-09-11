import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Section/Main";
import Footer from "./components/Footer/Footer";
import Mac from "./components/Pages/mac/Mac";
import Ipod from "./components/Pages/ipod/Ipod";
import Iphone from "./components/Pages/iphone/Iphone";
import Watch from "./components/Pages/watch/Watch";
import Music from "./components/Pages/music/Music";
import Tv from "./components/Pages/tv/Tv";
import { Route, Routes } from "react-router-dom";
import Error from "./components/Pages/Error/Error";
import SharedRoute from "./components/Pages/Shared/SharedRoute";
import SingleProduct from "./components/Pages/iphone/SingleProduct";
import YoutubeVideos from "./components/Youtubevideo/YoutubeVideos";
import "./Resource/css/styles.css";
function App() {
  return (
    <>
      {" "}
      <Routes>
        <Route path="/" element={<SharedRoute />}>
          <Route path="/" element={<Main />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/iphone/" element={<Iphone />} />
          <Route path="/iphone/:id" element={<SingleProduct />} />
          <Route path="/ipod" element={<Ipod />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/music" element={<Music />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      ;
    </>
  );
}

export default App;
