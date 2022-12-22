import styled from "styled-components";
import { ReactComponent as leftarrow } from "../../assets/icons/leftarrowrecomm.svg";
import { ReactComponent as rightarrow } from "../../assets/icons/rightarrowrecomm.svg";

const Container = styled.div`
  position: relative;
  width: 100%;
`;
const Wrapper=styled.div`
width: 100%;  
max-width: 1440px;
margin: 0 auto;
padding: 96px 130px 88px; 
`
Container.Title=styled.h1`
 text-align: center;
`
Container.Desc=styled.p`
text-align:center;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #696969;
margin-bottom:32px !important;
`
const ArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;

  @media only screen and (max-width: 650px) {
    display: none;
  }
`;
const ArrowWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
const ArrowLeft = styled(leftarrow)`
  width: 45px;
  height: 45px;
  margin-left: 32px;
  border-radius: 50%;
  padding: 15px;
  color: black;
  background:#fff ;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.5);
  cursor: pointer;
  :active {
    transform: scale(0.95);
  }
`;
const ArrowRight = styled(rightarrow)`
  width: 45px;
  height: 45px;
  margin-right: 32px;
  border-radius: 50%;
  padding: 15px;
  background:#fff;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.5);

  cursor: pointer;
  :active {
    transform: scale(0.95);
  }
`;

export { Container,Wrapper,ArrowContainer,ArrowWrapper,ArrowLeft,ArrowRight };
