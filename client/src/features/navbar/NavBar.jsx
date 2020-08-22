import React, { useContext, useState } from "react";
import { Menu, Container, Dropdown, Button } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { NavLink, Link } from "react-router-dom";
import { RootStoreContext } from "../../app/stores/rootStore";

const NavBar = () => {
  const rootStore = useContext(RootStoreContext);
  const { user, logout } = rootStore.userStore;

  const [activeItem, setActiveItem] = useState("home");
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <Menu fixed="top" inverted size="huge" pointing secondary>
      <Container>
        <Menu.Item
          header
          as={NavLink}
          exact
          to="/"
          active={activeItem === "home"}
          name="home"
          onClick={handleItemClick}
        >
          Home
        </Menu.Item>
        {user ? (
          <Menu.Menu>
            <Menu.Item
              as={NavLink}
              to="/wordcount"
              active={activeItem === "wordcount"}
              name="wordcount"
              onClick={handleItemClick}
            >
              Stats
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to="/wordbank"
              active={activeItem === "wordbank"}
              name="wordbank"
              onClick={handleItemClick}
            >
              Bank
            </Menu.Item>
            <Menu.Item position="right">
              <Dropdown pointing="top left" text={user.displayName}>
                <Dropdown.Menu>
                  <Dropdown.Item
                    as={Link}
                    to={`/profile/${user.username}`}
                    text="My profile"
                    icon="user"
                  />
                  <Dropdown.Item onClick={logout} text="Logout" icon="power" />
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          </Menu.Menu>
        ) : (
          <Menu.Item position="right">
            <Button as={NavLink} to="/login" inverted color="teal">
              Log in
            </Button>
            <Button
              as={NavLink}
              to="/register"
              style={{ marginLeft: "0.75em" }}
              inverted
              color="teal"
            >
              Sign Up
            </Button>
          </Menu.Item>
        )}
      </Container>
    </Menu>
  );
};

export default observer(NavBar);
