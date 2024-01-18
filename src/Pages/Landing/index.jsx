/** @format */

import React from "react";
import Header from "../../Component/Header";
import HeroSectionComponent from "../../Component/HeroSection";
import BrowseSection from "../../Component/BrowseSection";
import CategoriesComponent from "../../Component/Categories";
import CheckComponent from "../../Component/CheckSection";
import CustomerCardSection from "../../Component/CustomerCardSection";
import Footer from "../../Component/Footer";

function Landing() {
  return (
    <div>
      <Header />
      <HeroSectionComponent />
      <CategoriesComponent />
      <BrowseSection />
      <CheckComponent />
      <CustomerCardSection />
      <Footer />
    </div>
  );
}

export default Landing;
