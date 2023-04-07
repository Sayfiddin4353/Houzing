import React, { useContext } from "react";
import { Container, Wrapper } from "./style";
import HouseCard from "../HouseCard";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

import { PropertiesContext } from "../../context/properties";
const { REACT_APP_BASE_URL: url } = process.env;

const Favourite = () => {
  const [, dispatch] = useContext(PropertiesContext);
  const navigate = useNavigate();

  const { refetch, data } = useQuery(
    [],
    async () => {
      const res = await fetch(`${url}/houses/getAll/favouriteList`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return await res.json();
    },
    {
      onSuccess: (res) => {
        dispatch({ type: "refetch", payload: refetch });
      },
    }
  );

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };
  return (
    <Container>
      <Container.Title>Favourite</Container.Title>
      <Container.Desc>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </Container.Desc>
      <Wrapper>
        {data?.data?.length > 0 ? (
          data?.data?.map((value) => {
            return (
              <HouseCard
                onClick={() => onSelect(value.id)}
                key={value.id}
                data={value}
              />
            );
          })
        ) : (
          <Container.Title>You have not favourite house </Container.Title>
        )}
      </Wrapper>
    </Container>
  );
};

export default Favourite;
