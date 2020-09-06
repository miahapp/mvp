import { decorate, observable, action, reaction } from "mobx";

export default class CommonStore {
  constructor(rootStore) {
    this.rootStore = rootStore;

    // reaction(
    //   () => this.token,
    //   (token) => {
    //     if (token) {
    //       window.localStorage.setItem("jwt", token);
    //     } else {
    //       window.localStorage.removeItem("jwt");
    //     }
    //   }
    // );
  }

  // token = window.localStorage.getItem("jwt");
  appLoaded = false;

  // setToken = (token) => {
  //   window.localStorage.setItem("jwt", token);
  //   this.token = token;
  // };

  setAppLoaded = () => {
    this.appLoaded = true;
  };
}

decorate(CommonStore, {
  // token: observable,
  appLoaded: observable,
  setAppLoaded: action,
  // setToken: action,
});
