import React from "react";
import { Container } from "./style";

const Input = ({
  
  type,
  width,
  height,
  defaultValue,
  placeholder,
  value,
  name,
  onChangeProp,
  icon
}) => {
  return (
    <Container
      icon={icon}
      type={type}
      width={width}
      height={height}
      defaultValue={defaultValue}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChangeProp}
    ></Container>
  );
};

export default Input;
