import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "../Components/Navbar";
import AboutUs from "../Pages/AboutUs";
import { Homepage } from "../Pages/Homepage";
import { Works } from "../Pages/Works";
import { Services } from "../Pages/Services";
import { News } from "../Pages/News";
import Blog from "../Pages/Blog";
import  FbaCalculator  from "../Pages/FbaCalculator";
import ListingCalculator from "../Pages/ListingCalculator";
import DiscriptionToCode from "../Pages/DiscriptionToCode";
import NewsContent from "../Container/News/NewsContent";

const MainRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<h1>Hello from Homepage</h1>} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ourservices" element={<Services />} />
        <Route path="/works" element={<Works />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/news" element={<News />} />
        <Route path="/newsContent" element={<NewsContent />} />
        <Route path="/home/fbaCalculator" element={<FbaCalculator />}></Route>
        <Route path="/home/listingCalculator" element={<ListingCalculator />}></Route>
        <Route path="/home/descriptionToCode" element={<DiscriptionToCode/>}></Route>
      </Routes>
    </div>
  );
};

export default MainRouter;
