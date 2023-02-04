import React from "react";
import {
  Container,
  Header,
  Product,
  Table,
  Td,
  Th,
  Tr,
  Wrapper,
  Icon,
  Box,
  ImgCard,
  Info,
  ButtonProduct,
  Text,
} from "./style";

import Noimg from "../../assets/images/noimg.png";
import { Button } from "../Generic";
import { useNavigate } from "react-router-dom";
import { memo } from "react";
import { useQuery } from "react-query";
import { message } from "antd";
const { REACT_APP_BASE_URL: url } = process.env;

const MyProperties = () => {
  const navigate = useNavigate();
  const { refetch, data } = useQuery([], async () => {
    const res = await fetch(`${url}/houses/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.json();
  });

  const onDelete = (id) => {
    fetch(`${url}/houses/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res?.success) {
          message.info("Successfully deleted");
          refetch();
        }
      });
  };

  return (
    <Container>
      <Wrapper>
        <Header>
          <Header.Title> My properties</Header.Title>
          <Header.Add>
            <Button
              width={"100%"}
              onClickProp={() => navigate("/myproperties/addproperties")}
            >
              Add New House
            </Button>
          </Header.Add>
        </Header>
        <Product>
          <Table>
            <Table.Head>
              <Tr>
                <Th>Listing Title</Th>
                <Th style={{ width: "120px" }}>Year Build</Th>
                <Th>Email</Th>
                <Th style={{ width: "100px" }}>Price</Th>
                <Th style={{ width: "100px" }}>Action</Th>
              </Tr>
            </Table.Head>
            <Table.Body>
              {data?.data?.map((item) => {
                return (
                  <Tr key={item.id}>
                    <Td>
                      <Box>
                        <ImgCard>
                          <ImgCard.Img
                           onClick={()=>navigate(`/properties/${item.id}`)}
                            src={item?.attachments[0]?.imgPath || Noimg}
                          />
                        </ImgCard>
                        <Info>
                          <Info.Name>
                            {item?.name || "New Apartment Nice Wiew"}
                          </Info.Name>
                          <Info.Address>
                            {item?.address} {item?.country}
                          </Info.Address>
                          <Info.SaleP>
                            <del>${item?.salePrice}</del>
                          </Info.SaleP>
                          <Info.Price>${item?.price}</Info.Price>
                        </Info>
                        <ButtonProduct>For Sale</ButtonProduct>
                      </Box>
                    </Td>
                    <Td center>{item?.houseDetails?.yearBuilt}</Td>
                    <Td center>{item?.user?.email}</Td>
                    <Td center>{item?.price}</Td>
                    <Td center>
                      <Icon>
                        {" "}
                        <Icon.Edit onClick={()=>navigate(`/myproperties/edithouse/${item?.id}`)} />
                        <Icon.Delete onClick={() => onDelete(item?.id)} />
                      </Icon>
                    </Td>
                  </Tr>
                );
              })}
            </Table.Body>
          </Table>
          {data?.data?.length === undefined && <Text>Not data found</Text>}
        </Product>
      </Wrapper>
    </Container>
  );
};

export default memo(MyProperties);
