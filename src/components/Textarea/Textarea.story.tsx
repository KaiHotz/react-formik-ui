import React, { FC } from 'react';
import { Formik } from 'formik';

import Textarea, { Textarea as TextareaComp } from './Textarea';
import Form from '../Form';

export default {
  title: 'Textarea',
  component: Textarea,
  parameters: {
    props: {
      propTables: [TextareaComp],
    },
  },
};

export const Default: FC = () => {
  return (
    <Formik
      initialValues={{
        textAreaExample: '',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form>
        <Textarea name="textAreaExample" label="Write a comment" />
      </Form>
    </Formik>
  );
};

export const Structured: FC = () => {
  return (
    <Formik
      initialValues={{
        textAreaExample: '',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="structure">
        <Textarea name="textAreaExample" label="Write a comment" />
      </Form>
    </Formik>
  );
};

export const Themed: FC = () => {
  return (
    <Formik
      initialValues={{
        textAreaExample: '',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="theme">
        <Textarea name="textAreaExample" label="Write a comment" />
      </Form>
    </Formik>
  );
};

export const ThemedWithPlaceholder: FC = () => {
  return (
    <Formik
      initialValues={{
        textAreaExample: '',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="theme">
        <Textarea name="textAreaExample" label="Write a comment" placeholder="Write some text here" />
      </Form>
    </Formik>
  );
};

export const ThemedDisabled: FC = () => {
  return (
    <Formik
      initialValues={{
        textAreaExample: '',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="theme">
        <Textarea name="textAreaExample" label="Write a comment" disabled />
      </Form>
    </Formik>
  );
};

export const ThemedDisabledWithText: FC = () => {
  return (
    <Formik
      initialValues={{
        textAreaExample:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="theme">
        <Textarea name="textAreaExample" label="Write a comment" disabled />
      </Form>
    </Formik>
  );
};
