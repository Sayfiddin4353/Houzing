import React from "react";
import {
  Container,
  Wrapper,
  FooterContainer,
  Section,
  Icon,
  SectionContact,
  Button,
  Logo,
} from "./style";

function Footer() {
  return (
    <Container>
      <Wrapper>
        <Wrapper.Card>
          <Wrapper.Title>Contact Us</Wrapper.Title>
          <Section>
            <Icon.Logo />
            <Wrapper.Desc left>
              329 Queensberry Street, North <br /> Melbourne VIC 3051,
              Australia.
            </Wrapper.Desc>
          </Section>
          <Section>
            <Icon.Phone />
            <Wrapper.Desc left>123 456 7890</Wrapper.Desc>
          </Section>{" "}
          <Section>
            <Icon.Mail />
            <Wrapper.Desc left>support@houzing.com</Wrapper.Desc>
          </Section>
          <SectionContact>
            <Button>
              <Icon.Facebook />
            </Button>
            <Button>
              <Icon.Twitter />
            </Button>
            <Button>
              <Icon.Instagram />
            </Button>
            <Button>
              <Icon.Linkedin />
            </Button>
          </SectionContact>
        </Wrapper.Card>
        <Wrapper.Card>
          <Wrapper.Title>Discover</Wrapper.Title>
          <Wrapper.Desc bt>Chicago</Wrapper.Desc>
          <Wrapper.Desc bt>Los Angeles</Wrapper.Desc>
          <Wrapper.Desc bt>Miami</Wrapper.Desc>
          <Wrapper.Desc bt>New York</Wrapper.Desc>
        </Wrapper.Card>
        <Wrapper.Card>
          <Wrapper.Title>Lists by Category</Wrapper.Title>
          <Wrapper.Desc bt>Condos</Wrapper.Desc>
          <Wrapper.Desc bt>Houses</Wrapper.Desc>
          <Wrapper.Desc bt>Offices</Wrapper.Desc>
          <Wrapper.Desc bt>Retail</Wrapper.Desc>
          <Wrapper.Desc bt>Villas</Wrapper.Desc>
        </Wrapper.Card>
        <Wrapper.Card>
          <Wrapper.Title>Lists by Category</Wrapper.Title>
          <Wrapper.Desc bt>About Us</Wrapper.Desc>
          <Wrapper.Desc bt>Terms & Conditions</Wrapper.Desc>
          <Wrapper.Desc bt>Support Center</Wrapper.Desc>
          <Wrapper.Desc bt>Contact Us</Wrapper.Desc>
        </Wrapper.Card>
      </Wrapper>
      <FooterContainer>
        <Logo>
          <FooterContainer.Logo />
          <FooterContainer.Title>Houzing</FooterContainer.Title>
        </Logo>
          <FooterContainer.Right>Copyright &copy; 2021 CreativeLayers. All Right Reserved.</FooterContainer.Right>

      </FooterContainer>
    </Container>
  );
}

export default Footer;
