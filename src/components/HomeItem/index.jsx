import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import userImage from "../../assets/images/userImage.png";
import { Input, Button } from "../Generic";
import { Checkbox } from "antd";
import {
  BoxRightPrice,
  Container,
  Content,
  Desc,
  DescInfo,
  DescTitle,
  Details,
  DetailsItem,
  IconCard,
  IconContainer,
  Icons,
  Info,
  LeftContent,
  Location,
  LocationBox,
  Map,
  Message,
  PriceDesc,
  RightContent,
  Title,
  UserImage,
  UserName,
  Wrapper,
} from "./style";
import Yandex from "../Generic/Yandex";
import Recommended from "../Recommended";
const { REACT_APP_BASE_URL: url } = process.env;

function HomeItem() {
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    params?.id &&
      fetch(`${url}/houses/id/${params?.id}`)
        .then((res) => res.json())
        .then((res) => {
          setData(res?.data || {});
          window.scroll({
            top:0,
            behavior:"smooth"
          })
        });
  }, [params?.id]);

  return (
    <Container>
      <Wrapper>
        <Content>
          <LeftContent>
            <LeftContent.Box>
              <LeftContent.Box.Left>
                <Title>
                  {data?.description || "Luxury Family Loft by Victoria Park"}
                </Title>
                <Desc>
                  {data?.address || "Quincy St"},{data?.city || "Brooklyn, NY"},
                  {data?.country || "USA"}-{data?.category?.name}
                </Desc>
                <Details>
                  <DetailsItem>
                    <Icons.Bed />
                    <Icons.Desc>
                      {data?.houseDetails?.beds || 0} Beds
                    </Icons.Desc>
                  </DetailsItem>
                  <DetailsItem>
                    <Icons.Bath />
                    <Icons.Desc>
                      {data?.houseDetails?.bath || 0} Baths
                    </Icons.Desc>
                  </DetailsItem>
                  <DetailsItem>
                    <Icons.Car />
                    <Icons.Desc>
                      {data?.houseDetails?.garage || 0} Garage
                    </Icons.Desc>
                  </DetailsItem>
                  <DetailsItem>
                    <Icons.Ruler />
                    <Icons.Desc>
                      {data?.houseDetails?.area || 0} Sq Ft{" "}
                    </Icons.Desc>
                  </DetailsItem>
                  <DetailsItem>
                    <Icons.Calendar />
                    <Icons.Desc>
                      Year Built:{data?.houseDetails?.yearBuilt || 0}{" "}
                    </Icons.Desc>
                  </DetailsItem>
                </Details>
              </LeftContent.Box.Left>
              <LeftContent.Box.Right>
                <IconContainer>
                  <IconContainer.Item>
                    <IconCard>
                      <Icons.Share />
                    </IconCard>
                    <IconContainer.Desc>Share</IconContainer.Desc>
                  </IconContainer.Item>
                  <IconContainer.Item>
                    <IconCard>
                      <Icons.Love />
                    </IconCard>
                    <IconContainer.Desc>Love</IconContainer.Desc>
                  </IconContainer.Item>
                </IconContainer>
                <BoxRightPrice>
                  <BoxRightPrice.Sale>
                    <del>${data?.salePrice || 0}/mo</del>
                  </BoxRightPrice.Sale>
                  <BoxRightPrice.Price>
                    ${data?.price || 0}/mo
                  </BoxRightPrice.Price>
                </BoxRightPrice>
                <PriceDesc>
                  <PriceDesc.P>
                    {data?.user?.firstname || "Est. Mortgage"}
                  </PriceDesc.P>
                </PriceDesc>
              </LeftContent.Box.Right>
            </LeftContent.Box>
            <DescTitle>Description</DescTitle>
            <DescInfo>{data?.description}</DescInfo>
          </LeftContent>
          <RightContent>
            <RightContent.User>
              <UserImage src={userImage} />
              <UserName>
                <UserName.Name>Sayfiddin </UserName.Name>
                <UserName.Phone>+998936924353</UserName.Phone>
              </UserName>
            </RightContent.User>
            <Input placeholder="Name" mb={24} />
            <Input placeholder="Phone" mb={24} />
            <Input placeholder="Email" mb={24} />
            <Message>Message</Message>
            <Input mb={24} />
            <Checkbox>By submitting this form I agree to Terms of Use</Checkbox>
            <Button width={"%"}>Send Request</Button>
          </RightContent>
        </Content>
        {/* ++++++++++++++++++{"content user finished"}+++++++++++++++++++++++++++++ */}
        <Location>
          <Location.Top />
          <Location.Title>Location</Location.Title>
          <LocationBox>
            <LocationBox.Info>
              <Info>
                <Info.Title>Address</Info.Title>
                <Info.Desc>{data?.address || "address"}</Info.Desc>
              </Info>
              <Info>
                <Info.Title>City</Info.Title>
                <Info.Desc>{data?.city || "city"}</Info.Desc>
              </Info>
              <Info>
                <Info.Title>Area</Info.Title>
                <Info.Desc>{data?.houseDetails?.area || "area"}</Info.Desc>
              </Info>
            </LocationBox.Info>
            <LocationBox.Info>
              <Info>
                <Info.Title>State/Country</Info.Title>
                <Info.Desc>{data?.city || "city"}</Info.Desc>
              </Info>
              <Info>
                <Info.Title>Zip</Info.Title>
                <Info.Desc>{data?.zipCode || "zipCode"}</Info.Desc>
              </Info>
              <Info>
                <Info.Title>Country</Info.Title>
                <Info.Desc>{data?.country || "Country"}</Info.Desc>
              </Info>
            </LocationBox.Info>
            <Map>
              <Yandex />
            </Map>
          </LocationBox>
          <Location.Bottom />
        </Location>
        {/*+++++++++++++++ {"Location finished"} +++++++++++*/}
        <Location.Title>Property Details</Location.Title>
        <LocationBox>
          <LocationBox.Info>
            <Info>
              <Info.Title>Property ID :</Info.Title>
              <Info.Desc>{data?.id || "id"}</Info.Desc>
            </Info>
            <Info>
              <Info.Title>Bedrooms</Info.Title>
              <Info.Desc>{data?.room || "room"}</Info.Desc>
            </Info>
            <Info>
              <Info.Title>Property Type</Info.Title>
              <Info.Desc>{data?.category?.name || "category name"}</Info.Desc>
            </Info>
          </LocationBox.Info>
          <LocationBox.Info>
            <Info>
              <Info.Title>Price :</Info.Title>
              <Info.Desc>${data?.price || 0}</Info.Desc>
            </Info>
            <Info>
              <Info.Title>Bathrooms:</Info.Title>
              <Info.Desc>1</Info.Desc>
            </Info>
            <Info>
              <Info.Title>Property Status</Info.Title>
              <Info.Desc>{data?.description || "for Sale"}</Info.Desc>
            </Info>
          </LocationBox.Info>
        </LocationBox>
        <Location.Bottom />
      </Wrapper>
      <Recommended />
    </Container>
  );
}

export default HomeItem;
