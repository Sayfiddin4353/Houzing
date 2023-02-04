import React, { useState, useEffect } from "react";
import {
  ArrowContainer,
  ArrowLeft,
  ArrowRight,
  ArrowWrapper,
  Container,
  Wrapper,
} from "./style";
import Slider from "react-slick";

import HouseCard from "../HouseCard";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { memo } from "react";
const { REACT_APP_BASE_URL: url } = process.env;
const settings = {
  slidesToScroll: 1,
  initialSlide: 0,
  infinite: false,
  slidesToShow: 3,
  speed: 400,
  dots: false,
  arrows: false,
  adaptiveHeight: true,  
  appenDots: (dots) => <h1>{dots}</h1>,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Resent = () => {
  const [data, setData] = useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => setData(res?.data || []));
  }, []);

  const silderRef = useRef();

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "right")silderRef.current.slickNext();
    if (name === "left")silderRef.current.slickPrev();
  };
  return (
    <Container>
      <Wrapper>
        <Container.Title className={"title"}>Recent Properties for Rent</Container.Title>
        <Container.Desc>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.{" "}
        </Container.Desc>
        <Slider {...settings} ref={silderRef}>
          {data?.map((item) => {
            return <HouseCard  key={item.id} data={item} onClick={()=>navigate(`/properties/${item.id}`)} />;
          })}
        </Slider>
      </Wrapper>
      <ArrowContainer>
        <ArrowWrapper>
          <ArrowLeft data-name="left" onClick={onMove} />
          <ArrowRight data-name="right" onClick={onMove} />{" "}
        </ArrowWrapper>
      </ArrowContainer>
    </Container>
  );
};

export default memo(Resent) ;
