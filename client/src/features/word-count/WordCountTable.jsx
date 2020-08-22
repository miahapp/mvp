import React, { useContext } from "react";
import { RootStoreContext } from "../../app/stores/rootStore";
import { Table, Container, Segment } from "semantic-ui-react";

const WordCountTable = () => {
  const rootStore = useContext(RootStoreContext);
  const { wordCountRegistry } = rootStore.wordStore;

  return (
    <Container>
      {wordCountRegistry ? (
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell singleLine>Word</Table.HeaderCell>
              <Table.HeaderCell>Word Count</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {wordCountRegistry.map((word) => (
            <Table.Body>
              <Table.Cell>{word.name}</Table.Cell>
              <Table.Cell>{word.wordCount}</Table.Cell>
            </Table.Body>
          ))}
        </Table>
      ) : (
        <Segment>Start using the app!</Segment>
      )}
    </Container>
  );
};

export default WordCountTable;
