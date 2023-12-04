import React from "react";
import "./Home.css";
import MainHeaderHeader from "../../Components/MainHeader";
import Programs from "../../Components/Programs";
import Values from "../../Components/Values";

const Home = () =>{
    return (
        <>
          <MainHeaderHeader/>
          <Programs/>
          <Values/>
        </>
    )
}
export default Home;