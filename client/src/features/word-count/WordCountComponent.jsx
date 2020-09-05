import React, { useContext, useEffect } from "react";
import { RootStoreContext } from "../../app/stores/rootStore";
import { Segment, Container } from "semantic-ui-react";
import WordCountTable from "./WordCountTable";

const WordCountComponent = () => {
  const rootStore = useContext(RootStoreContext);
  const { user } = rootStore.userStore;
  const { loadWordCount } = rootStore.wordStore;

  useEffect(() => {
    if (user) loadWordCount();
  }, [user, loadWordCount]);

  return (
    <Container style={{ marginTop: "5em" }}>
      {user ? <WordCountTable /> : <Segment>User not logged in</Segment>}
    </Container>
  );
};

export default WordCountComponent;
