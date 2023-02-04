import styled from "styled-components";
import { ReactComponent as edit } from "../../assets/icons/edit.svg";
import { ReactComponent as del } from "../../assets/icons/delete.svg";
const Container = styled.div``;
const Wrapper = styled.div`
  max-width: 1440px;
  margin: 34px auto 96px auto;
  padding: var(--padding);
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`;

Header.Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: #0d263b;
  margin: 0px;
`;

Header.Add = styled.div`
  max-width: 180px;
  width: 100%;
`;

const Product = styled.div`
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 24px 30px 48px 30px;
`;
const Table = styled.table`
  width: 100%;
`;
Table.Head = styled.thead``;
Table.Body = styled.tbody``;
const Tr = styled.tr``;
const Th = styled.th`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0d263b;
`;
const Td = styled.td`
  padding: 10px 0px;
  text-align: ${({ center }) => (center ? "center" : "start")};
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
`;
Icon.Edit = styled(edit)`
  cursor: pointer;
  :active {
    transform: scale(0.85);
  }
  :hover{
    & path{
      fill: blue;
    }
  }
`;
Icon.Delete = styled(del)`
  width: 35px;
  height: 35px;
  background: #f6f8f9;
  border-radius: 60px;
  padding: 10px;
  cursor: pointer;
  :active {
    transform: scale(0.85);
  }
  :hover{
    & path{
      fill: red;
    }
  }

`;

const Box = styled.div`
  display: flex;
  gap: 20px;
`;
const ImgCard = styled.div`
  width: 113px;
  height: 113px;
  cursor: pointer;
`;
ImgCard.Img = styled.img`
  width: 100%;
  height: 100%;
`;
const Info = styled.div`
  width: 200px;
`;

Info.Name = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
  margin-bottom: 4px;
`;
Info.Address = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin-bottom: 21px;
`;
Info.SaleP = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-decoration-line: line-through;
  color: #696969;
  margin: 0;
`;
Info.Price = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
  margin: 0;
`;

const ButtonProduct = styled.button`
  width: 71px;
  height: 23px;
  text-align: center;
  background: #0d263b;
  border: none;
  border-radius: 3px;
  padding: 5px 12px;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 13px;
  color: #ffffff;
  cursor: pointer;
  :active {
    transform: scale(0.95);
  }
`;

const Text = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #e73c3c;
  margin: 20px 0px;
  text-align: center;
`;

export {
  Text,
  ButtonProduct,
  Container,
  Wrapper,
  Header,
  Product,
  Table,
  Tr,
  Th,
  Td,
  Icon,
  Box,
  ImgCard,
  Info,
};
