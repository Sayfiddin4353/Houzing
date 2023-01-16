import styled from "styled-components";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as resize } from "../../assets/icons/bigsmall.svg";
const Container = styled.div`
  width: 100%;
  max-width: 380px;
  min-width: 330px;
  min-height: 429px;
  :hover {
    filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
    transform: scale(0.98);
  }

  padding: ${({ gap }) => (gap ? `${gap}px` : "0px")};
  border: 1px solid #e6e9ec;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  max-height: 220px;
  min-height: 220px;
`;

const DescWrapper = styled.div`
  padding: 24px 20px 16px 20px;
  background-color: #fff;
  border-bottom: 1px solid #e6e9ec;
`;
const Title = styled.h2`
  margin-bottom: 4px;
  overflow: visible;
`;
const DescPargraph = styled.p`
  margin-bottom: 16px;
  white-space: nowrap;
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const DetailsItem = styled.div`
  text-align: center;
`;
const Icons = styled.div``;
Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Car = styled(car)``;
Icons.Ruler = styled(ruler)``;
Icons.Love = styled(love)`
  background-color: ${({ favorite }) => (favorite ? "red" : "#F6F8F9")};
  width: 35px;
  height: 35px;
  padding: 6px;
  border-radius: 60%;
  :active{
    transform: scale(0.9);
  }
  path {
    fill: ${({ favorite }) => (favorite ? "white" : "#696969")};
  }
`;
Icons.Resize = styled(resize)``;
Icons.Desc = styled.p`
  margin-bottom: 0px;
`;

const FooterWrapper = styled.div`
  padding: 8px 20px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const FooterLeft = styled.div``;
FooterLeft.DescP = styled.p`
  margin-bottom: 0px;
`;
FooterLeft.DescPrice = styled.p`
  margin-bottom: 0px;
`;
const FooterRight = styled.div`
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export {
  Container,
  Image,
  DescWrapper,
  Title,
  DescPargraph,
  Details,
  DetailsItem,
  Icons,
  FooterWrapper,
  FooterLeft,
  FooterRight,
};
