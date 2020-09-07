import React, { useContext } from "react";
import { RootStoreContext } from "../../app/stores/rootStore";
import { Button } from "semantic-ui-react";
import WordBankListItem from "./WordBankListItem";
import { Grid } from "semantic-ui-react";
import { categoryToColor } from "../../app/common/util/util";

const WordBankList = () => {
  const rootStore = useContext(RootStoreContext);
  const { wordsByCategories } = rootStore.wordStore;
  return (
    <Grid centered>
      {wordsByCategories.map(([category, words]) => (
        <Grid.Column width={2} key={category}>
          <Button
            style={{
              display: "block",
              backgroundColor: categoryToColor[category],
            }}
            size="medium"
            fluid
          >
            {category}
          </Button>
          {words.map((word) => (
            <WordBankListItem word={word} />
          ))}
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default WordBankList;
