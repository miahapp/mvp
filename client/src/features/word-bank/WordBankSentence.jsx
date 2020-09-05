import React from "react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { RootStoreContext } from "../../app/stores/rootStore";
import { Button, Container, Icon } from "semantic-ui-react";
import Speech from "react-speech";

const WordBankSentence = () => {
  const rootStore = useContext(RootStoreContext);
  const { sentence, clearSentence } = rootStore.SentenceStore;

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
      <p class="sentence_block" data-placeholder="Click icons below...">
        {sentence}
      </p>
      <Button
        floated="left"
        animated
        color="red"
        inverted
        onClick={clearSentence}
      >
        <Button.Content visible>Clear</Button.Content>
        <Button.Content hidden>
          <Icon name="trash" />
        </Button.Content>
      </Button>
      <Button floated="right" color="blue" inverted>
        {" "}
        <Speech
          styles={style}
          text={"Welcome to react speech"}
          voice={"Google UK English Female"}
          lang={"en-US"}
          displayText={"Speak"}
          textAsButton={true}
        />
      </Button>
    </Container>
  );
};

export default observer(WordBankSentence);
