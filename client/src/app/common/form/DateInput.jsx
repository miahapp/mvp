import React from "react";
import { Form, Label } from "semantic-ui-react";
import { DateTimePicker } from "react-widgets";
import "react-widgets/dist/css/react-widgets.css";

let formats = ["dd MM yyyy"];

const DateInput = ({ input, placeholder, meta: { touched, error } }) => {
  return (
    <Form.Field error={touched && !!error} parse={formats}>
      <DateTimePicker
        placeholder={placeholder}
        value={input.value || null}
        onChange={input.onChange}
        onBlur={input.onBlur}
        time={false}
        max={new Date()}
      />
      {touched && error && (
        <Label basic color="red">
          {error}
        </Label>
      )}
    </Form.Field>
  );
};
export default DateInput;
