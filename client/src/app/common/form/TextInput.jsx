import React from "react";
import { Form, Label } from "semantic-ui-react";

const TextInput = ({
  input,
  width,
  type,
  placeholder,
  meta: { touched, error },
  label,
}) => {
  return (
    <Form.Field error={touched && !!error} type={type} width={width} inline>
      <label>{label}</label>
      <Form.Input {...input} placeholder={placeholder} fluid focus />
      {touched && error && (
        <Label basic color="red">
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default TextInput;
