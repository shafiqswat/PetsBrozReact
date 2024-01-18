/** @format */

import React from "react";
import HeaderComponent from "../../Component/Header";
import AboutHero from "../../Component/AboutHeroSection";
import AboutUs from "../../Component/AboutUs";
import Footer from "../../Component/Footer";

function About() {
  const items = [
    { id: 1, paragraph: "1. Visit Petsbroz.com" },
    { id: 2, paragraph: "2. Go to Pet Buy and Sell Portal" },
    { id: 3, paragraph: "3. Search and filter what you are looking for" },
    { id: 4, paragraph: "4. Contact the current owner via provided channels" },
    {
      id: 5,
      paragraph:
        "5. Re-locate the pet using our relocation service or any preferred method.",
    },
  ];
  return (
    <div>
      <HeaderComponent />
      <AboutHero />
      <AboutUs
        Heading1Text='About Us'
        aboutUsPara='Based globally Petsbroz.com is one of the reputable and devoted website that offers genuine services for your beloved pets. Log in directly to Petsbroz.com to find an extensive list of every possible pet available worldwide. Our website comprises of several choices to choose from. Our website is mainly projected for the “Pet Engage” section where you can look for the appropriate mate for your pet whether they are mammals, reptiles, invertebrates, amphibians, sea animals, or birds.'
        aboutUsPath='/img/aboutcustomer.png'
      />
      <AboutUs
        Heading1Text='Pet Buy | Pet Sale – Pet Buying and selling Service'
        aboutUsPara='Petsbroz.com let’s you choose from several available pets online. You can contact directly via phone or email and buy exclusive pets just in few clicks which saves your time and money for locating and navigating to the pet of your choice.'
        aboutUsPath='/img/aboutcustomerOne.png'
        heading4Text='How can you buy pet online – at Petsbroz?'
        items={items}
      />
      <Footer />
    </div>
  );
}

export default About;
