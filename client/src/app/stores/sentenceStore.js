import { decorate, observable, action, runInAction } from "mobx";
import agent from "../api/agent";
import { toast } from "react-toastify";

export default class SentenceStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  sentence = null;

  addToSentence = (word) => {
    this.sentence += word.name + " ";
  };

  addWordCount = async (word) => {
    try {
      await agent.WordCount.add(word.id);
      runInAction("adding word count", () => {
        this.addToSentence();
      });
    } catch (error) {
      console.log(error);
      toast.error("Error adding to your word stats");
    }
  };

  clearSentence = () => {
    this.sentence = null;
  };
}
decorate(SentenceStore, {
  sentence: observable,
  addToSentence: action,
  clearSentence: action,
});
