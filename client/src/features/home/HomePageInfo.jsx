import React from "react";
import { Header, Grid, Button, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const HomePageInfo = () => {
  return (
    <Grid style={{ margin: "1em 0" }} centered={true}>
      <Grid.Row columns={4}>
        <Grid.Column>
          <Header as="h2">How miah works</Header>
        </Grid.Column>
        <Grid.Column></Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid.Row>
      <Grid.Row columns={4}>
        <Grid.Column>
          <Image src="/assets/homepage/homepage_login.png" size="medium" />
          <Header>Log In</Header>
          <p>
            Log in to miah to access our word bank. If you are a new user,
            create an account!
          </p>
        </Grid.Column>
        <Grid.Column>
          <Image
            src="/assets/homepage/homepage_communicate.png"
            size="medium"
          />
          <Header>Communicate</Header>
          <p>Our interactive word bank will help you communicate with ease!</p>
        </Grid.Column>
        <Grid.Column>
          <Image src="/assets/homepage/homepage_track.png" size="medium" />
          <Header>Track*</Header>
          <p>
            Follow your progress and the number of times you've used each word
            in your user profile.
          </p>
          <p>*To be added!</p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Button
          size="massive"
          style={{
            backgroundColor: "#7A93E5",
            padding: ".78571429em 7em",
            color: "white",
          }}
          as={Link}
          to="/register"
        >
          Get Started!
        </Button>
      </Grid.Row>
    </Grid>
  );
};

export default HomePageInfo;
