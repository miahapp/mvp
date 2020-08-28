import { decorate, observable, action, runInAction } from "mobx";
import agent from "../api/agent";

const AWS = require("aws-sdk");

// Create an Polly client
const Polly = new AWS.Polly({
    signatureVersion: 'v4',
    region: 'us-west-1'
})

// Create the Speaker instance
const Player = new Speaker({
  channels: 1,
  bitDepth: 16,
  sampleRate: 16000
})

let params = {
    'Text': this.sentence,
    'OutputFormat': 'mp3',
    'VoiceId': 'Kimberly'
}

const SPEAKER = Polly.synthesizeSpeech(params, (err, data) => {
    if (err) {
        console.log(err.code)
    } else if (data) {
        if (data.AudioStream instanceof Buffer) {
            // Initiate the source
            var bufferStream = new Stream.PassThrough()
            // convert AudioStream into a readable stream
            bufferStream.end(data.AudioStream)
            // Pipe into Player
            bufferStream.pipe(Player)
        }
    }
})

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
  textToSpeech = () => {
    try {
      this.SPEAKER();
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
});
