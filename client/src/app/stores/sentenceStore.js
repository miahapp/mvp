import { decorate, observable, action } from "mobx";
import * as AzureSpeech from "microsoft-cognitiveservices-speech-sdk";

export default class SentenceStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  sentence = null;

  addToSentence = (word) => {
    this.sentence += word.name;
  };

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
