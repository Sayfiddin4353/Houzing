import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  
`;
Container.Title = styled.h1`
  margin-top: 64px;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #0d263b;
`;
Container.Desc = styled.p`
margin-bottom: 70px;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #696969;
text-align: center;
`;
const Wrapper = styled.div`
  padding: var(--padding);
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom:48px;
  /* display: grid;
grid-template-columns:repeat(auto-fit,minmax(330px,1fr));
grid-gap:20px;
padding: var(--padding);
width: 100%;
max-width: 1440px;
margin: 0 auto; */
`;

const FooterButton=styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom:96px;
`

export { Container, Wrapper,FooterButton };
