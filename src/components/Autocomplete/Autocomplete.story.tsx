import React, { FC } from 'react';
import { Formik } from 'formik';
import Autocomplete, { Autocomplete as AutocompleteComp } from './Autocomplete';
import Form from '../Form';

export default {
  title: 'Autocomplete',
  component: Autocomplete,
  parameters: {
    props: {
      propTables: [AutocompleteComp],
    },
  },
};

const suggestions = [
  'Afghanistan',
  'Aland Islands',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia, Plurinational State of',
  'Bonaire, Sint Eustatius and Saba',
  'Bosnia and Herzegovina',
  'Botswana',
  'Bouvet Island',
  'Brazil',
  'British Indian Ocean Territory',
  'Brunei Darussalam',
];

export const Default: FC = () => {
  return (
    <Formik
      initialValues={{
        myAutocomplete: '',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form>
        <Autocomplete label="Search" name="myAutocomplete" hint="This is a hint" suggestions={suggestions} />
      </Form>
    </Formik>
  );
};

export const Structured: FC = () => {
  return (
    <Formik
      initialValues={{
        myAutocomplete: '',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="structure">
        <Autocomplete name="myAutocomplete" label="Search" hint="This is a hint" suggestions={suggestions} />
      </Form>
    </Formik>
  );
};

export const Themed: FC = () => {
  return (
    <Formik
      initialValues={{
        myAutocomplete: '',
      }}
      onSubmit={(data) => alert(JSON.stringify(data))}
    >
      <Form styling="theme">
        <Autocomplete name="myAutocomplete" label="Search" hint="This is a hint" suggestions={suggestions} />
      </Form>
    </Formik>
  );
};
