import { Carousel } from "antd";
import React, { useRef } from "react";
import {
  ArrowContainer,
  ArrowLeft,
  ArrowRight,
  ArrowWrapper,
  Blur,
  Container,
  Content,
  ImgCarousel,
} from "./style";
import img1 from "../../assets/images/slider1.png";
import img2 from "../../assets/images/slider2.png";
import img3 from "../../assets/images/slider3.png";
import img4 from "../../assets/images/slider4.png";

const GenCarousel = () => {
  const slider = useRef();
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const onMove = ({
    target: {
      dataset: { name },
    }
  }) => {   
    if (name === "right") slider.current.next();
    if (name === "left") slider.current.prev();
  };

  return (
    <Container>
      <Carousel ref={slider} afterChange={onChange}>
        <ImgCarousel src={img1} />
        <ImgCarousel src={img2} />
        <ImgCarousel src={img3} />
        <ImgCarousel src={img4} />
      </Carousel>
      <Blur />

      <ArrowContainer>
        <ArrowWrapper>
          <ArrowLeft data-name="left" onClick={onMove} />
          <ArrowRight data-name="right" onClick={onMove} />{" "}
        </ArrowWrapper>
      </ArrowContainer>
      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Desc> 112 Glenwood Ave Hyde Park, Boston, MA </Content.Desc>
        <Content.Price> $5,250/mo</Content.Price>
      </Content>
    </Container>
  );
};

export default GenCarousel;
