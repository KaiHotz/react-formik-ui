import React, { FC } from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';

import Form, { Form as FormComp } from './Form';
import {
  Radio,
  Input,
  DatePicker,
  PhoneInput,
  Select,
  Toggle,
  DropZone,
  Textarea,
  Checkbox,
  SubmitBtn,
} from '../../index';

export default {
  title: 'Form',
  component: Form,
  parameters: {
    props: {
      propTables: [FormComp],
    },
  },
};

const schema = yup
  .object()
  .shape({
    salutation: yup.string(),
    fullName: yup.string().required('Name is required'),
    email: yup.string().email('Wrong format').required('Email is required'),
    phoneNr: yup.string().required('Phone number is required'),
    title: yup.string().required('Is required').nullable(),
    maritalStatus: yup.string().nullable(),
    driverLicense: yup.boolean(),
    files: yup.array(),
    additionalInfo: yup.string(),
    termsAndConitions: yup.boolean(),
  })
  .required();

export const Structured: FC = () => {
  const onSubmit = (data: yup.InferType<typeof schema>) => alert(JSON.stringify(data));

  return (
    <Formik
      initialValues={{
        salutation: 'Mr',
        fullName: '',
        email: '',
        birthDay: '',
        phoneNr: '',
        title: '',
        maritalStatus: '',
        driverLicense: false,
        files: [],
        additionalInfo: '',
        termsAndConitions: false,
      }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ values }) => (
        <Form styling="structure">
          <fieldset>
            <legend>Complete Form Example</legend>
            <Radio
              name="salutation"
              label="Salutation"
              options={[
                { value: 'Mr', label: 'Mr.' },
                { value: 'Mrs', label: 'Mrs.' },
                { value: 'Ms', label: 'Ms.' },
              ]}
            />

            <Input name="fullName" label="Name" required />

            <Input name="email" label="Email" placeholder="foo@bar.com" hint="Please enter your Email" required />

            <DatePicker
              name="birthDay"
              label="Birthday"
              dateFormat="dd.MM.yyyy"
              placeholder="dd.mm.yyyy"
              hint="Please enter your birth date"
            />

            <PhoneInput name="phoneNr" label="Phone Nr." required />

            <Select
              name="maritalStatus"
              label="Marital Status"
              placeholder="Select an Option"
              options={[
                { value: '1', label: 'Married' },
                { value: '2', label: 'Single' },
                { value: '3', label: 'Divorced' },
                { value: '4', label: 'Widowed' },
              ]}
            />

            <div style={{ marginBottom: '15px' }}>
              <div style={{ marginBottom: '10px' }}>{`Do you have a drivers license ? ${
                values.driverLicense ? 'Yes' : 'No'
              }`}</div>
              <Toggle name="driverLicense" />
            </div>

            <DropZone name="files" label="File upload" placeholder="Drop some files here" withClearButton />

            <Textarea name="additionalInfo" label="Aditional information" hint="this is optional" />

            <Checkbox name="termsAndConitions" label="Terms and Conditions" text="Click to enable the submit button" />
            <br />
            <SubmitBtn disabled={!values.termsAndConitions} text="Submit" />
            <br />
            <br />
            <button onClick={() => alert('Cancel')}>Cancel</button>
          </fieldset>
        </Form>
      )}
    </Formik>
  );
};

export const Themed: FC = () => {
  const onSubmit = (data: yup.InferType<typeof schema>) => alert(JSON.stringify(data));

  return (
    <Formik
      initialValues={{
        salutation: 'Mr',
        fullName: '',
        email: '',
        birthDay: '',
        phoneNr: '',
        title: '',
        maritalStatus: '',
        driverLicense: false,
        files: [],
        additionalInfo: '',
        termsAndConitions: false,
      }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ values }) => (
        <Form styling="theme">
          <fieldset>
            <legend>Complete Form Example</legend>
            <Radio
              name="salutation"
              label="Salutation"
              options={[
                { value: 'Mr', label: 'Mr.' },
                { value: 'Mrs', label: 'Mrs.' },
                { value: 'Ms', label: 'Ms.' },
              ]}
            />

            <Input name="fullName" label="Name" required />

            <Input name="email" label="Email" placeholder="foo@bar.com" hint="Please enter your Email" required />

            <DatePicker
              name="birthDay"
              label="Birthday"
              dateFormat="dd.MM.yyyy"
              placeholder="dd.mm.yyyy"
              hint="Please enter your birth date"
            />

            <PhoneInput name="phoneNr" label="Phone Nr." required />

            <Select
              name="maritalStatus"
              label="Marital Status"
              placeholder="Select an Option"
              options={[
                { value: '1', label: 'Married' },
                { value: '2', label: 'Single' },
                { value: '3', label: 'Divorced' },
                { value: '4', label: 'Widowed' },
              ]}
            />

            <div style={{ marginBottom: '15px' }}>
              <div style={{ marginBottom: '10px' }}>{`Do you have a drivers license ? ${
                values.driverLicense ? 'Yes' : 'No'
              }`}</div>
              <Toggle name="driverLicense" />
            </div>

            <DropZone name="files" label="File upload" placeholder="Drop some files here" withClearButton />

            <Textarea name="additionalInfo" label="Aditional information" hint="this is optional" />

            <Checkbox name="termsAndConitions" label="Terms and Conditions" text="Click to enable the submit button" />
            <br />
            <SubmitBtn disabled={!values.termsAndConitions} text="Submit" />
            <br />
            <br />
            <button onClick={() => alert('Cancel')}>Cancel</button>
          </fieldset>
        </Form>
      )}
    </Formik>
  );
};
