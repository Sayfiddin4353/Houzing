import React, { useContext } from "react";
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
import { message } from "antd";
import { PropertiesContext } from "../../context/properties";

const { REACT_APP_BASE_URL: url } = process.env;
const HouseCard = ({ data = {}, gap, onClick }) => {
 
  const {
    id,
    address,
    attachments,
    city,
    country,
    description,
    houseDetails,
    price,
    salePrice,
    category,
    favorite,
  } = data;
  const [state] = useContext(PropertiesContext);
  const onFavourite = (e) => {
    e.stopPropagation();
    fetch(`${url}/houses/addFavourite/${id}?favourite=${!favorite}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (favorite) res?.success && message.warning("this home is disliked");
        else res?.success && message.info("this home is liked");
        state.refetch && state.refetch();
      });
  };
  return (
    <Container gap={gap} onClick={onClick}>
      <Image src={attachments?.[0]?.imgPath===("string")?Noimg:attachments?.[0]?.imgPath} />
      <DescWrapper>
        <Title className="subtitle inline">
          {(city, country, description) || "No Information"}
        </Title>
        <DescPargraph className="desc_info">
          {address || "Quincy St, Brooklyn, NY, USA"}-
          {category?.name || "Category name"} {houseDetails?.room || 0}-rooms
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
          <Icons.Love onClick={onFavourite} favorite={favorite} />
        </FooterRight>
      </FooterWrapper>
    </Container>
  );
};

export default HouseCard;
