import React, { useContext, useEffect, Fragment } from "react";
import LoginForm from "../../features/user/LoginForm";
import NavBar from "../../features/navbar/NavBar";
import LoadingComponent from "./LoadingComponent";
import { RootStoreContext } from "../stores/rootStore";
import { Route, Switch } from "react-router-dom";
import { observer } from "mobx-react-lite";
import HomePage from "../../features/home/HomePage";
import NotFound from "./NotFound";
import RegisterForm from "../../features/user/RegisterForm";
import WordCountComponent from "../../features/word-count/WordCountComponent";
import WordBankComponent from "../../features/word-bank/WordBankComponent.jsx";

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
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/wordbank" component={WordBankComponent} />
          <Route path="/wordcount" component={WordCountComponent} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    </Fragment>
  );
};

export default observer(App);
