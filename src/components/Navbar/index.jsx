import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import {
  ButtonWrapper,
  Container,
  Link,
  LinkItem,
  LoginIcon,
  Logo,
  LogoImg,
  LogoTitle,
  NavbarWrapper,
  NavIcon,
  Wrapper,
  WrapperLink,
} from "./style";
import logo from "../../assets/icons/logo.svg";
import { Button } from "../Generic";
import Filter from "../Filter";
import Footer from "../Footer";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <NavbarWrapper>
          <NavIcon />
          <Logo>
            <LogoImg src={logo} />
            <LogoTitle onClick={() => navigate("/home")}>Houzing</LogoTitle>
          </Logo>
          <WrapperLink>
            {navbar.map(({ path, title, hidden }, index) => {
              return (
                !hidden && (
                  <LinkItem key={index}>
                    <Link to={path}>{title}</Link>
                  </LinkItem>
                )
              );
            })}
          </WrapperLink>
          <ButtonWrapper>
            <Button onClickProp={() => navigate("/signin")} type={"dark"}>
              Login
            </Button>
          </ButtonWrapper>
          <LoginIcon />
        </NavbarWrapper>
      </Wrapper>
      <Filter />
      <Outlet />
      <Footer/>
    </Container>
  );
};

export default Navbar;
