import React from "react";
import { Container } from "semantic-ui-react";
import Login from "../../features/user/Login";
import NavBar from "../../features/navbar/NavBar";

const App = () => {
  return (
    <Container>
      <NavBar />
      <Login />
    </Container>
  );
};

export default App;
