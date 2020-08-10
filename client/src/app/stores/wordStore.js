import { decorate, observable, action } from "mobx";
import agent from "../api/agent";

export default class WordStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  loading = false;
  wordRegistry = new Map();
  word = null;

  loadWords = async () => {
    this.loading = true;
    try {
      const wordBank = await agent.WordBank.list();
      runInAction("loading words", () => {
        wordBank.forEach((word) => {
          this.wordRegistry.set(word.id, word);
        });
        this.loading = false;
      });
    } catch (error) {
      runInAction("load words error", () => {
        this.loading = false;
      });
      console.log(error);
    }
  };

  loadWord = async (id) => {
    if (word) {
      this.word = word;
      return word;
    } else {
      this.loading = true;
      let word = await agent.WordBank.details(id);
      try {
        runInAction("getting word", () => {
          this.word = word;
          this.wordRegistry.set(word.id, word);
          this.loading = false;
        });
      } catch (error) {
        runInAction("get word error", () => {
          this.loading = false;
        });
        console.log(error);
      }
    }
  };

  getWord = (id) => {
    return this.wordRegistry.get(id);
  };

  clearActivity = () => {
    this.word = null;
  };
}
decorate(WordStore, {
  wordRegistry: observable,
  word: observable,
  loading: observable,
  loadWords: action,
  loadWord: action,
  clearActivity: action,
});
