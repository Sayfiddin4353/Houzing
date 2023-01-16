import React, { useState } from "react";
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
  Button,
} from "./style";
import { Input } from "../Generic";
import { useEffect } from "react";
import Noimg from "../../assets/images/noimg.png";

const { REACT_APP_BASE_URL: url } = process.env;
const MyProperties = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${url}/houses/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res?.data || []));
  }, []);

  return (
    <Container>
      <Wrapper>
        <Header>
          <Header.Title> My properties</Header.Title>
          <Header.Search>
            <Input placeholder="Search" />
          </Header.Search>
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
              {data.map((item) => {
                return (
                  <Tr key={item.id}>
                    <Td>
                      <Box>
                        <ImgCard>
                          <ImgCard.Img
                            src={item?.attachments[0].imgPath || Noimg}
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
                        <Button>For Sale</Button>
                      </Box>
                    </Td>
                    <Td center>{item?.houseDetails?.yearBuilt}</Td>
                    <Td center>{item?.user?.email}</Td>
                    <Td center>{item?.price}</Td>
                    <Td center>
                      <Icon>
                        {" "}
                        <Icon.Edit />
                        <Icon.Delete />
                      </Icon>
                    </Td>
                  </Tr>
                );
              })}
            </Table.Body>
          </Table>
        </Product>
      </Wrapper>
    </Container>
  );
};

export default MyProperties;
