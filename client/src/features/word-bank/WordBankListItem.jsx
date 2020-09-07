import React, { useContext } from "react";
import { Image, Button } from "semantic-ui-react";
import { categoryToColor } from "../../app/common/util/util";
import { RootStoreContext } from "../../app/stores/rootStore";

const WordBankListItem = ({ word }) => {
  const rootStore = useContext(RootStoreContext);
  const { addToSentence } = rootStore.SentenceStore;

  return (
    <Button
      style={{
        backgroundColor: categoryToColor[word.category],
        margin: "1em",
        border: "1px black solid",
      }}
      onClick={() => addToSentence(word.word_name)}
      size="mini"
    >
      <Button.Content>{word.word_name}</Button.Content>
      <Image
        src={`/assets/word-bank/${word.category}/${word.word_name}.png`}
        size="mini"
        circular
        centered
      />
    </Button>
  );
};

export default WordBankListItem;
