import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Shared/Navbar/Navbar";
import Hero from "./HomeSections/Hero";
import ShopByCategory from "./HomeSections/ShopByCategory";
import Footer from "../../Shared/Footer/Footer";
import Bestseller from "./HomeSections/Bestsellers";
import NewArrivals from "./HomeSections/NewArival";
import Newsletter from "../../Shared/Newsletter/Newsletter";
import Testimonials from "./HomeSections/Testimonials";
import SkincarePhilosophy from "./HomeSections/SkincarePhilosophy";

const Home = () => {
  return (
    <div className="min-h-screen font-serif">
      <Helmet>
        <title>BeautyZone</title>
      </Helmet>
      <Navbar></Navbar>
      <Hero></Hero>
      <Bestseller></Bestseller>
      <ShopByCategory></ShopByCategory>
      <NewArrivals></NewArrivals>
      <SkincarePhilosophy></SkincarePhilosophy>
      <Testimonials></Testimonials>
      <Newsletter></Newsletter>
      <Footer></Footer>
      
    </div>
  );
};

export default Home;