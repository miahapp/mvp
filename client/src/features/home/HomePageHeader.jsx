import React from "react";
import { Header, Grid, Image } from "semantic-ui-react";

const HomePageHeader = () => {
  return (
    <Grid>
      <Grid.Row centered>
        <Grid.Column width={8} textAlign="center" verticalAlign="middle">
          <Header style={{ fontSize: "4em" }}>meet miah</Header>
          <Header as="h1">ML-Informed AAC Helper</Header>
          <Header as="h3">
            {" "}
            miah (ML-Informed AAC Helper) is a state-of-the-art augmentative and
            alternative communication (AAC) tool to aid the speech impaired. By
            leveraging machine learning, the mission of miah is to provide
            equitable speech solutions and actionable data-driven insights for
            all users.{" "}
          </Header>
        </Grid.Column>
        <Grid.Column width={4} verticalAlign="top">
          <Image src="/assets/homepage/iphone-miah.png" size="medium" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default HomePageHeader;
