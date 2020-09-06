import { decorate, observable, action, computed, runInAction } from "mobx";
import agent from "../api/agent";
import { history } from "../../index";

export default class UserStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  user = null;

  get isLoggedIn() {
    return !!this.user;
  }

  login = async (values) => {
    try {
      const user = await agent.User.login(values);
      runInAction(() => {
        this.user = user;
        history.push("/wordbank")
      });
      // this.rootStore.commonStore.setToken(user.token);
    } catch (error) {
      throw error;
    }
  };

  register = async (values) => {
    try {
      const user = await agent.User.register(values);
      // this.rootStore.commonStore.setToken(user.token);
      runInAction(() => {
        this.user = user;
        history.push("/wordbank")
      });
    } catch (error) {
      throw error;
    }
  };

  getUser = async () => {
    try {
      const user = await agent.User.current();
      runInAction(() => {
        this.user = user;
      });
    } catch (error) {
      console.log(error);
    }
  };

  logout = () => {
    this.rootStore.commonStore.setToken(null);
    this.user = null;
    history.push("/");
  };
}

decorate(UserStore, {
  user: observable,
  login: action,
  register: action,
  getUser: action,
  logout: action,
  isLoggedIn: computed,
});
