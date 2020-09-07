import React, { useContext } from "react";
import { Image, Button } from "semantic-ui-react";
import { categoryToColor } from "../../app/common/util/util";
import { RootStoreContext } from "../../app/stores/rootStore";

const WordBankListItem = ({ category, word }) => {
  const rootStore = useContext(RootStoreContext);
  const { addToSentence } = rootStore.SentenceStore;

  return (
    <Button
      style={{ color: categoryToColor.category }}
      onClick={() => addToSentence(word.word_name)}
      circular
      size="mini"
    >
      <Button.Content>{word.word_name}</Button.Content>
      <Image
        src={`/assets/${category}/${word.word_name}`}
        size="medium"
        circular
        centered
      />
    </Button>
  );
};

export default WordBankListItem;
