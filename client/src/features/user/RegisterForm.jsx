import React, { useContext } from "react";
import { Form as FinalForm, Field } from "react-final-form";
import { Form, Button, Header, Container, Message } from "semantic-ui-react";
import TextInput from "../../app/common/form/TextInput";
import { RootStoreContext } from "../../app/stores/rootStore";
import { FORM_ERROR } from "final-form";
import {
  combineValidators,
  isRequired,
  createValidator,
  composeValidators,
} from "revalidate";
import ErrorMessage from "../../app/common/form/ErrorMessage";
import DateInput from "../../app/common/form/DateInput";

const isValidEmail = createValidator(
  (message) => (value) => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return message;
    }
  },
  "Invalid email address"
);

const validate = combineValidators({
  firstName: isRequired("firstName"),
  lastName: isRequired("lastName"),
  dob: isRequired("dob"),
  email: composeValidators(isRequired("Email"), isValidEmail)(),
  password: isRequired("password"),
});

const RegisterForm = () => {
  const rootStore = useContext(RootStoreContext);
  const { register } = rootStore.userStore;
  return (
    <Container style={{ marginTop: "5em" }}>
      <FinalForm
        onSubmit={(values) =>
          register(values).catch((error) => ({
            [FORM_ERROR]: error,
          }))
        }
        validate={validate}
        render={({
          handleSubmit,
          submitting,
          submitError,
          invalid,
          pristine,
          dirtySinceLastSubmit,
        }) => (
          <Form onSubmit={handleSubmit} error>
            <Header
              as="h2"
              content="Sign up to miah"
              color="teal"
              textAlign="center"
            />
            <Field
              name="firstName"
              component={TextInput}
              placeholder="First Name"
              type="text"
            />
            <Field
              name="lastName"
              component={TextInput}
              placeholder="Last Name"
              type="text"
            />
            <Field
              name="dob"
              placeholder="Date Of Birth"
              component={DateInput}
            />
            <Field
              name="email"
              component={TextInput}
              placeholder="Email"
              type="email"
            />
            <Field
              name="password"
              component={TextInput}
              placeholder="Password"
              type="password"
            />
            {submitError && !dirtySinceLastSubmit && (
              <ErrorMessage error={submitError} />
            )}
            <Button
              disabled={(invalid && !dirtySinceLastSubmit) || pristine}
              loading={submitting}
              color="teal"
              content="Sign Up"
              fluid
            />
            <Message>
              Have an account? <a href="/login">Login</a>
            </Message>
          </Form>
        )}
      />
    </Container>
  );
};

export default RegisterForm;
