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

const getWidth = ({ width }) => {
  if (!width) return "128px";
  else if (`${width}`.includes("%")) return `100%`;
  else return `${width}px`;
};

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  :active {
    opacity: ${({ disabled }) => (disabled ? 0.3 : 0.7)};
    transform: ${({ disabled }) => (disabled ? `scale(${1})` : `scale(${0.97})`)};
  }
  width: ${getWidth};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  ${getType};
`;

export { Container };
