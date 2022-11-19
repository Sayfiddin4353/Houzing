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

const Filter = () => {
  const countryRef=useRef();
  const regionRef=useRef();
  const cityRef=useRef();
  const zipRef=useRef();
  const roomsRef=useRef();
  const sizeRef=useRef();
  const sortRef=useRef();
  const minPriceRef=useRef();
  const maxPriceRef=useRef();
  const menu = (
    <MenuWrapper>
      <h1 className="subtitle">Address</h1>
      <Section>
        <Input ref={countryRef} placeholder={"Country"} />
        <Input ref={regionRef} placeholder={"Region"} />
        <Input ref={cityRef} placeholder={"City"} />
        <Input ref={zipRef} placeholder={"Zip code"} />
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
