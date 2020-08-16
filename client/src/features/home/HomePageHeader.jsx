import React from "react";
import { Header, Image } from "semantic-ui-react";

const HomePageHeader = () => {
  return (
    <Header inverted as="h1" style={{ margin: "auto auto" }}>
      <Image size="massive" src="/assets/logo.png" alt="miah" circular />
      <Header.Content style={{ marginTop: "0.5em", display: "block" }}>
        Welcome to miah
      </Header.Content>
    </Header>
  );
};

export default HomePageHeader;
