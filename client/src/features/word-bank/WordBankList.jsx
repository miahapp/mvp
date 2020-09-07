import React, { useContext } from "react";
import { RootStoreContext } from "../../app/stores/rootStore";
import { Header } from "semantic-ui-react";
import WordBankListItem from "./WordBankListItem";
import { Grid, Container } from "semantic-ui-react";

const WordBankList = () => {
  const rootStore = useContext(RootStoreContext);
  const { wordsByCategories } = rootStore.wordStore;
  console.log("wordsByCategories: ", wordsByCategories);
  return (
    <Grid centered>
      {wordsByCategories.map(([group, words]) => (
        <Grid.Column width={2} key={group}>
          <Header>{group}</Header>
          {words.map((word) => (
            <WordBankListItem category={group} word={word} key={word.id} />
          ))}
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default WordBankList;
