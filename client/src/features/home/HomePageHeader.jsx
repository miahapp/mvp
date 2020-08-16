import React from "react";
import { Header, Image } from "semantic-ui-react";

const HomePageHeader = () => {
  return (
    <Header as="h1" content="miah" style={{ margin: "auto auto" }} vertical>
      <Image
        size="massive"
        src="/assets/logo.png"
        alt="miah"
        centered
        circular
      />
      <Header as="h2" inverted>
        Welcome to miah
      </Header>
    </Header>
  );
};

export default HomePageHeader;
