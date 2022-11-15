import styled from "styled-components";
import { ReactComponent as filter } from "../../assets/icons/advanced filter.svg";
import { ReactComponent as houses } from "../../assets/icons/input houses.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";

const Container = styled.div`
  display: flex;
  /* gap: 20px; */
  max-width: 1440px;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 0 auto;
`;

const InputWrapper=styled.div`
width: 100%;
`
const ButtonWrapper=styled.div`

`

const Icons = styled.div``;
Icons.Search = styled(search)`
  margin-right: 8px;
`;
Icons.Filter = styled(filter)`
  margin-right: 8px;
`;
Icons.Houses = styled(houses)``;

export { Container,InputWrapper,ButtonWrapper, Icons };
