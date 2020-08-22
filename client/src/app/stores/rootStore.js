import { createContext } from "react";
import UserStore from "./userStore";
import WordStore from "./wordStore";
import CommonStore from "./commonStore";
import SentenceStore from "./sentenceStore";

export default class RootStore {
  constructor() {
    this.userStore = new UserStore(this);
    this.wordStore = new WordStore(this);
    this.commonStore = new CommonStore(this);
    this.SentenceStore = new SentenceStore(this);
  }
}

export const RootStoreContext = createContext(new RootStore());
