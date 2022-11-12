import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
`;

const WrapperLink = styled.div``;

const LinkItem = styled.div`
  display: inline-block;
  position: relative;
  .active{
    font-size:18px;
    color: red;
    font-weight: 700;
    transition:all 0.2s;
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

const LoginButton = styled.button`
  color: #fff;
  border: 1px solid #ffffff;
  background-color: var(--colorPrimary);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  width: 120px;
  height: 44px;
  border-radius: 2px;
  cursor: pointer;
  :active {
    transform: scale(0.96);
    transition: all 0.1s;
  }
`;

export {
  Container,
  NavbarWrapper,
  Link,
  Wrapper,
  Logo,
  WrapperLink,
  LoginButton,
  LogoImg,
  LogoTitle,
  LinkItem,
};
