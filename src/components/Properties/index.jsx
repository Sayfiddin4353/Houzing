import React, { useEffect, useState } from "react";
import { Container, Wrapper } from "./style";
import HouseCard from "../HouseCard";
import { useLocation, useNavigate } from "react-router-dom";
// import useRequest from "../../hooks/useRequest";

const { REACT_APP_BASE_URL: url } = process.env;

const Properties = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const navigate=useNavigate();
  // const request=useRequest();
  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => setData(res?.data || []));
    // request({url:`/houses/list${search}`})
    
  }, [search]);

  const onSelect=(id)=>{
   navigate(`/properties/${id}`)
  }
  return (
    <Container>
      <Wrapper>
        {data?.map((value) => {
          return <HouseCard onClick={()=>onSelect(value.id)} key={value.id} data={value} />;
        })}
      </Wrapper>
    </Container>
  );
};

export default Properties;
