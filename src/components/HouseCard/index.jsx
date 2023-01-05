import React from "react";
import {
  Container,
  DescPargraph,
  DescWrapper,
  Details,
  DetailsItem,
  FooterLeft,
  FooterRight,
  FooterWrapper,
  Icons,
  Image,
  Title,
} from "./style";
import Noimg from "../../assets/images/noimg.png";

const HouseCard = ({ data = {}, gap, onClick }) => {
  const {
    address,
    attachments,
    city,
    country,
    description,
    houseDetails,
    price,
    salePrice,
    category,
  } = data;

  return (
    <Container gap={gap} onClick={onClick}>
      <Image src={attachments?.[0]?.imgPath || Noimg} />
      <DescWrapper>
        <Title className="subtitle inline">
          {(city, country, description) || "No Information"}
        </Title>
        <DescPargraph className="desc_info">
          {address || "Quincy St, Brooklyn, NY, USA"}-
          {category?.name || "Category"} {houseDetails?.room || 0}-rooms
        </DescPargraph>
        <Details>
          <DetailsItem>
            <Icons.Bed />
            <Icons.Desc className={"desc-info"}>
              {houseDetails?.beds || 0} Beds
            </Icons.Desc>
          </DetailsItem>
          <DetailsItem>
            <Icons.Bath />
            <Icons.Desc className={"desc-info"}>
              {houseDetails?.bath || 0} Baths
            </Icons.Desc>
          </DetailsItem>
          <DetailsItem>
            <Icons.Car />
            <Icons.Desc className={"desc-info"}>
              {houseDetails?.garage || 0} Garage
            </Icons.Desc>
          </DetailsItem>
          <DetailsItem>
            <Icons.Ruler />
            <Icons.Desc className={"desc-info"}>
              {houseDetails?.area || 0} Sq Ft
            </Icons.Desc>
          </DetailsItem>
        </Details>
      </DescWrapper>
      <FooterWrapper>
        <FooterLeft>
          <FooterLeft.DescP className="desc_info">
            <del>${price || 0}/mo</del>
          </FooterLeft.DescP>
          <FooterLeft.DescPrice className="subtitle">
            ${salePrice || 0}/mo
          </FooterLeft.DescPrice>
        </FooterLeft>
        <FooterRight>
          <Icons.Resize />
          <Icons.Love />
        </FooterRight>
      </FooterWrapper>
    </Container>
  );
};

export default HouseCard;
