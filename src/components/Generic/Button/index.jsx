import React from 'react'
import { Container } from './style'

const Button = ({children,type,width,height,onClickProp,disabled}) => {
  return (
    <Container disabled={disabled} onClick={onClickProp} type={type} width={width} height={height}   >
        {children||" Generic button"}
    </Container>
  )
}

export default Button;