import React, { useContext, useState } from 'react';
import { Menu, Dropdown, Button, Segment, Image } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom';
import { RootStoreContext } from '../../app/stores/rootStore';

const NavBar = () => {
  const rootStore = useContext(RootStoreContext);
  const { user, logout } = rootStore.userStore;

  const [activeItem, setActiveItem] = useState('home');
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <Segment>
      <Menu fixed="top" inverted size="huge">
        <Menu.Item
          header
          as={NavLink}
          exact
          to="/"
          active={activeItem === 'home'}
          name="home"
          onClick={handleItemClick}
          style={{ marginLeft: '1em' }}
        >
          <Image
            size="mini"
            src="https://github.com/nmwenz90/mvp/blob/a2bdc348776f0c376ae98e6016cb02798c580473/client/public/assets/logo.jpg?raw=true"
            alt="miah"
            circular
            spaced="right"
          />
          miah
        </Menu.Item>
        {user ? (
          <Menu.Menu>
            <Menu.Item
              as={NavLink}
              to="/wordcount"
              active={activeItem === 'wordcount'}
              name="wordcount"
              onClick={handleItemClick}
            >
              Your Stats
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to="/wordbank"
              active={activeItem === 'wordbank'}
              name=""
              onClick={handleItemClick}
            >
              Word Bank
            </Menu.Item>
            <Menu.Item position="right">
              <Dropdown pointing="top left" text={user.displayName}>
                <Dropdown.Menu>
                  {/* <Dropdown.Item
                      as={Link}
                      to={`/profile/${user.username}`}
                      text="My profile"
                      icon="user"
                    /> */}
                  <Dropdown.Item onClick={logout} text="Logout" icon="power" />
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          </Menu.Menu>
        ) : (
          <Menu.Item position="right">
            <Button
              as={NavLink}
              to="/wordbank"
              style={{ backgroundColor: 'white', marginLeft: '2em' }}
              compact
            >
              Discover
            </Button>
            <Button
              as={NavLink}
              to="/login"
              style={{ backgroundColor: 'white', marginLeft: '2em' }}
              compact
            >
              Log in
            </Button>
            <Button
              as={NavLink}
              to="/register"
              compact
              style={{ backgroundColor: 'white', marginLeft: '2em' }}
            >
              Sign Up
            </Button>
          </Menu.Item>
        )}
      </Menu>
    </Segment>
  );
};

export default observer(NavBar);
