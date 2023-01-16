import styled from "styled-components";

const Container = styled.div`
  padding: 64px 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;
`;
const TabWrapper = styled.div`
  width: 580px;  
  .ant-tabs-content-holder {
    width: 100% !important;
  }
`;

export { Container, TabWrapper };
