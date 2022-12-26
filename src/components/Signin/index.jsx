import React from "react";
import { Container, Form, Wrapper } from "./style";
import { Button, Input } from "../Generic";
import useRequest from "../../hooks/useRequest";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const Signin = () => {
  const [body, setBody] = useState({});
  const request = useRequest();
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
  // const warning = () => {
  //   message.info("Login yoki Parol xato");
  // };

  const onSelect = async () => {
    console.log(body, "body");
    request({ url: `/public/auth/login`, method: "POST", body, me: true }).then((res)=>{
      // res.json();
      if (res?.authenticationToken) {
        navigate("/home");
        success();
        localStorage.setItem("token", res?.authenticationToken);
      }
    })
     
    
    
    //   try {
    //     let res = await fetch(
    //       `https://houzing-app.herokuapp.com/api/public/auth/login`,
    //       {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(body),
    //       }
    // ).then((res) => res.json());
    // if (res?.authenticationToken) {
    //   navigate("/home");
    //   success();
    //   localStorage.setItem("token",res?.authenticationToken)
    // }
    //   } catch (error) {
    //     warning();
    //   }
  };
  return (
    <Container>
      <Wrapper>
        <Wrapper.Title>Sign in</Wrapper.Title>
        <Form>
          <Input onChangeProp={onChangeSign} placeholder="email" type="email" />
          <Input
            onChangeProp={onChangeSign}
            placeholder="password"
            type="password"
          />
          <Button onClickProp={onSelect} width={"100%"}>
            Login
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Signin;
