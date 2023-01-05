import styled from "styled-components";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as calendar } from "../../assets/icons/calendar.svg";
import { ReactComponent as share } from "../../assets/icons/share.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";

const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1440px;
  padding: 24px 130px 96px 130px;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 48px;
`;
const LeftContent = styled.div`
  width: 100%;
  max-width: 880px;
`;
LeftContent.Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
`;
LeftContent.Box.Left = styled.div``;
const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #0d263b;
  margin-bottom: 8px;
`;

const Desc = styled.p`
  margin-bottom: 32px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`;
const Icons = styled.div``;
Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Car = styled(car)``;
Icons.Ruler = styled(ruler)``;
Icons.Calendar = styled(calendar)``;
Icons.Share = styled(share)`
  cursor: pointer;
`;
Icons.Love = styled(love)``;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;
const DetailsItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
Icons.Desc = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin-bottom: 0;
`;
LeftContent.Box.Right = styled.div``;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
  margin-bottom: 25px;
`;
IconContainer.Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
IconContainer.Desc = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 0;
  color: #696969;
`;
const IconCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;
const BoxRightPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`;
BoxRightPrice.Sale = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-decoration-line: line-through;
  color: #696969;
  margin-bottom: 0px;
`;
BoxRightPrice.Price = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #0d263b;
  margin-bottom: 0px;
`;
const PriceDesc = styled.div`
  display: flex;
  float: right;
`;
PriceDesc.P = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;
const DescTitle = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0d263b;
  margin-bottom: 16px;
`;
const DescInfo = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;
const RightContent = styled.div`
  width: 100%;
  max-width: 280px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
  padding: 24px;
`;
RightContent.User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 24px;
`;
const UserImage = styled.img``;
const UserName = styled.div``;
UserName.Name = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
  margin-bottom: 4px;
`;
UserName.Phone = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
  margin-bottom: 0px;
`;
const Message = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #0d263b;
  margin-bottom: 8px;
`;
Message.Desc = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #0d263b;
`;

const Location = styled.div``;
Location.Top=styled.div`
background: #E6E9EC;
width: 100%;
max-width: 880px;
height: 2px;
margin-bottom:48px;
`
Location.Bottom=styled.div`
background: #E6E9EC;
width: 100%;
max-width: 880px;
height: 2px;
margin-bottom:48px ;
`
Location.Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0d263b;
  margin-bottom: 24px;
`;
const LocationBox = styled.div`
  width: 100%;
  max-width: 880px;
`;
LocationBox.Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;  
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;  
`;
Info.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #0d263b;
`;
Info.Desc = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;
const Map=styled.div`
margin-bottom: 48px;
`

export {
  Map,
  Info,
  LocationBox,
  Location,
  Container,
  Wrapper,
  Content,
  LeftContent,
  RightContent,
  Title,
  Desc,
  UserName,
  Icons,
  DetailsItem,
  Details,
  IconCard,
  IconContainer,
  BoxRightPrice,
  PriceDesc,
  DescTitle,
  DescInfo,
  UserImage,
  Message,
};
