const AWS = require("aws-sdk");
const Stream = require("stream");
const Speaker = require("audio-speaker/stream");
require("dotenv").config();

// // Create an Polly client
const Polly = new AWS.Polly({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  signatureVersion: "v4",
  region: "us-west-1",
});

// Create the Speaker instance
const Player = new Speaker({
  channels: 1,
  bitDepth: 16,
  sampleRate: 16000,
});

export let POLLY = (params) =>
  Polly.synthesizeSpeech(params, (err, data) => {
    if (err) {
      console.log(err.code);
    } else if (data) {
      // if (data.AudioStream instanceof Buffer) {
      //   // Initiate the source
      //   var bufferStream = new Stream.PassThrough();
      //   // convert AudioStream into a readable stream
      //   bufferStream.end(data.AudioStream);
      //   // Pipe into Player
      //   bufferStream.pipe(Player);
      // }
    }
  });

// Assign a color based on the category of a word
export const categoryToColor = {
  nouns: "red",
  verbs: "blue",
  adjectives: "black",
  prepositions: "green",
  pronouns: "yellow",
  interjections: "purple",
};
