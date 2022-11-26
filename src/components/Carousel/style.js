import styled from "styled-components";
import { ReactComponent as rightarrow } from "../../assets/icons/rightarrow.svg";
import { ReactComponent as leftarrow } from "../../assets/icons/leftarrow.svg";

const Container = styled.div`
  position: relative;
  width: 100%;
`;
const ArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
`;
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
  background: rgba(255, 255, 255, 0.5);
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
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  :active {
    transform: scale(0.95);
  }
`;

const ImgCarousel = styled.img`
  width: 100%;
  height: 571px;
`;

const Blur = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  max-width:500px;
  margin:0 auto;
`;

Content.Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 8px;
`;

Content.Desc = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;
Content.Price = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: #ffffff;
`;
export {
  Container,
  ArrowRight,
  ArrowLeft,
  ImgCarousel,
  ArrowContainer,
  ArrowWrapper,
  Blur,
  Content,
};
