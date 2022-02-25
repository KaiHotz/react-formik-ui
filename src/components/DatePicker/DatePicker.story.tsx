import React, { FC } from 'react';
import * as yup from 'yup';
import DatePicker, { DatePicker as DatePickerComp } from './DatePicker';
import Form from '../Form';
import SubmitBtn from '../SubmitBtn';
import { Formik } from 'formik';

export default {
  title: 'DatePicker',
  component: DatePicker,
  parameters: {
    props: {
      propTables: [DatePickerComp],
    },
  },
};

export const Default: FC = () => {
  return (
    <Formik
      initialValues={{
        dateExample: '',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form>
        <DatePicker name="dateExample" label="Select a date" />

        <SubmitBtn text="Submit" />
      </Form>
    </Formik>
  );
};

export const Structured: FC = () => {
  return (
    <Formik
      initialValues={{
        dateExample: '',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="structure">
        <DatePicker name="dateExample" label="Select a date" />

        <SubmitBtn text="Submit" />
      </Form>
    </Formik>
  );
};

export const StructuredRequired: FC = () => {
  const shema = yup.object().shape({
    dateExample: yup.date().required('Is required'),
  });

  return (
    <Formik
      initialValues={{
        dateExample: '',
      }}
      validationSchema={shema}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="structure">
        <DatePicker
          name="dateExample"
          label="Select a date"
          dateFormat="dd.MM.yyyy"
          placeholder="dd.mm.yyyy"
          hint="Please enter / select a date"
          required
        />

        <SubmitBtn text="Submit" />
      </Form>
    </Formik>
  );
};

export const KeyboardNavigationEnabled: FC = () => {
  return (
    <Formik
      initialValues={{
        dateExample: '',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="structure">
        <DatePicker name="dateExample" label="Select a date" disabledKeyboardNavigation={false} />

        <SubmitBtn text="Submit" />
      </Form>
    </Formik>
  );
};

export const Themed: FC = () => {
  return (
    <Formik
      initialValues={{
        dateExample: '',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="theme">
        <DatePicker name="dateExample" label="Select a date" placeholder="DD.MM.YYYYY" dateFormat="dd.MM.yyyy" />

        <SubmitBtn text="Submit" />
      </Form>
    </Formik>
  );
};

export const ThemedWithTimePicker: FC = () => {
  return (
    <Formik
      initialValues={{
        dateExample: '',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="theme">
        <DatePicker
          name="dateExample"
          label="Select a date and time"
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={30}
          dateFormat="dd.MM.yyyy hh:mm aa"
          timeCaption="time"
          minDate={new Date()}
        />

        <SubmitBtn text="Submit" />
      </Form>
    </Formik>
  );
};

export const ThemedDisabled: FC = () => {
  return (
    <Formik
      initialValues={{
        dateExample: '',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="theme">
        <DatePicker name="dateExample" label="Select a date" disabled />

        <SubmitBtn text="Submit" />
      </Form>
    </Formik>
  );
};

export const ThemedDisabledWithPlaceholder: FC = () => {
  return (
    <Formik
      initialValues={{
        dateExample: '',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="theme">
        <DatePicker name="dateExample" label="Select a date" placeholder="DD.MM.YYYYY" dateFormat="dd.MM.yyyy" disabled />

        <SubmitBtn text="Submit" />
      </Form>
    </Formik>
  );
};
