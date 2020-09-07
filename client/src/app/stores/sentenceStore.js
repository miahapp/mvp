import { decorate, observable, action } from "mobx";
import agent from "../api/agent";
import { toast } from "react-toastify";

export default class SentenceStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  sentence = "";

  addToSentence = (word) => {
    console.log(word);
    this.sentence += word + " ";
  };

  clearSentence = () => {
    this.sentence = "";
  };

  addWordCount = async () => {
    try {
      await agent.WordCount.add(this.sentence);
      // runInAction("adding word count", () => {
      // });
    } catch (error) {
      console.log(error);
      toast.error("Error adding to your word stats");
    }
  };
}
decorate(SentenceStore, {
  sentence: observable,
  addToSentence: action,
  clearSentence: action,
  addWordCount: action,
});
