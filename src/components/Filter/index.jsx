import React, { useRef, useEffect, useState } from "react";
import { Button, Input } from "../Generic";
import {
  ButtonWrapper,
  Container,
  Icons,
  InputWrapper,
  MenuWrapper,
  Section,
  SelectAnt,
  Wrapper,
} from "./style";
import { Dropdown } from "antd";
import { UseReplace } from "../../hooks/useReplace";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearch } from "../../hooks/useSearch";
const { REACT_APP_BASE_URL: url } = process.env;
const Filter = () => {
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();
  const roomsRef = useRef();
  const minPriceRef = useRef();
  const maxPriceRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const query = useSearch();
  const onChange = ({ target: { value, name } }) => {
    navigate(`${location.pathname}${UseReplace(name, value)}`);
  };
  const onChangeCategory = ({ value }) => {
    navigate(`/properties/${UseReplace("category_id", value)}`);
  };
  const onChangeSort = ({ value }) => {
    navigate(`/properties/${UseReplace("sort", value)}`);
  };

  const [data, setData] = useState([]);
  const [valueDefault, setValueDefault] = useState("Select Category");

  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => setData(res?.data || []));
  }, []);

  useEffect(() => {
    let [res] = data?.filter(
      (item) => item.id === Number(query.get("category_id"))
    );
    res?.name && setValueDefault(res?.name);
  }, [(location?.search), data]);

  const menu = (
    <MenuWrapper>
      <h1 className="subtitle">Address</h1>
      <Section>
        <Input
          defaultValue={query.get("country")}
          onChangeProp={onChange}
          ref={countryRef}
          name="country"
          placeholder={"Country"}
        />
        <Input
          defaultValue={query.get("region")}
          onChangeProp={onChange}
          ref={regionRef}
          name="region"
          placeholder={"Region"}
        />
        <Input
          defaultValue={query.get("city")}
          onChangeProp={onChange}
          ref={cityRef}
          name="address"
          placeholder={"City"}
        />
        <Input
          defaultValue={query.get("zip_code")}
          onChangeProp={onChange}
          ref={zipRef}
          name="zip_code"
          placeholder={"Zip code"}
        />
      </Section>
      <h1 className="subtitle">Apartment info </h1>
      <Section>
        {" "}
        <Input
          ref={roomsRef}
          name="room"
          defaultValue={query.get("room")}
          width={200}
          placeholder={"Rooms"}
          onChangeProp={onChange}
        />
        <SelectAnt
          labelInValue
          defaultValue={query.get("sort") || "Select Sort"}
          onChange={onChangeSort}
        >
          <SelectAnt.Option value={""}>Select Sort</SelectAnt.Option>
          <SelectAnt.Option value={"asc"}>O'suvchi</SelectAnt.Option>
          <SelectAnt.Option value={"desc" }>Kamayuvchi</SelectAnt.Option>
        </SelectAnt>
        <SelectAnt
          labelInValue
          defaultValue={valueDefault || "Select"}
          onChange={onChangeCategory}
        >
          <SelectAnt.Option value={""}>Select Category</SelectAnt.Option>


          {data?.map((item) => {
            return (
              <SelectAnt.Option key={item.id} value={item?.id}>
                {item?.name}
              </SelectAnt.Option>
            );
          })}
        </SelectAnt>
      </Section>
      <h1 className="subtitle">Price </h1>
      <Section>
        <Input
          ref={minPriceRef}
          name="min_price"
          defaultValue={query.get("min_price")}
          onChangeProp={onChange}
          placeholder={"Min price"}
        />
        <Input
          ref={maxPriceRef}
          name="max_price"
          defaultValue={query.get("max_price")}
          onChangeProp={onChange}
          placeholder={"Max price"}
        />
      </Section>
    </MenuWrapper>
  );

  return (
    <Wrapper>
      <Container>
        <InputWrapper>
          <Input
            icon={<Icons.Houses />}
            placeholder={"Enter an address, neighborhood, city, or ZIP code"}
          />
        </InputWrapper>

        <Dropdown
          dropdownRender={() => menu}
          trigger={["click"]}
          placement="bottomRight"
          arrow
        >
          <ButtonWrapper>
            <Button type={"light"} width={131}>
              <Icons.Filter />
              Advanced
            </Button>
          </ButtonWrapper>
        </Dropdown>
        <ButtonWrapper>
          {" "}
          <Button type={"primary"} width={180}>
            <Icons.Search />
            Search
          </Button>
        </ButtonWrapper>
      </Container>
    </Wrapper>
  );
};

export default Filter;
