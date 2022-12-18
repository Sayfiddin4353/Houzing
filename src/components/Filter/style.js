import styled from "styled-components";
import { ReactComponent as filter } from "../../assets/icons/advanced filter.svg";
import { ReactComponent as houses } from "../../assets/icons/inputhouses.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";
import { Select } from "antd";
const Wrapper = styled.div``;
const Container = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
  max-width: 1440px;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 0 auto;
  @media only screen and (max-width: 1000px) {
  }
`;

const InputWrapper = styled.div`
  width: 100%;
`;
const ButtonWrapper = styled.div``;

const Icons = styled.div``;
Icons.Search = styled(search)`
  margin-right: 8px;
`;
Icons.Filter = styled(filter)`
  margin-right: 8px;
`;
Icons.Houses = styled(houses)`
  margin-top: 6px;
`;

const MenuWrapper = styled.div`
  background: #fff;
  border: 1px solid #e6e9ec;
  border-radius: 5px;
  padding: 30px;
`;
const Section = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px 0 20px;
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
export {
  Wrapper,
  Container,
  InputWrapper,
  ButtonWrapper,
  Icons,
  MenuWrapper,
  Section,
  SelectAnt,
};
