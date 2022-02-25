import React, { FC } from 'react';
import { Formik } from 'formik';
import PhoneInput, { PhoneInput as PhoneInputComp } from './PhoneInput';
import Form from '../Form';

export default {
  title: 'PhoneInput',
  component: PhoneInput,
  parameters: {
    props: {
      propTables: [PhoneInputComp],
    },
  },
};

export const Default: FC = () => {
  return (
    <Formik
      initialValues={{
        phoneNr: '',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      {({ values }) => {
        return (
          <Form>
            <PhoneInput name="phoneNr" label="Phone Nr." placeholder="+1 702 123 4567" hint="This is a hint" />
            <fieldset style={{ maxWidth: 250, minHeight: 32, marginTop: 20 }}>
              <legend>Preview of the returned Value:</legend>
              <pre style={{ margin: 0 }}>{values.phoneNr && JSON.stringify(values.phoneNr, null, 2)}</pre>
            </fieldset>
          </Form>
        );
      }}
    </Formik>
  );
};

export const WithCountryMeta: FC = () => {
  return (
    <Formik
      initialValues={{
        phoneData: {
          phoneNumber: '',
          country: {
            name: '',
            iso2: '',
          },
        },
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      {({ values }) => {
        return (
          <Form>
            <PhoneInput name="phoneData" label="Phone Nr." placeholder="+1 702 123 4567" hint="This is a hint" withCountryMeta />
            <fieldset style={{ maxWidth: 250, minHeight: 32, marginTop: 20 }}>
              <legend>Preview of the returned Value:</legend>
              <pre style={{ margin: 0 }}>{values.phoneData && JSON.stringify(values.phoneData, null, 2)}</pre>
            </fieldset>
          </Form>
        );
      }}
    </Formik>
  );
};

export const WithDefaultCountry: FC = () => {
  return (
    <Formik
      initialValues={{
        phoneNr: '',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form>
        <PhoneInput name="phoneNr" label="Phone Nr." hint="This is a hint" defaultCountry="DE" />
      </Form>
    </Formik>
  );
};

export const WithPreferredCountries: FC = () => {
  return (
    <Formik
      initialValues={{
        phoneNr: '',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form>
        <PhoneInput name="phoneNr" label="Phone Nr." hint="This is a hint" preferredCountries={['CL', 'AR', 'BR', 'CO']} />
      </Form>
    </Formik>
  );
};

export const WithPreferredRegions: FC = () => {
  return (
    <Formik
      initialValues={{
        phoneNr: '',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form>
        <PhoneInput name="phoneNr" label="Phone Nr." hint="This is a hint" regions={['carribean', 'oceania']} />
      </Form>
    </Formik>
  );
};

export const NationalPhoneNrFormat: FC = () => {
  return (
    <Formik
      initialValues={{
        phoneNr: '',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form>
        <PhoneInput
          name="phoneNr"
          label="Phone Nr."
          format="NATIONAL"
          defaultCountry="US"
          placeholder="(555) 123-4567"
          hint="This is a hint"
        />
      </Form>
    </Formik>
  );
};

export const Themed: FC = () => {
  return (
    <Formik
      initialValues={{
        phoneNr: '',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="theme">
        <PhoneInput name="phoneNr" label="Phone Nr." hint="This is a hint" />
      </Form>
    </Formik>
  );
};

export const ThemedNationalPhoneNrFormat: FC = () => {
  return (
    <Formik
      initialValues={{
        phoneNr: '',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="theme">
        <PhoneInput name="phoneNr" label="Phone Nr." format="NATIONAL" defaultCountry="US" hint="This is a hint" />
      </Form>
    </Formik>
  );
};
