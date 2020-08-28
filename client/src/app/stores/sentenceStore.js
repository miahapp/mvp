import { decorate, observable, action, runInAction } from "mobx";
import agent from "../api/agent";
import { toast } from "react-toastify";
import { POLLY } from "../../app/common/util/util";

export default class SentenceStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  sentence = null;
  params = {
    Text: this.sentence,
    OutputFormat: "mp3",
    VoiceId: "Kimberly",
  };

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

  // Speech to text api integration
  textToSpeech = () => {
    try {
      if (this.sentence == null) {
        toast.error("Add some words!");
      } else {
        POLLY(this.params);
      }
    } catch (error) {
      toast.error("Problem with the TTS");
    }
  };
}
decorate(SentenceStore, {
  sentence: observable,
  addToSentence: action,
  clearSentence: action,
  textToSpeech: action,
  params: observable,
});
