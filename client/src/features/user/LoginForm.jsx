import React, { useContext } from 'react';
import { Button, Form, Header, Message, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { RootStoreContext } from '../../app/stores/rootStore';
import {
  combineValidators,
  isRequired,
  createValidator,
  composeValidators,
} from 'revalidate';
import { Form as FinalForm, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import ErrorMessage from '../../app/common/form/ErrorMessage';
import TextInput from '../../app/common/form/TextInput';

const isValidEmail = createValidator(
  (message) => (value) => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return message;
    }
  },
  'Invalid email address'
);

const validate = combineValidators({
  email: composeValidators(isRequired('Email'), isValidEmail)(),
  password: isRequired('Password'),
});

const LoginForm = () => {
  const rootStore = useContext(RootStoreContext);
  const { login } = rootStore.userStore;

  return (
    <Container style={{ marginTop: '5em' }}>
      <FinalForm
        onSubmit={(values) =>
          login(values).catch((error) => ({
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
              content="Login to miah"
              style={{ color: '#9AADED' }}
              textAlign="center"
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
            <Button
              disabled={(invalid && !dirtySinceLastSubmit) || pristine}
              loading={submitting}
              style={{ backgroundColor: '#D2D0FE', color: 'white' }}
              content="Login"
              fluid
            />
            {submitError && !dirtySinceLastSubmit && (
              <ErrorMessage
                error={submitError}
                text="Invalid email or password"
              />
            )}
            <Message style={{ backgroundColor: '#9AADED', color: 'white' }}>
              Haven't registered yet? <Link to="/register">Sign Up</Link>
            </Message>
          </Form>
        )}
      />
    </Container>
  );
};

export default LoginForm;
