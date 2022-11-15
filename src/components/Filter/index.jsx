import React from "react";
import { Button, Input } from "../Generic";
import { ButtonWrapper, Container, Icons, InputWrapper } from "./style";

const Filter = () => {
  return (
    <Container>
      <InputWrapper>
        <Input
          placeholder={"Enter an address, neighborhood, city, or ZIP code"}
        />
      </InputWrapper>
      <ButtonWrapper>
        <Button type={"light"} width={131} >
          <Icons.Filter />
          Advanced
        </Button>
      </ButtonWrapper>
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
