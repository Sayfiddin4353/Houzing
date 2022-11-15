import React from 'react'
import { Container } from './style'

const Button = ({children,type,width,height,onClickProp,}) => {
  return (
    <Container onClick={onClickProp} type={type} width={width} height={height}   >
        {children||" Generic button"}
    </Container>
  )
}

export default Button;