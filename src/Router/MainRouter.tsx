import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from '../Components/Navbar'
import AboutUs from '../Pages/AboutUs';
import { Homepage } from '../Pages/Homepage';
import { Works } from '../Pages/Works';
import { Services } from '../Pages/Services';
import { News } from '../Pages/News';



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
        <Route path="/blogs" element={<h1>Blogs</h1>} />
        <Route path="/news" element={<News />} />
      </Routes>
      
    </div>
  )
}

export default MainRouter
