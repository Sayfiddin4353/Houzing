import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        color: "#fff",
        background: "#0D263B",
        border: "1px solid #FFFFFF",
      };
    case "light":
      return {
        color: "#0D263B",
        background: "#fff",
        border: "1px solid #E6E9EC",
      };
    case "primary":
      return {
        color: "#fff",
        background: " #0061DF",
        border: "1px solid #0061DF",
      };
    default:
      return {
        color: "#fff",
        background: " #0061DF",
        border: "1px solid #0061DF",
      };
  }
};

const Container = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  border: 1px solid #E6E9EC;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #0D263B;  
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  padding-left:${({icon})=>(icon?"45px":"20px")};
  /* ${getType}; */
`;

export { Container };
