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
import CategoryCard from "../CategoryCard";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
const { REACT_APP_BASE_URL: url } = process.env;
const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "25px",
  slidesToShow: 3,
  speed: 400,
  dots: true,
  arrows: false,
  adaptiveHeight: true,
  appenDots: (dots) => <h1>{dots}</h1>,
};

const Category = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => setData(res?.data || []));
  }, []);

  const navigate = useNavigate();
  const sliderRef = useRef();
  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "right") sliderRef.current.slickNext();
    if (name === "left") sliderRef.current.slickPrev();
  };
  return (
    <Container>
      <Wrapper>
        <Wrapper.Title className={"title"}>Category</Wrapper.Title>
        <Wrapper.Desc className={"info"}>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </Wrapper.Desc>
        <Slider {...settings} ref={sliderRef}>
          {data?.map((item) => {
            return (
              <CategoryCard
                onClick={() => navigate(`/properties?category_id=${item.id}`)}
                key={item.id}
                data={item}
              />
            );
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

export default Category;
