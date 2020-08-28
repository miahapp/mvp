import React, { useContext } from "react";
import { Image, Button } from "semantic-ui-react";
import { categoryToColor } from "../../app/common/util/util";
import { RootStoreContext } from "../../app/stores/rootStore";

const WordBankListItem = ({ category, word }) => {
  const rootStore = useContext(RootStoreContext);
  const { addToSentence } = rootStore.SentenceStore;

  return (
    <Button
      key={word.id}
      style={{ color: categoryToColor.category }}
      content={word.name}
      onClick={addToSentence}
    >
      <Image src={word.icon} size="medium" circular centered />
    </Button>
  );
};

export default WordBankListItem;
