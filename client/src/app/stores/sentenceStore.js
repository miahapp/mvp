import { decorate, observable, action, runInAction } from "mobx";
import agent from "../api/agent";

export default class SentenceStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  sentence = null;

  addToSentence = (word) => {
    this.sentence += word.name + " ";
  };

  addWordCount = (word) => {
    try {
      await agent.WordCount.add(word.id);
      runInAction("adding word count", () => {
        this.addToSentence();
      })
    } catch (error) {
      toast.error("Error adding to your word stats");
    }
  }

  clearSentence = () => {
    this.sentence = null;
  };

  // Speech to text api integration
  textToSpeech = () => {};
}
decorate(SentenceStore, {
  sentence: observable,
  addToSentence: action,
  clearSentence: action,
  textToSpeech: action,
});
