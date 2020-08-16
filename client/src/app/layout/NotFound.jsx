import React from "react";
import { Segment, Button, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Segment placeholder style={{ paddingTop: "10em", paddingBottom: "10em" }}>
      <Header icon>
        <Icon name="search" />
        Oops - We've looked everywhere but couldn't find this.
      </Header>
      <Segment.Inline>
        <Button as={Link} to="/home" primary>
          Return to Home
        </Button>
      </Segment.Inline>
    </Segment>
  );
};

export default NotFound;
