import React from "react";
import NavBar from "../src/components/NavBar";
import Hero from "../src/components/Hero";
import Services from "../src/components/Services";
import Books from "../src/components/Books";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import Blog from "../src/components/Blog";
import Expectatives from "../src/components/Expectatives";
import Gallery from "../src/components/Gallery";
import Videos from "../src/components/videos";



const Home = () => {
  return (
    <div className="site-wrap">
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>
      <NavBar variant="primary" />
      <Hero />
      <Services />
      <Expectatives />
      <Gallery />
      <Books />
      <Blog />
      <Videos/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
