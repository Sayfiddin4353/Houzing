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

const Wrapper = styled.div`
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  width: 100%;
  height: 100%;
  padding: 24px 30px 48px 30px;
`;

Wrapper.Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0d263b;
  margin-bottom: 44px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export { Container, Wrapper, Form };
