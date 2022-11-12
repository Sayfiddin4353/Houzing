import React from "react";
import { Outlet } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import {
  Container,
  Link,
  LinkItem,
  LoginButton,
  Logo,
  LogoImg,
  LogoTitle,
  NavbarWrapper,
  Wrapper,
  WrapperLink,
} from "./style";
import logo from "../../assets/icons/logo.svg";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <NavbarWrapper>
          <Logo>
            <LogoImg src={logo} />
            <LogoTitle>Houzing</LogoTitle>
          </Logo>
          <WrapperLink>
            {navbar.map((value, index) => {
              return (
                <LinkItem  key={index}>
                  <Link to={value.path}>
                    {value.title}
                  </Link>
                </LinkItem>
              );
            })}
          </WrapperLink>
          <LoginButton>Login</LoginButton>
        </NavbarWrapper>
      </Wrapper>

      <Outlet />
    </Container>
  );
};

export default Navbar;
