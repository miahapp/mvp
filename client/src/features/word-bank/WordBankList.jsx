import React, { useContext } from "react";
import { RootStoreContext } from "../../app/stores/rootStore";
import { Header } from "semantic-ui-react";
import WordBankListItem from "./WordBankListItem";

const WordBankList = () => {
  const rootStore = useContext(RootStoreContext);
  const { wordsByCategories } = rootStore.wordStore;
  return (
    <Container>
      {wordsByCategories.map(([group, word]) => (
        <Grid key={group}>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header>{group}</Header>
              {word.map((category, word) => (
                <Grid.Column width={4} key={word.id}>
                  <WordBankListItem category={category} word={word} />
                </Grid.Column>
              ))}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      ))}
    </Container>
  );
};

export default WordBankList;
