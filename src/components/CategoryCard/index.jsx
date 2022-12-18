import React from "react";
import { Blur, Container, DescWrapper, Image } from "./style";
import Noimg from "../../assets/images/noimg.png";
import CategoryImg from "../../assets/images/categoryimg.png";

const CategoryCard = ({ onClick, data = {} }) => {
  const { name } = data;
  return (
    <Container onClick={onClick}>
      <Image src={CategoryImg || Noimg} />
      <Blur />
      <DescWrapper>{name || "Category"}</DescWrapper>
    </Container>
  );
};

export default CategoryCard;
