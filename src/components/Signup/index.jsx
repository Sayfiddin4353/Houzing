import React from "react";
import { Container, Form, Wrapper } from "./style";
import { Button, Input } from "../Generic";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const Signup = () => {
  const [body, setBody] = useState({});

  const navigate = useNavigate();
  const onChangeSign = ({ target: { value, placeholder } }) => {
    setBody({
      ...body,
      [placeholder]: value,
    });
  };

  const success = () => {
    message.info("This is a success message");
  };

  const onSelect = () => {
    fetch("http://158.51.99.245:8081/api/public/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        navigate("/signin");
        success();
      });
  };
  return (
    <Container>
      <Wrapper>
        <Wrapper.Title>Sign Up</Wrapper.Title>
        <Form>
          <Input onChangeProp={onChangeSign} placeholder="email" />
          <Input
            onChangeProp={onChangeSign}
            placeholder="firstname"
            type="text"
          />
          <Input
            onChangeProp={onChangeSign}
            placeholder="lastname"
            type="text"
          />
          <Input
            onChangeProp={onChangeSign}
            placeholder="password"
            type="password"
          />
          <Button onClickProp={onSelect} width={"100%"}>
            Registration
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Signup;
