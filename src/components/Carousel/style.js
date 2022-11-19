import styled from "styled-components";
import { ReactComponent as rightarrow } from "../../assets/icons/rightarrow.svg";
import { ReactComponent as leftarrow } from "../../assets/icons/leftarrow.svg";

const Container = styled.div`
  position: relative;
  width: 100%;
`;
const ArrowContainer=styled.div`
 position: absolute;
 top: 50%;
 width: 100%;
`
const ArrowWrapper = styled.div`
 max-width: 1440px;
 margin: 0 auto;
 display: flex;
 justify-content: space-between;
`;
const ArrowLeft = styled(rightarrow)`
  width: 45px;
  height: 45px;
  margin-left: 32px;
  border-radius: 50%;
  padding: 15px;
  background: #737373;
  cursor: pointer;
  :active {
    transform: scale(0.95);
  }
`;
const ArrowRight = styled(leftarrow)`
  width: 45px;
  height: 45px;
  margin-right: 32px;
  border-radius: 50%;
  padding: 15px;
  background: #737373;
  cursor: pointer;
  :active {
    transform: scale(0.95);
  }
`;

const ImgCarousel = styled.img`
  width: 100%;
  height: 571px;
`;
export { Container, ArrowRight, ArrowLeft, ImgCarousel,ArrowContainer, ArrowWrapper };
