import React from "react";
import { Blur, Container, Content, ImgCarousel } from "./style";
import Button from "../Generic/Button";
import img2 from "../../assets/images/slider2.png";

const Vermont = () => {
  return (
    <Container>
      <ImgCarousel src={img2} />
      <Blur />
      <Content>
        <Content.Title>
          Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home
        </Content.Title>
        <Button width={180}>Read more</Button>
      </Content>
    </Container>
  );
};

export default Vermont;
