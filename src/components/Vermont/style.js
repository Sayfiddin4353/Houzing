import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
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
  max-width: 566px;
  margin: 0 auto;
`;

Content.Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 48px;
  @media only screen and (max-width: 650px) {
    font-size: 28px;
  }
`;


export { Container, ImgCarousel, Blur, Content };
