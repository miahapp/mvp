import React from "react";
import { Message } from "semantic-ui-react";

const ErrorMessage = ({ error, text }) => {
  return (
    <Message error>
      <Message.Header>{error.statusText}</Message.Header>
      {text && <Message content={text} />}
    </Message>
  );
};

export default ErrorMessage;
