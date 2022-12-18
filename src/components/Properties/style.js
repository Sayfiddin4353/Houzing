import styled from "styled-components";

const Container = styled.div`
 width: 100%;
`;
const Wrapper=styled.div`
padding: var(--padding);
width: 100%;
max-width: 1440px;
margin: 0 auto;
display: flex;
justify-content:center;
align-items:center;
flex-wrap: wrap;
gap: 20px; 
/* display: grid;
grid-template-columns:repeat(auto-fit,minmax(330px,1fr));
grid-gap:20px;
padding: var(--padding);
width: 100%;
max-width: 1440px;
margin: 0 auto; */
`

export { Container,Wrapper };
