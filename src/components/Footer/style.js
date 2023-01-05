import styled from "styled-components";
import { ReactComponent as logofooter } from "../../assets/icons/footerlogo.svg";
import { ReactComponent as phone } from "../../assets/icons/phone.svg";
import { ReactComponent as mail } from "../../assets/icons/footeremail.svg";
import { ReactComponent as facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";
const Container = styled.div`
  width: 100%;
  background: #0d263b;
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background: #0d263b;
  padding: 48px 130px 0px 130px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid rgba(255, 255, 255, 0.15);
  @media only screen and (max-width: 1028px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  @media only screen and (max-width: 940px) {
    display: flex;
    flex-direction: column;
  }
`;
Wrapper.Card = styled.div``;

Wrapper.Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 32px;
`;
Wrapper.Desc = styled.p`
  margin-left: ${({ left }) => (left ? "22px" : "0px")};
  margin-bottom: ${({ bt }) => (bt ? "20px" : "0px")};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
`;
const Section = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const SectionContact = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 12px;
`;
const Button = styled.button`
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0d263b;
  cursor: pointer;

  :hover {
    background-color: #30395ade;
  }

  :active {
    transform: scale(0.95);
  }
`;
const Icon = styled.div``;
Icon.Logo = styled(logofooter)``;
Icon.Phone = styled(phone)``;
Icon.Mail = styled(mail)``;
Icon.Facebook = styled(facebook)``;
Icon.Twitter = styled(twitter)``;
Icon.Instagram = styled(instagram)``;
Icon.Linkedin = styled(linkedin)``;
const FooterContainer = styled.div`
  padding: 0px 130px;
  width: 100%;
  min-height: 68px;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 940px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
`;
FooterContainer.Logo = styled(logo)``;
FooterContainer.Title = styled.h1`
  margin-left: 12px;
  margin-bottom: 0px;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
`;
FooterContainer.Right = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  margin-bottom: 0px;
  @media only screen and (max-width: 940px) {
  
  }
`;

export {
  Container,
  Wrapper,
  Section,
  SectionContact,
  Button,
  Icon,
  FooterContainer,
  Logo,
};
