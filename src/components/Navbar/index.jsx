import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import {
  ButtonWrapper,
  Container,
  DropdownContainer,
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
import { Dropdown } from "antd";

const Navbar = () => {
  const navigate = useNavigate();
  const onClick = () => {
    if (localStorage.getItem("token")) {
    } else {
      navigate("/signin");
    }
  };
  const onClickProfile = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "signout") {
      localStorage.removeItem("token");
      navigate("/home");
    } else {
      navigate(`/${name}`);
    }
  };
  const menu = (
    <DropdownContainer>
      <DropdownContainer.Item data-name="myprofile" onClick={onClickProfile}>
        My Profile
      </DropdownContainer.Item>
      <DropdownContainer.Item data-name="myproperties" onClick={onClickProfile}>
        My Properties
      </DropdownContainer.Item>
      <DropdownContainer.Item data-name="myfavourits" onClick={onClickProfile}>
        Favourits
      </DropdownContainer.Item>
      <DropdownContainer.Item data-name="signout" onClick={onClickProfile}>
        Sign Out
      </DropdownContainer.Item>
    </DropdownContainer>
  );
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

          {localStorage.getItem("token") ? (
            <Dropdown
              dropdownRender={() => menu}
              trigger={["click"]}
              placement="topRight"
              arrow
            >
              <ButtonWrapper>
                <Button type={"dark"}>My Profile</Button>
              </ButtonWrapper>
            </Dropdown>
          ) : (
            <ButtonWrapper>
              <Button onClickProp={onClick} type={"dark"}>
                Login
              </Button>
            </ButtonWrapper>
          )}

          <LoginIcon />
        </NavbarWrapper>
      </Wrapper>
      <Filter />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Navbar;
