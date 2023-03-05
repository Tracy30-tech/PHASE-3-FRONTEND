import React,{useState} from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


export default function Home() {

  
  return (
    <div>
      <h1 className="home">Home</h1>
      <h1 id="form">
        HYDRATECH INOVATIONS DESIGN AND BUILD
      </h1>
      <button className="btnhome">
        <Link to={"/signup"}> Create Account</Link>
      </button>
      <div> <Carousel/> </div>
      <div> <Footer /></div>
    </div>
  );
}
