import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Nav } from "../../assets/icons/nav.svg";
import { ReactComponent as login } from "../../assets/icons/login.svg";
const Container = styled.div``;
const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  background-color: var(--colorPrimary);
`;
const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--colorPrimary);
  max-width: 1440px;
  height: 64px;
  margin: 0 auto;
  padding: var(--padding);
  @media only screen and (max-width: 650px) {
    padding: 0px 20px;
  }
`;
const NavIcon = styled(Nav)`
  display: none;
  @media only screen and (max-width: 770px) {
    display: block;
    cursor: pointer;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;
const LogoImg = styled.img``;

const LogoTitle = styled.span`
  margin-left: 12px;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
`;

const WrapperLink = styled.div`
  @media only screen and (max-width: 770px) {
    display: none;
  }
`;

const LinkItem = styled.div`
  display: inline-block;
  position: relative;
  .active {
    font-size: 18px;
    font-weight: 700;
    transition: all 0.2s;
  }
  .active::before {
    width: 100%;
    background-color: #fff;
  }
  .active::after {
    width: 100%;
    background-color: #fff;
  }
`;

const Link = styled(NavLink)`
  color: #fff;
  padding: 0 32px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  transition: all 0.2s;
  :hover {
    color: #fff;
  }
  ::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -15px;
    width: 0;
    height: 3px;
    transition: all 0.9s linear;
  }
  ::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: -15px;
    width: 0;
    height: 3px;
    transition: all 0.9s linear;
  }
`;

const ButtonWrapper = styled.div`
  @media only screen and (max-width: 770px) {
    display: none;
  }
`;
const LoginIcon = styled(login)`
  display: none;
  @media only screen and (max-width: 770px) {
    display: block;
  }
`;

const DropdownContainer = styled.div`
width: 177px;
height: 170px;
  background: #ffff;
  padding: 20px;
  box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
    0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
`;
DropdownContainer.Item = styled.div`
  margin-bottom: 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  cursor: pointer;
  :active {
    transform: scale(0.95);
  }
`;

export {
  DropdownContainer,
  Container,
  NavbarWrapper,
  Link,
  Wrapper,
  NavIcon,
  Logo,
  WrapperLink,
  LogoImg,
  LogoTitle,
  LinkItem,
  ButtonWrapper,
  LoginIcon,
};
