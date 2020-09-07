import React, { Fragment } from "react";
import { Segment } from "semantic-ui-react";
import HomePageHeader from "./HomePageHeader";
import HomePageInfo from "./HomePageInfo";
import Footer from "../footer/Footer";

const HomePage = () => {
  return (
    <Fragment>
      <Segment className="masthead" textAlign="center">
        <HomePageHeader />
      </Segment>
      <HomePageInfo />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
