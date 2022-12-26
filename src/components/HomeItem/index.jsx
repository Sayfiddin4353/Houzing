import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./style";
const { REACT_APP_BASE_URL: url } = process.env;
function HomeItem() {
  const params = useParams();
  const [data, setData] = useState({});
  console.log(data,"homeitem");
  useEffect(() => {
    params?.id &&
      fetch(`${url}/houses/id/${params?.id}`)
        .then((res) => res.json())
        .then((res) => setData(res?.data||{}));
  }, [params?.id]);

  return <Container>HomeItem {params?.id}</Container>;
}

export default HomeItem;
