import React from "react";
import { Header, Grid, Container } from "semantic-ui-react";

const HomePageHeader = () => {
  return (
    <Grid padded>
      <Grid.Row columns={8} relaxed centered>
        <Grid.Column>
          <Container text textAlign="center">
            <Header style={{ fontSize: "4em" }}>meet miah</Header>
            <Header as="h1">ML - informed autism helper</Header>
            <Header as="h3">
              {" "}
              miah (ML-Informed Autism Helper) is a state-of-the-art
              augmentative and alternative communication (AAC) tool to aid the
              speech impaired. By leveraging machine learning, the mission of
              miah is to provide equitable speech solutions and actionable
              data-driven insights for all users.{" "}
            </Header>
          </Container>
        </Grid.Column>
      </Grid.Row>
      <Grid.Column columns={4}></Grid.Column>
    </Grid>
  );
};

export default HomePageHeader;
