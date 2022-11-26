import React, { useRef } from "react";
import { Button, Input } from "../Generic";
import {
  ButtonWrapper,
  Container,
  Icons,
  InputWrapper,
  MenuWrapper,
  Section,
} from "./style";
import { Dropdown } from "antd";
import { UseReplace } from "../../hooks/useReplace";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearch } from "../../hooks/useSearch";
const Filter = () => {
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();
  const roomsRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();
  const minPriceRef = useRef();
  const maxPriceRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const query = useSearch();

  const onChange = ({ target: { value, name } }) => {
    navigate(`${location.pathname}${UseReplace(name, value)}`);
  };

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
          name="city"
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
        <Input ref={roomsRef} placeholder={"Rooms"} />
        <Input ref={sizeRef} placeholder={"Size"} />
        <Input ref={sortRef} placeholder={"Sort"} />
      </Section>
      <h1 className="subtitle">Price </h1>
      <Section>
        <Input ref={minPriceRef} placeholder={"Min price"} />
        <Input ref={maxPriceRef} placeholder={"Max price"} />
      </Section>
    </MenuWrapper>
  );

  return (
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
        <Button type={"primary"} width={180}>
          <Icons.Search />
          Search
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default Filter;
