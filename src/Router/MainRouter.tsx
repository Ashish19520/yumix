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
import BlogContent from "../Container/Blog/BlogContent";

import DigitalMedia from "../Pages/DigitalMedia";
import Analytics from "../Pages/Analytics";
import CustomerExpierence from "../Pages/CustomerExpierence";

import PaidSearch from "../Pages/DigitalMediaSub/PaidSearch";
import Amazon from "../Pages/DigitalMediaSub/Amazon";
import MarketPlaceStrategy from "../Pages/DigitalMediaSub/MarketPlaceStrategy";
import SeoMarketing from "../Pages/DigitalMediaSub/SeoMarketing";
import AffilateAdvertising from "../Pages/DigitalMediaSub/AffilateAdvertising";
import SocialMediaManagement from "../Pages/DigitalMediaSub/SocialMediaManagement";
import EmailMarketing from "../Pages/DigitalMediaSub/EmailMarketing";
import AutomatedAdvertising from "../Pages/DigitalMediaSub/AutomatedAdvertising";
import CustomerExperienceAnalytics from "../Pages/Analytics/CustomerExperienceAnalytics";
import AdvancedAnalytics from "../Pages/Analytics/AdvancedAnalytics";
import MarketingMeasuremnet from "../Pages/Analytics/MarketingMeasurement";
import PlatformEnablement from "../Pages/Analytics/PlatformEnablement";
import DesignCustomer from "../Pages/CustomerExpierence/DesignCustomer";
import WebMobileCustomer from "../Pages/CustomerExpierence/WebMobileCustomer";
import ContentMarketingCustomer from "../Pages/CustomerExpierence/ContentMarketingCustomer";
import OurWorks1 from "../Pages/Content/OurWorks1";
import OurWorks2 from "../Pages/Content/OurWorks2";



const MainRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<h1>Hello from Homepage</h1>} />
        <Route path="/aboutus" element={<AboutUs />} />

        <Route path="/ourservices" element={<Services />} />
        
        <Route path="/ourservices/digitalMedia" element={<DigitalMedia />} />
        <Route path="/digitalMedia/paidSearch" element={<PaidSearch/>} />
        <Route path="/digitalMedia/amazon" element={<Amazon/>} />
        <Route path="/digitalMedia/marketPlace" element={<MarketPlaceStrategy/>} />
        <Route path="/digitalMedia/seoMarketing" element={<SeoMarketing/>} />
        <Route path="/digitalMedia/affilateAdvertising" element={<AffilateAdvertising/>} />
        <Route path="/digitalMedia/socialMediaManagement" element={<SocialMediaManagement/>} />
        <Route path="/digitalMedia/emailMarketing" element={<EmailMarketing/>} />
        <Route path="/digitalMedia/automatedAdvertising" element={<AutomatedAdvertising/>} />



        <Route path="/analytics" element={<Analytics/>} />
        <Route path="/analytics/customerExpierenceAnalytics" element={<CustomerExperienceAnalytics/>} />
        <Route path="/analytics/advancedAnalytics" element={<AdvancedAnalytics/>} />
        <Route path="/analytics/marketMeasurement" element={<MarketingMeasuremnet/>} />
        <Route path="/analytics/platformEnablement" element={<PlatformEnablement/>} />


        <Route path="/customerExperience" element={<CustomerExpierence/>} />
        <Route path="/customerExpierence/design" element={<DesignCustomer/>} />
        <Route path="/customerExpierence/mobileWebDev" element={<WebMobileCustomer/>} />
        <Route path="/customerExpierence/contactMarketing" element={<ContentMarketingCustomer/>} />
        

        <Route path="/works/work1" element={<OurWorks1 />} />
        <Route path="/works/work2" element={<OurWorks2 />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works" element={<Works />} />



        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:id" element={<BlogContent />} />
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
