import React, { useContext, useEffect } from "react";
import { RootStoreContext } from "../../app/stores/rootStore";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { observer } from "mobx-react-lite";
import WordBankList from "./WordBankList";
import WordBankSentence from "./WordBankSentence";

const WordBankComponent = () => {
  const rootStore = useContext(RootStoreContext);
  // const { user } = rootStore.userStore;
  const { loadWords, loading } = rootStore.wordStore;

  useEffect(() => {
    loadWords();
  }, [loadWords]);

  if (loading) return <LoadingComponent content="Loading word bank..." />;
  return (
    <Grid style={{ marginTop: "5em" }}>
      <Grid.Column width={16}>
        <WordBankSentence />
      </Grid.Column>
      <Grid.Column width={16}>
        <WordBankList />
      </Grid.Column>
    </Grid>
  );
};

export default observer(WordBankComponent);
