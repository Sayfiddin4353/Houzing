import styled from "styled-components";
import {ReactComponent as filter} from "../../assets/icons/advanced filter.svg"
import {ReactComponent as houses} from "../../assets/icons/input houses.svg"
import {ReactComponent as search } from "../../assets/icons/search.svg"

const Container=styled.div`
display:flex;
justify-content:space-around;
max-width:1440px;
padding: var(--padding);
padding-top: 10px;
padding-bottom: 10px;
margin: 0 auto;
`

const Icons=styled.div`
`
Icons.Search=styled(search)``
Icons.Filter=styled(filter)``
Icons.Houses=styled(houses)``


export{Container}