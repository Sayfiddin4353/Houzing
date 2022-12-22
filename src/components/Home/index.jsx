import React from "react";
import Carousel from "../Carousel";
import Category from "../Category";
import Recommended from "../Recommended";
import Resent from "../Resent";
import Vermont from "../Vermont";
import WhyChoose from "../WhyChoose";


import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <Carousel />   
      <Recommended/> 
      <WhyChoose/>      
      <Category/>
      <Vermont/>
      <Resent/>
    </Container>
  );
};

export default Home;
