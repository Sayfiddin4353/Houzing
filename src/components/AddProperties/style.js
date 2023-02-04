import styled from "styled-components";
import { Select } from "antd";
import { ReactComponent as del } from "../../assets/icons/delete.svg";
const Container = styled.div``;
const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 24px 130px 96px 130px;
`;
const MenuWrapper = styled.div`
  background: #fff;
  border: 1px solid #e6e9ec;
  border-radius: 5px;
  padding: 30px;
  width: 100%;
`;
const Section = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px 0 20px;
  width: 100%;
  @media only screen and (max-width: 1000px) {
    flex-wrap: wrap;
  }
`;
const SelectAnt = styled(Select)`
  width: 200px;
  .ant-select-selector {
    height: 44px !important;
  }
  .ant-select-selection-item,
  .ant-select-single.ant-select-show-arrow,
  .ant-select-selec {
    display: flex;
    align-items: center;
  }
`;
const ImageUrlSection = styled.div`
padding: 10px 0px 10px;
display: flex;
align-items: center;
`;
const CheckBoxSection = styled.div`
  display: flex;
  gap: 200px;
  padding: 10px 0 20px;
  @media only screen and (max-width: 1000px) {
    flex-wrap: wrap;
  }
`;
const CheckBoxCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  .ant-checkbox-wrapper + .ant-checkbox-wrapper {
    margin-left: 0px !important;
  }
`;
const Text=styled.p`
margin: 0;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #696969;
display: flex;

`
const IconDelete = styled(del)`
  width: 35px;
  height: 35px;
  background: #f6f8f9;
  border-radius: 60px;
  padding: 10px;
  cursor: pointer;
  :active {
    transform: scale(0.85);
  }  
  margin-left:10px;
`;
export {
  Text,
  IconDelete,
  Container,
  Wrapper,
  MenuWrapper,
  Section,
  SelectAnt,
  CheckBoxCard,
  CheckBoxSection,
  ImageUrlSection,
};
