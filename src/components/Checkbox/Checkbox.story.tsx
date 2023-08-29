import React, { FC } from 'react';
import { Formik } from 'formik';

import Checkbox, { Checkbox as CheckboxComp } from './Checkbox';
import Form from '../Form';

export default {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    props: {
      propTables: [CheckboxComp],
    },
  },
};

export const Default: FC = () => {
  return (
    <Formik
      initialValues={{
        checkboxExample: false,
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form>
        <Checkbox
          name="checkboxExample"
          label="Checkbox label"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        />
      </Form>
    </Formik>
  );
};

export const Structured: FC = () => {
  return (
    <Formik
      initialValues={{
        checkboxExample: false,
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="structure">
        <Checkbox
          name="checkboxExample"
          label="Checkbox label"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        />
      </Form>
    </Formik>
  );
};

export const Themed: FC = () => {
  return (
    <Formik
      initialValues={{
        checkboxExample: false,
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="theme">
        <Checkbox
          name="checkboxExample"
          label="Checkbox label"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
          hint="This is a hint"
        />
      </Form>
    </Formik>
  );
};

export const ThemedDisabled: FC = () => {
  return (
    <Formik
      initialValues={{
        checkboxExample: false,
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="theme">
        <Checkbox
          name="checkboxExample"
          label="Checkbox label"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
          disabled
        />
      </Form>
    </Formik>
  );
};

export const ThemedDisabledChecked: FC = () => {
  return (
    <Formik
      initialValues={{
        checkboxExample: true,
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="theme">
        <Checkbox
          name="checkboxExample"
          label="Checkbox label"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
          hint="This is a hint"
          disabled
        />
      </Form>
    </Formik>
  );
};

export const Group: FC = () => {
  const checkBoxes = [
    { name: 'check1', label: 'Checkbox 1', text: 'Lorem ipsum dolor 1.', value: false },
    { name: 'check2', label: 'Checkbox 2', text: 'Lorem ipsum dolor 2.', value: true },
    { name: 'check3', label: 'Checkbox 3', text: 'Lorem ipsum dolor 3.', value: false },
    { name: 'check4', label: 'Checkbox 4', text: 'Lorem ipsum dolor 4.', value: true },
  ];

  return (
    <Formik
      initialValues={{
        ...checkBoxes.reduce(
          (acc, { name, value }) => ({
            ...acc,
            [name]: value,
          }),
          {},
        ),
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="theme">
        {checkBoxes.map((cb) => (
          <Checkbox key={cb.name} name={cb.name} text={cb.text} />
        ))}
      </Form>
    </Formik>
  );
};
