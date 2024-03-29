import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 280px;  
  max-height: 380px; 
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  border-radius: 3px;
  cursor: pointer;
`;
const Blur = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 3px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3px;
`;

const DescWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #fff;
`;

export { Container, Image, DescWrapper, Blur };
