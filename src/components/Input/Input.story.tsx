import React, { FC } from 'react';
import { Formik, FieldArray } from 'formik';
import Input, { Input as InputComp } from './Input';
import Form from '../Form';
import { SubmitBtn } from '../../index';

export default {
  title: 'Input',
  component: Input,
  parameters: {
    props: {
      propTables: [InputComp],
    },
  },
};

export const Default: FC = () => {
  return (
    <Formik
      initialValues={{
        textField: '',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form>
        <Input name="textField" label="Input field label" hint="This is a hint" />

        <SubmitBtn text="Submit" />
      </Form>
    </Formik>
  );
};

export const Structured: FC = () => {
  return (
    <Formik
      initialValues={{
        textField: '',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="structure">
        <Input name="textField" label="Input field label" hint="This is a hint" />

        <SubmitBtn text="Submit" />
      </Form>
    </Formik>
  );
};

export const Themed: FC = () => {
  return (
    <Formik
      initialValues={{
        textField: '',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="theme">
        <Input name="textField" label="Input field label" hint="This is a hint" />

        <SubmitBtn text="Submit" />
      </Form>
    </Formik>
  );
};

export const ThemedWithPlaceholder: FC = () => {
  return (
    <Formik
      initialValues={{
        textField: '',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="theme">
        <Input name="textField" label="Input field label" placeholder="Your Name" hint="This is a hint" required />
      </Form>
    </Formik>
  );
};

export const ThemedDisabled: FC = () => {
  return (
    <Formik
      initialValues={{
        textField: '',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="theme">
        <Input name="textField" label="Text Input" hint="This field is disabled" disabled />
      </Form>
    </Formik>
  );
};

export const FieldArrayExample: FC = () => {
  const buttonStyle = {
    cursor: 'pointer',
    margin: '7px 3px 0px',
  };

  return (
    <Formik
      initialValues={{
        friends: ['Jared', 'Ian', 'Brat'],
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      {({ values }) => (
        <Form styling="structure">
          <FieldArray
            name="friends"
            render={(arrayHelpers) => (
              <div>
                {values.friends && values.friends.length > 0 ? (
                  values.friends.map((_, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                      <Input name={`friends.${index}`} label={`Friend ${index + 1}`} />
                      <div>
                        <button
                          style={buttonStyle}
                          type="button"
                          onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                        >
                          -
                        </button>
                        <button
                          style={buttonStyle}
                          type="button"
                          onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push('')}>
                    {/* show this when user has removed all friends from the list */}
                    Add a friend
                  </button>
                )}
                <div>
                  <SubmitBtn text="Submit" />
                </div>
              </div>
            )}
          />
        </Form>
      )}
    </Formik>
  );
};
