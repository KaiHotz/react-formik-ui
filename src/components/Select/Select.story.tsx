import React, { FC } from 'react';
import { Formik } from 'formik';
import Select, { Select as SelectComp } from './Select';
import Form from '../Form';

export default {
  title: 'Select',
  component: Select,
  parameters: {
    props: {
      propTables: [SelectComp],
    },
  },
};

export const Default: FC = () => {
  return (
    <Formik
      initialValues={{
        selectExample: '',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form>
        <Select
          name="selectExample"
          label="Select options label"
          placeholder="Select an Option"
          options={[
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
            { value: '4', label: 'Option 4' },
            { value: '5', label: 'Option 5' },
            { value: '6', label: 'Option 6' },
          ]}
        />
      </Form>
    </Formik>
  );
};

export const DefaultMultiselect: FC = () => {
  return (
    <Formik
      initialValues={{
        multipleSelect: ['1', '3'],
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form>
        <Select
          multiple
          name="multipleSelect"
          label="Select options label"
          options={[
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
            { value: '4', label: 'Option 4' },
            { value: '5', label: 'Option 5' },
            { value: '6', label: 'Option 6' },
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
        selectExample: '',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="structure">
        <Select
          name="selectExample"
          label="Select options label"
          placeholder="Select an Option"
          options={[
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
            { value: '4', label: 'Option 4' },
            { value: '5', label: 'Option 5' },
            { value: '6', label: 'Option 6' },
          ]}
        />
      </Form>
    </Formik>
  );
};

export const StructuredMultiselect: FC = () => {
  return (
    <Formik
      initialValues={{
        multipleSelect: ['1', '3'],
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="structure">
        <Select
          multiple
          name="multipleSelect"
          label="Select options label"
          options={[
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
            { value: '4', label: 'Option 4' },
            { value: '5', label: 'Option 5' },
            { value: '6', label: 'Option 6' },
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
        selectExample: '',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="theme">
        <Select
          name="selectExample"
          label="Select options label"
          placeholder="Select an Option"
          options={[
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
            { value: '4', label: 'Option 4' },
            { value: '5', label: 'Option 5' },
            { value: '6', label: 'Option 6' },
          ]}
        />
      </Form>
    </Formik>
  );
};

export const ThemedMultiselect: FC = () => {
  return (
    <Formik
      initialValues={{
        multipleSelect: ['1', '3'],
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="theme">
        <Select
          multiple
          name="multipleSelect"
          label="Select options label"
          options={[
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
            { value: '4', label: 'Option 4' },
            { value: '5', label: 'Option 5' },
            { value: '6', label: 'Option 6' },
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
        selectExample: '1',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="theme">
        <Select
          name="selectExample"
          label="Select options label"
          placeholder="Select an Option"
          options={[
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
            { value: '4', label: 'Option 4' },
            { value: '5', label: 'Option 5' },
            { value: '6', label: 'Option 6' },
          ]}
          disabled
        />
      </Form>
    </Formik>
  );
};
