import { decorate, observable, action, runInAction } from "mobx";
import agent from "../api/agent";
import { toast } from "react-toastify";

export default class SentenceStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
}
