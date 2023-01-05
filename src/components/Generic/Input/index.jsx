import React, { forwardRef } from "react";
import { Container, Icon, Wrapper } from "./style";


const Input = forwardRef(
  (
    {
      type,
      width,
      height,
      defaultValue,
      placeholder,
      value,
      name,
      onChangeProp,
      icon,
      fontSize,
      mb
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Icon>{icon}</Icon>
        <Container
          ref={ref}
          icon={icon}
          type={type}
          width={width}
          height={height}
          defaultValue={defaultValue}
          placeholder={placeholder}
          value={value}
          name={name}
          fontSize={fontSize}
          onChange={onChangeProp}
          mb={mb}
        ></Container>
      </Wrapper>
    );
  }
);

export default Input;
