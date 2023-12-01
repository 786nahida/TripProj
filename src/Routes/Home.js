import React from 'react';
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import HeroImg from "../Assets/1.jpg";
import Footer from "../Components/Footer";

function Home(){
 

  return (
    <>
      <Navbar/>
      <Hero
        cName="hero"
        heroimg={HeroImg}
        
       
        text="your journey your story"
        buttontext="travell plan"
        url="/"
        btnclass="show"
      />
      
      <Footer/>
    </>
  );
}

export default Home;