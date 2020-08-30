import React from "react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { RootStoreContext } from "../../app/stores/rootStore";
import { Button, Container, Icon } from "semantic-ui-react";
import Speech from "react-speech";

const WordBankSentence = () => {
  const rootStore = useContext(RootStoreContext);
  const { sentence, clearSentence, textToSpeech } = rootStore.SentenceStore;

  return (
    <Container text>
      <p>{sentence}</p>
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
      <Button
        floated="right"
        animated
        color="blue"
        inverted
        onClick={textToSpeech}
      >
        <Button.Content visible>Speak</Button.Content>
        <Button.Content hidden>
          <Icon name="volume up" />
        </Button.Content>
      </Button>
      <Speech text="Welcome to react speech" />
    </Container>
  );
};

export default observer(WordBankSentence);
