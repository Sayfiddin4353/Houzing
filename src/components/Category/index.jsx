import React, { useState, useEffect } from "react";
import { Container } from "./style";
import Slider from "react-slick";
import CategoryCard from "../CategoryCard";
import { useNavigate } from "react-router-dom";
const { REACT_APP_BASE_URL: url } = process.env;
const settings = {
  className: "center",
  centerMode: true,  
  infinite: true,
  centerPadding: "20px",
  slidesToShow: 4,
  speed: 500,
  dots:true,
  arrow:true,
  adaptiveHeight:true,
  appenDots :(dots)=> <h1>{dots}</h1>
};

const Category = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => setData(res?.data || []));
  }, []);

 const navigate=useNavigate();
  return (
    <Container>
      <Slider {...settings}>
        {data?.map((item) => {
          return <CategoryCard onClick={()=>navigate(`/properties?category_id=${item.id}`)} key={item.id} data={item} />;
        })}
      </Slider>
    </Container>
  );
};

export default Category;
