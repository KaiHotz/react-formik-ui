##### Default (no styling at all)

```jsx
import { Formik } from 'formik'
import { Form, Autocomplete } from 'react-formik-ui';

<Formik
  initialValues={{
    myAutocomplete1: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
  <Form>
    <Autocomplete
      label='Search'
      name='myAutocomplete1'
      hint='This is a hint'
      suggestions={[
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
      ]}
    />
  </Form>
</Formik>
```

##### Structured

```jsx
import { Formik } from 'formik'
import { Form, Autocomplete } from 'react-formik-ui';

<Formik
  initialValues={{
    myAutocomplete2: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
  <Form mode='structured'>

    <Autocomplete
      name='myAutocomplete2'
      label='Search'
      hint='This is a hint'
      suggestions={[
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
      ]}
    />

  </Form>
</Formik>
```

#####  Themed

```jsx
import { Formik } from 'formik'
import { Form, Autocomplete } from 'react-formik-ui';

<Formik
  initialValues={{
    myAutocomplete3: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
  <Form mode='themed'>

    <Autocomplete
      name='myAutocomplete3'
      label='Search'
      hint='This is a hint'
      suggestions={[
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
      ]}
    />

  </Form>
</Formik>
```
