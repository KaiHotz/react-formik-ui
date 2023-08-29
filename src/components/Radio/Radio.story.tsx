import React, { FC } from 'react';
import { Formik } from 'formik';

import Radio, { Radio as RadioComp } from './Radio';
import Form from '../Form';

export default {
  title: 'Radio',
  component: Radio,
  parameters: {
    props: {
      propTables: [RadioComp],
    },
  },
};

export const Default: FC = () => {
  return (
    <Formik
      initialValues={{
        radioExample: '2',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form>
        <Radio
          name="radioExample"
          label="Radio options label"
          options={[
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
          ]}
        />
      </Form>
    </Formik>
  );
};

export const DefaultInline: FC = () => {
  return (
    <Formik
      initialValues={{
        radioExample: '2',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form>
        <Radio
          inline
          name="radioExample"
          label="Radio options label"
          options={[
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
          ]}
        />
      </Form>
    </Formik>
  );
};

export const Structured: FC = () => {
  return (
    <Formik
      initialValues={{
        radioExample: '2',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="structure">
        <Radio
          name="radioExample"
          label="Radio options label"
          options={[
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
          ]}
        />
      </Form>
    </Formik>
  );
};

export const StructuredInline: FC = () => {
  return (
    <Formik
      initialValues={{
        radioExample: '2',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="structure">
        <Radio
          inline
          name="radioExample"
          label="Radio options label"
          options={[
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
          ]}
        />
      </Form>
    </Formik>
  );
};

export const Themed: FC = () => {
  return (
    <Formik
      initialValues={{
        radioExample: '2',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="theme">
        <Radio
          name="radioExample"
          label="Radio options label"
          options={[
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
          ]}
        />
      </Form>
    </Formik>
  );
};

export const ThemedInline: FC = () => {
  return (
    <Formik
      initialValues={{
        radioExample: '2',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="theme">
        <Radio
          inline
          name="radioExample"
          label="Radio options label"
          options={[
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
          ]}
        />
      </Form>
    </Formik>
  );
};

export const ThemedDisabled: FC = () => {
  return (
    <Formik
      initialValues={{
        radioExample: '2',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="theme">
        <Radio
          name="radioExample"
          label="Radio options label"
          options={[
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
          ]}
          disabled
        />
      </Form>
    </Formik>
  );
};
