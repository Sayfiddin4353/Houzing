import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import {
  Container,
  Link,
  LinkItem,
  Logo,
  LogoImg,
  LogoTitle,
  NavbarWrapper,
  Wrapper,
  WrapperLink,
} from "./style";
import logo from "../../assets/icons/logo.svg";
import { Button } from "../Generic";
import Filter from "../Filter";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <NavbarWrapper>
          <Logo>
            <LogoImg src={logo} />
            <LogoTitle>Houzing</LogoTitle>
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
          <Button onClickProp={() => navigate("/signin")} type={"dark"}>
            Login
          </Button>
        </NavbarWrapper>
      </Wrapper>
      <Filter />
      <Outlet />
    </Container>
  );
};

export default Navbar;
