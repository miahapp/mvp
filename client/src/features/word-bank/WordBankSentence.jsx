import React from "react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { RootStoreContext } from "../../app/stores/rootStore";
import { Button, Container } from "semantic-ui-react";
import Speech from "react-speech";

const WordBankSentence = () => {
  const rootStore = useContext(RootStoreContext);
  const { sentence, clearSentence, addWordCount } = rootStore.SentenceStore;

  const style = {
    container: {},
    text: {},
    buttons: {},
    play: {
      hover: {},
      button: {
        cursor: "pointer",
        pointerEvents: "none",
        outline: "none",
        borderStyle: "none",
      },
    },
    pause: {
      hover: {},
      button: {},
    },
    stop: {
      hover: {},
      button: {},
    },
    resume: {
      hover: {},
      button: {},
    },
  };

  return (
    <Container text>
      <p className="sentence_block" data-placeholder="Click icons below...">
        {sentence}
      </p>
      <Button floated="left" color="red" inverted onClick={clearSentence}>
        Clear
      </Button>
      <Button floated="right" color="blue" inverted>
        {" "}
        <Speech
          styles={style}
          text={sentence}
          voice={"Daniel"}
          lang={"en-US"}
          displayText={"Speak"}
          textAsButton={true}
          onClick={addWordCount}
          rate="0.5"
        />
      </Button>
    </Container>
  );
};

export default observer(WordBankSentence);
