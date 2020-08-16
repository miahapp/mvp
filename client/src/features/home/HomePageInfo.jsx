import React from "react";
import { Container, Header, Divider } from "semantic-ui-react";

const HomePageInfo = () => {
  return (
    <Container text textAlign="left" style={{ marginTop: "2em" }}>
      <Header as="h2">About Us</Header>
      <Divider />
      <p>
        miah (ML-Informed Autism Helper) is a state-of-the-art augmentative and
        alternative communication (AAC) tool to aid the speech impaired. By
        leveraging machine learning, the mission of miah is to provide equitable
        speech solutions and actionable data-driven insights for all users.{" "}
      </p>
    </Container>
  );
};

export default HomePageInfo;
