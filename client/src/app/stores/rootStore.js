import { createContext } from "react";
import UserStore from "./userStore";
import WordStore from "./wordStore";
import CommonStore from "./commonStore";

export default class RootStore {
  constructor() {
    this.userStore = new UserStore(this);
    this.wordStore = new WordStore(this);
    this.commonStore = new CommonStore(this);
  }
}

export const RootStoreContext = createContext(new RootStore());
