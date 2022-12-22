import styled from "styled-components";
import { ReactComponent as smile } from "../../assets/icons/whysmile.svg";
import { ReactComponent as house } from "../../assets/icons/whyhouse.svg";
import { ReactComponent as calculator } from "../../assets/icons/whycalculator.svg";
import { ReactComponent as maps } from "../../assets/icons/whymaps.svg";

const Container = styled.div`
  background: #f5f7fc;
  width: 100%;
`;
const Wrapper = styled.div`
  padding: 48px 130px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;
Wrapper.Title = styled.h1`
  text-align: center;
`;
Wrapper.Desc = styled.p`
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
  margin-bottom: 40px !important;
`;

const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 65px;
  @media only screen and (max-width: 1028px) {
   display: grid;
   grid-template-columns: repeat(2,1fr);
   gap: 20px;
  }
  @media only screen and (max-width: 940px) {
   display: flex;
   flex-direction: column;
   align-items: center;
   
  }
`;

ContainerCard.Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const Icon = styled.div``;
Icon.Smile = styled(smile)`
  margin-bottom: 24px;
  text-align: center;
`;
Icon.House = styled(house)`
  margin-bottom: 24px;
  text-align: center;
`;
Icon.Calculator = styled(calculator)`
  margin-bottom: 24px;
  text-align: center;
`;
Icon.Maps = styled(maps)`
  margin-bottom: 24px;
  text-align: center;
`;
const Title = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: #0d263b;
`;

const Desc = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #696969;  
`;

export { Container, Wrapper, ContainerCard, Icon, Title,Desc };
