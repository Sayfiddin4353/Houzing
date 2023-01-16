import React from "react";
import { Container, TabWrapper } from "./style";
import { Tabs } from "antd";
import Signup from "../../components/Signup";
import Signin from "../../components/Signin";


const Register = () => {
  return (
    <Container>
      <TabWrapper>
        <Tabs
          defaultActiveKey="2"
          centered
          items={[
            {
              label: `Sign In`,
              key: "1",
              children: <Signin />,
            },
            {
              label: `Sign Up`,
              key: "2",
              children: <Signup />,
            },
          ]}
        />
      </TabWrapper>
    </Container>
  );
};

export default Register;
