import { decorate, observable, action, computed } from "mobx";
import agent from "../api/agent";

export default class UserStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  user = null;

  isLoggedIn() {
    return !!this.user;
  }

  login = async (values) => {
    try {
      const user = await agent.User.login(values);
      runInAction(() => {
        this.user = user;
      });
      this.rootStore.commonStore.setToken(user.token);
    } catch (error) {
      throw error;
    }
  };

  register = async (values) => {
    try {
      const user = await agent.User.register(values);
      this.rootStore.commonStore.setToken(user.token);
    } catch (error) {
      throw error;
    }
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
