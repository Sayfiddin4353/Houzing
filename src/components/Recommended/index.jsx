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
const { REACT_APP_BASE_URL: url } = process.env;
const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "20px",
  slidesToShow: 3,
  speed: 400,
  dots: false,
  arrows: false,
  adaptiveHeight: true,
  appenDots: (dots) => <h1>{dots}</h1>,
};

const Recommended = () => {
  const [data, setData] = useState([]);

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
        <Container.Title className={"title"}>Recommended</Container.Title>
        <Container.Desc>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.{" "}
        </Container.Desc>
        <Slider {...settings} ref={silderRef}>
          {data?.map((item) => {
            return <HouseCard gap={10} key={item.id} data={item} />;
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

export default Recommended;
