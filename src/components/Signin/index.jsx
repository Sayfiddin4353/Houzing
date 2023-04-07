import React from "react";
import { Container, Form, InfoError, Wrapper } from "./style";
import { Button, Input } from "../Generic";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const Signin = () => {
  const [body, setBody] = useState({});
  const [error, setError] = useState(false);
  const [isLoad, setisLoad] = useState(false);
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
    setisLoad(true);
    fetch("http://ec2-3-140-188-131.us-east-2.compute.amazonaws.com:8081/api/public/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        setisLoad(false);
        if (res?.authenticationToken) {
          navigate("/home");
          success();
          localStorage.setItem("token", res?.authenticationToken);
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        setError(true);
        setisLoad(false);
      });
  };
  return (
    <Container>
      <Wrapper>
        <Wrapper.Title>Sign in</Wrapper.Title>
        <Form>
          <Input
            onChangeProp={onChangeSign}
            placeholder="email"
            type="email"
            onFocus={() => setError(false)}
          />
          <Input
            onChangeProp={onChangeSign}
            placeholder="password"
            type="password"
            onFocus={() => setError(false)}
          />
          {error && <InfoError>Email or password is not correct</InfoError>}
          <Button onClickProp={onSelect} width={"100%"}>
            {isLoad ? "waiting..." : "Login"}
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Signin;
