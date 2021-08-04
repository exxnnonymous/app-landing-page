


import React from 'react';
import Hero from "./HomeComponent/Hero/Hero";
import Features from "./HomeComponent/Features/Features";
import Services from "./HomeComponent/Services/Services";
import MobileApps from "./HomeComponent/MobileApps/MobileApps";
import Pricing from "./HomeComponent/Pricing/Pricing";
import Review from "./HomeComponent/Review/Review";
import DownloadApp from "./HomeComponent/DownloadApp/DownloadApp";
import Contact from "./HomeComponent/Contact/Contact";
import Footer from "./HomeComponent/Footer/Footer";

function Home() {
    return (
        <div className="home">
            <Hero />
            <Features />
            <Services />
            <MobileApps />
            <Pricing />
            <Review />
            <DownloadApp />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
