import React from "react";
import Carousel from "../Carousel";
import Category from "../Category";
import Recommended from "../Recommended";


import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <Carousel />   
      <Recommended/>       
      <Category/>
    </Container>
  );
};

export default Home;
