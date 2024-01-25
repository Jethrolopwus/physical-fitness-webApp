import React from "react";
import "./Home.css";
import MainHeaderHeader from "../../Components/MainHeader";
import Programs from "../../Components/Programs";
import Values from "../../Components/Values";
import FAQs from "../../Components/FAQs";
import Testimonials from "../../Components/Testimonials";


const Home = () =>{
    return (
        <>
          <MainHeaderHeader/>
          <Programs/>
          <Values/>
          <FAQs/>
          <Testimonials/>
         
        </>
    )
}
export default Home;