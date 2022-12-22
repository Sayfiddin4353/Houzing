import React from "react";
import { Container, ContainerCard, Desc, Icon, Title, Wrapper } from "./style";

function WhyChoose() {
  return (
    <Container>
      <Wrapper>
        <Wrapper.Title className={"title"}>Why Choose Us?</Wrapper.Title>
        <Wrapper.Desc className={""}>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </Wrapper.Desc>
        <ContainerCard>
          <ContainerCard.Card>
            <Icon.Smile />
            <Title>Trusted By Thousands</Title>
            <Desc>
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </Desc>
          </ContainerCard.Card>
          <ContainerCard.Card>
            <Icon.House />
            <Title>Wide Renge Of Properties</Title>
            <Desc>
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </Desc>
          </ContainerCard.Card>
          <ContainerCard.Card>
            <Icon.Calculator />
            <Title>Financing Made Easy</Title>
            <Desc>
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </Desc>
          </ContainerCard.Card>
          <ContainerCard.Card>
            <Icon.Maps />
            <Title>See Neighborhoods</Title>
            <Desc>
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </Desc>
          </ContainerCard.Card>
        </ContainerCard>
      </Wrapper>
    </Container>
  );
}

export default WhyChoose;
