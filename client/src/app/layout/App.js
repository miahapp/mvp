import React, { useContext, useEffect, Fragment } from "react";
import Login from "../../features/user/Login";
import NavBar from "../../features/navbar/NavBar";
import LoadingComponent from "./LoadingComponent";
import { RootStoreContext } from "../stores/rootStore";
import { Route, Switch } from "react-router-dom";
import { observer } from "mobx-react-lite";
import HomePage from "../../features/home/HomePage";
import NotFound from "./NotFound";

const App = () => {
  const rootStore = useContext(RootStoreContext);
  const { setAppLoaded, token, appLoaded } = rootStore.commonStore;
  const { getUser } = rootStore.userStore;

  useEffect(() => {
    if (token) {
      getUser().finally(() => setAppLoaded());
    } else {
      setAppLoaded();
    }
  }, [getUser, setAppLoaded, token]);
  if (!appLoaded) return <LoadingComponent content="Loading miah..." />;

  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        {/* <Route path="/register" component={Register} /> */}
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};

export default observer(App);
