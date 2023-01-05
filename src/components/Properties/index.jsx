import React, { useEffect, useState } from "react";
import { Container, FooterButton, Wrapper } from "./style";
import HouseCard from "../HouseCard";
import { useLocation, useNavigate } from "react-router-dom";
// import useRequest from "../../hooks/useRequest";
import { Button } from "../Generic";
const { REACT_APP_BASE_URL: url } = process.env;

const Properties = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const navigate = useNavigate();
  // const request=useRequest();
  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => setData(res?.data || []));
    // request({url:`/houses/list${search}`})
  }, [search]);
  
  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };
  return (
    <Container>
      <Container.Title>Properties</Container.Title>
      <Container.Desc>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </Container.Desc>
      <Wrapper>
        {data.length > 0 ? (
          data.map((value) => {
            return (
              <HouseCard
                onClick={() => onSelect(value.id)}
                key={value.id}
                data={value}
              />
            );
          })
        ) : (
          <Container.Title>No house found in this category</Container.Title>
        )}
      </Wrapper>
      <FooterButton>
        <Button width={250}>Show more</Button>
      </FooterButton>
    </Container>
  );
};

export default Properties;
