<h1 align="center">React-Formik-UI</h1>

<div align="center">

[![NPM](https://img.shields.io/npm/v/react-formik-ui.svg)](https://www.npmjs.com/package/react-formik-ui)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-Airbnb-brightgreen.svg)](https://github.com/airbnb/javascript)
[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/KaiHotz/react-formik-ui/blob/master/LICENSE)

</div>

## Overview
React-Formik-UI is a simple component library, composed out of pure HTML form elements like:
form, input, select, checkbox, radio and textarea.

The Idea behind React-Formik-UI is to make the composition of forms with React and Formik even easier,
so you don't have to write any HTML markup or extra components for your forms.

Each component makes use of Formiks context, there for you need to have Formik installed in your project.


## NEW in v3:
- **MODE option:** The `themed` and `structured` props are obsolete and got replaced by the `mode` prop. Refer to **Markup, Styling and ClassNames**.
- **Dropzone:** The `DropZone` component now handles 3 additional props : `multiple` with default value set to true, if set to false it allows for single file upload only; `withClearButton` that enables a Button for clearing out added files and `clearButtonText` to set the text to shown on the Clear Button .
- **PhoneInput:** Now supports the `withCountryMeta` prop , that returns an object not only with the phone number but also with the selected country information
- **className:**  The `className` Prop on each component now adds the css class directly to the component instead of the wrapper div, so libraries like Bootstrap can be used to style the form component.
- **Overall** more stability and less bugs, as well as a complete rewrite of the css for better understanding of the code.

## Markup, Styling and ClassNames
The markup for the components Input, PhoneInput, Select, Checkbox, Radio, Textarea, Datepicker and DropZone consists of a wrapper div, label, the main component, hint, and error message.

By default all component have NO styling applied at all.</br>
This is intentionally, so you have the possibility to apply your own styling.</br>
All the components used in the Form are scoped by the default classes, situated on the Form component, `react-formik-ui form-wrapper`

Each component has its corresponding component class (eg: PhoneInput component  `phoneInput` ) followed a level deeper by its wrapper class (eg: phoneInput component  `phoneInput-wrapper` ), as well as the class `form-element`.</br>

You can pass the `style` prop on each component, to add custom inline styles to the component div for each component.

The `className` Prop can be passed on each component to add a css class directly to the component instead of the wrapper div, so libraries like Bootstrap can be used to style the form component.

**The Mode prop:** If you pass the  `mode` prop to the `Form` component with `structured` as value, a minimal styling will be applied to add some structure to each `form-element`.

In case you pass the value `themed` through the `mode` prop on the `Form` component, the React-Formik-Ui Theme will be applied

## MIGRATION v2 to v3:
- If you used the `structured` or `themed` prop on the `Form` component you now need to change it to `mode='structured'` or `mode='themed'`.
- In case you used custom css classes through the `className` prop, you might need to adjust some of your custom styles since the `className` has been moved form the wrapper div to the main component.

## Installation
**Note:** React Formik UI makes use of the recently released react `Hooks` API, therefore make sure that your project uses the latest `React` version

```sh
npm install --save react-formik-ui
```

## Support
If you like the project and want to support my work, you can buy me a coffee :)

[![paypal](https://img.shields.io/badge/donate-paypal-blue.svg)](https://paypal.me/kaihotz)


# Usage

### Peer Dependency
React-Formik-UI has a Peer dependency of [Formik](https://github.com/jaredpalmer/formik).</br>
This means that you need to add [Formik](https://github.com/jaredpalmer/formik) to your project to make use of React-Formik-UI.</br>

```sh
npm install --save formik
```

### Form validations
To validate the form fields, the use of [Yup](https://github.com/jquense/yup) is recommended.

```sh
npm install --save yup
```

### See the Styleguide with Demo and Examples [here](https://kaihotz.github.io/react-formik-ui/)

### Components Documentation and Examples

- [Form](#form)
- [Autocomplete](#autocomplete)
- [Input](#input)
- [PhoneInput](#phoneinput)
- [Select](#select)
- [Radio](#radio)
- [Checkbox](#checkbox)
- [Textarea](#textarea)
- [DatePicker](#datepicker)
- [DropZone](#dropzone)
- [Button](#button)
- [Toggle](#toggle)
- [SubmitBtn](#submitbtn)
- [Complete Form Example ](https://kaihotz.github.io/react-formik-ui/#form)

## Form
The Form component, like in a normal HTML form is the main wrapper for your form.</br>
It renders with the classNames `react-formik-ui` and `form-wrapper`.</br>
A custom class can be passed with the `className` prop.

You don't need to pass an `onSubmit` handler, since this is already handled under the hood.

#### Props:
<table style="font-size: 12px">
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>className</td>
    <td>string</td>
    <td>null</td>
    <td>Adds a custom class to the form</td>
  </tr>
  <tr>
    <td>mode</td>
    <td>string</td>
    <td>default</td>
    <td>One of 'default', 'structured', 'themed'</td>
  </tr>

</table>

#### [Demo](https://kaihotz.github.io/react-formik-ui/#form)

#### Code example:
```jsx
import React, { Component } from 'react'
import { Formik } from 'formik'
import { Form } from 'react-formik-ui'

class Example extends Component {

  onSubmit = data => {
    // here you handle the data to be submitted
  }

  render () {
    return (
      <Formik
        initialValues={ /* inital values setup */ }
        validationSchema={ /* validation schema setup */ }
        onSubmit={this.onSubmit}
        render={() => (
          <Form mode='structured'>

          </Form>
        )}
      />
    )
  }
}
```

## Autocomplete
The Autocomplete component renders with the classNames `form-element` and `autocomplete-wrapper`.</br>
A custom class can be passed through the `className` prop.

#### Props:
<table style="font-size: 12px">
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
    <tr>
    <td>name</td>
    <td>string</td>
    <td>Required</td>
    <td>Sets the Name of the input field of the Autocomplete component</td>
  </tr>
  <tr>
    <td>suggestions</td>
    <td>array</td>
    <td>required</td>
    <td>Array of suggestions to be searched in</td>
  </tr>
  <tr>
    <td>className</td>
    <td>string</td>
    <td>null</td>
    <td>Adds a custom class to the input element of the Autocomplete component</td>
  </tr>
  <tr>
    <td>style</td>
    <td>object</td>
    <td>null</td>
    <td>Adds a custom inline styles to the Autocomplete wrapper div</td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>boolean</td>
    <td>false</td>
    <td>Disables the Autocomplete</td>
  </tr>
  <tr>
    <td>hint</td>
    <td>string</td>
    <td>null</td>
    <td>Sets a hint text after/below the Autocomplete Field</td>
  </tr>
  <tr>
    <td>id</td>
    <td>string</td>
    <td>null</td>
    <td>Sets an Id for the Autocomplete Field, if not passed, the id will be the name</td>
  </tr>
  <tr>
    <td>label</td>
    <td>string</td>
    <td>null</td>
    <td>Sets the main Label for the Autocomplete Field</td>
  </tr>
  <tr>
    <td>placeholder</td>
    <td>string</td>
    <td>null</td>
    <td>Sets the Placeholder text</td>
  </tr>
  <tr>
    <td>required</td>
    <td>boolean</td>
    <td>false</td>
    <td>Sets the field as required, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema</td>
  </tr>
</table>

#### [Demo](https://kaihotz.github.io/react-formik-ui/#autocomplete)

#### Code example:
```jsx
import React, { Component } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup';

import { Form, Autocomplete, SubmitBtn } from 'react-formik-ui'

class Example extends Component {

  onSubmit = data => {
    // here you handle the data to be submitted
  }

  // example of validation with yup
  getSchema = () => {
    return yup.object().shape({
      nameField: yup
        .string()
        .required('Name Is required'),
    })
  }

  render () {
    return (
      <Formik
        initialValues={{
          searchFiled: ''
        }}
        validationSchema={this.getSchema}
        onSubmit={this.onSubmit}
        render={() => (
          <Form mode='structured'>

           <Autocomplete
              label='Search'
              name="searchFiled"
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

            <SubmitBtn />
          </Form>
        )}
      />
    )
  }
}
```

## Input
The Input component renders with the classNames `form-element` and `input-wrapper`.</br>
A custom class can be passed through the `className` prop.

#### Props:
<table style="font-size: 12px">
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>className</td>
    <td>string</td>
    <td>null</td>
    <td>Adds a custom class to the input element of the Input component</td>
  </tr>
  <tr>
    <td>style</td>
    <td>object</td>
    <td>null</td>
    <td>Adds a custom inline styles to the Input wrapper div</td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>boolean</td>
    <td>false</td>
    <td>Disables the Input Field</td>
  </tr>
  <tr>
    <td>hint</td>
    <td>string</td>
    <td>null</td>
    <td>Sets a hint text after/below the Input Field</td>
  </tr>
  <tr>
    <td>id</td>
    <td>string</td>
    <td>null</td>
    <td>Sets an Id for the Input Field, if not passed, the id will be the name</td>
  </tr>
  <tr>
    <td>label</td>
    <td>string</td>
    <td>null</td>
    <td>Sets the main Label for the Input Field</td>
  </tr>
  <tr>
    <td>name</td>
    <td>string</td>
    <td>Required</td>
    <td>Sets the Name of the Input Field</td>
  </tr>
  <tr>
    <td>placeholder</td>
    <td>string</td>
    <td>null</td>
    <td>Sets the Placeholder text</td>
  </tr>
  <tr>
    <td>required</td>
    <td>boolean</td>
    <td>false</td>
    <td>Sets the field as required, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema</td>
  </tr>
  <tr>
    <td>type</td>
    <td>string</td>
    <td>text</td>
    <td>Defines the type of the Input Filed</td>
  </tr>
</table>

#### [Demo](https://kaihotz.github.io/react-formik-ui/#input-1)

#### Code example:
```jsx
import React, { Component } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup';

import { Form, Input, SubmitBtn } from 'react-formik-ui'

class Example extends Component {

  onSubmit = data => {
    // here you handle the data to be submitted
  }

  // example of validation with yup
  getSchema = () => {
    return yup.object().shape({
      nameField: yup
        .string()
        .required('Name Is required'),
    })
  }

  render () {
    return (
      <Formik
        initialValues={{
          nameField: ''
        }}
        validationSchema={this.getSchema}
        onSubmit={this.onSubmit}
        render={() => (
          <Form mode='structured'>

            <Input
              name='nameField'
              label='Input field main label'
              placeholder='Your Name'
              hint='This is a hint'
              required
            />

            <SubmitBtn />
          </Form>
        )}
      />
    )
  }
}
```

## PhoneInput
The PhoneInput component renders with the classNames `form-element` and `phoneInput-wrapper`.</br>
A custom class can be passed through the `className` prop.

#### Props:
<table style="font-size: 12px">
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>name</td>
    <td>string</td>
    <td>Required</td>
    <td>Sets the Name of the Input Field</td>
  </tr>
  <tr>
    <td>id</td>
    <td>string</td>
    <td>null</td>
    <td>Sets an Id for the Input Field, if not passed, the id will be the name</td>
  </tr>
  <tr>
    <td>className</td>
    <td>string</td>
    <td>null</td>
    <td>Adds a custom class to the input/select element of the PhoneInput component</td>
  </tr>
  <tr>
    <td>label</td>
    <td>string</td>
    <td>null</td>
    <td>Sets the main Label for the Input Field</td>
  </tr>
  <tr>
    <td>hint</td>
    <td>string</td>
    <td>null</td>
    <td>Sets a hint text after/below the Input Field</td>
  </tr>
  <tr>
    <td>buttonFlagStyles</td>
    <td>object</td>
    <td>null</td>
    <td>Style object that overrides the styles of the Flag shown in the button</td>
  </tr>
  <tr>
    <td>defaultCountry</td>
    <td>string</td>
    <td>null</td>
    <td>Sets the default country (use iso alpha-2 country code e.g 'us', 'gb', 'fr') </td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>boolean</td>
    <td>false</td>
    <td>Disables the PhoneInput Field</td>
  </tr>
  <tr>
    <td>required</td>
    <td>boolean</td>
    <td>false</td>
    <td>Sets the field as required, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema</td>
  </tr>
  <tr>
    <td>format</td>
    <td>string</td>
    <td>'INTERNATIONAL'</td>
    <td>One of: 'INTERNATIONAL', 'NATIONAL'. Sets the format of the entered  phone number, in case of 'NATIONAL' the defaultCountry must be set as well</td>
  </tr>
  <tr>
    <td>listFlagStyles</td>
    <td>object</td>
    <td>null</td>
    <td>Style object that overrides the styles of the Flag shown in the country dropdown</td>
  </tr>
  <tr>
    <td>placeholder</td>
    <td>string</td>
    <td>null</td>
    <td>Sets the Placeholder text</td>
  </tr>
  <tr>
    <td>preferredCountries</td>
    <td>Array</td>
    <td>null</td>
    <td>Lets you restrict the country dropdown to a specific list of countries (use iso alpha-2 country code e.g 'us', 'gb', 'fr')</td>
  </tr>
  <tr>
    <td>regions</td>
    <td>String / Array</td>
    <td>[]</td>
    <td>Lets you restrict the country dropdown to a list of countries in the specified regions</td>
  </tr>
  <tr>
    <td>style</td>
    <td>object</td>
    <td>null</td>
    <td>Adds a custom inline styles to the Autocomplete wrapper div</td>
  </tr>
  <tr>
    <td>withCountryMeta</td>
    <td>boolean</td>
    <td>false</td>
    <td>
      changes the retuned value into an Object that contains the phone number and country meta information
      eg.:
      <pre>
      {
        phoneNumber: '+49 176 12345678',
        country: {
          name: 'Germany (Deutschland)',
          iso2: 'de'
        }
      }
      </pre>
      In case of use the Formik initialValue for the PhoneInput needs to be an Object exactly like this:
      <pre>
      {
        phoneNumber: '',
        country: {
          name: '',
          iso2: ''
      }
      </pre>
    </td>
  </tr>
</table>

#### [Demo](https://kaihotz.github.io/react-formik-ui/#phoneinput)

```jsx
import { Formik } from 'formik'
import { Form, PhoneInput } from 'react-formik-ui';

<Formik
  initialValues={{
    phoneNr1: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form>
      <PhoneInput
        name='phoneNr1'
        label='Phone Nr.'
        placeholder='+1 702 123 4567'
        hint='This is a hint'
      />
    </Form>
  )}
/>
```

## Select
The Select component renders with the classNames `form-element` and `select-wrapper`.</br>
A custom class can be passed through the `className` prop.

#### Props:
<table style="font-size: 12px">
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>className</td>
    <td>string</td>
    <td>null</td>
    <td>Adds a custom class to the select element of the Select component</td>
  </tr>
  <tr>
    <td>style</td>
    <td>object</td>
    <td>null</td>
    <td>Adds a custom inline styles to the Select wrapper div </td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>boolean</td>
    <td>false</td>
    <td>Disables the Select Field</td>
  </tr>
  <tr>
    <td>hint</td>
    <td>string</td>
    <td>null</td>
    <td>Sets a hint text after/below the Select component</td>
  </tr>
  <tr>
    <td>id</td>
    <td>string</td>
    <td>null</td>
    <td>Sets an Id for the Select Field, if not passed, the id will be the name</td>
  </tr>
  <tr>
    <td>label</td>
    <td>string</td>
    <td>null</td>
    <td>Sets the main Label for the Select Field</td>
  </tr>
  <tr>
    <td>name</td>
    <td>string</td>
    <td>Required</td>
    <td>Sets the Name of the Select Field</td>
  </tr>
  <tr>
    <td>options</td>
    <td>array</td>
    <td>Required</td>
    <td>Array in the shape of [ { value: string or number, label: string } ]</td>
  </tr>
  <tr>
    <td>placeholder</td>
    <td>string</td>
    <td>null</td>
    <td>Sets a Placeholder as the first option with no value</td>
  </tr>
  <tr>
    <td>required</td>
    <td>boolean</td>
    <td>false</td>
    <td>Sets the field as required, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema</td>
  </tr>
</table>

#### [Demo](https://kaihotz.github.io/react-formik-ui/#select-1)

#### Code example:
```jsx
import React, { Component } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup';

import { Form, Select, SubmitBtn } from 'react-formik-ui'

class Example extends Component {

  onSubmit = data => {
    // here you handle the data to be submitted
  }

  // example of validation with yup
  getSchema = () => {
    return yup.object().shape({
      dropdown: yup
        .string(),
    })
  }

  render () {
    return (
      <Formik
        initialValues={{
          dropdown: ''
        }}
        validationSchema={this.getSchema}
        onSubmit={this.onSubmit}
        render={() => (
          <Form mode='structured'>

            <Select
              name='dropdown'
              label='Select options main label'
              placeholder='Select an Option'
              options={[
                { value: '1', label: 'Option 1' },
                { value: '2', label: 'Option 2' },
                { value: '3', label: 'Option 3' }
              ]}
            />

            <SubmitBtn />
          </Form>
        )}
      />
    )
  }
}
```

## Radio
The Radio component renders with the classNames `form-element` and `radio-wrapper`.</br>
A custom class can be passed through the `className` prop.

#### Props:
<table style="font-size: 12px">
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>className</td>
    <td>string</td>
    <td>null</td>
    <td>Adds a custom class to each input element of the Radio component</td>
  </tr>
  <tr>
    <td>style</td>
    <td>object</td>
    <td>null</td>
    <td>Adds a custom inline styles to the Radio wrapper div </td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>boolean</td>
    <td>false</td>
    <td>Disables the Radio Fields</td>
  </tr>
  <tr>
    <td>inline</td>
    <td>boolean</td>
    <td>false</td>
    <td>Displays the radio option inline from left to right</td>
  </tr>
  <tr>
    <td>hint</td>
    <td>string</td>
    <td>null</td>
    <td>Sets a hint text after/below the Radio component</td>
  </tr>
  <tr>
    <td>label</td>
    <td>string</td>
    <td>null</td>
    <td>Sets the main Label for the Radio Fields</td>
  </tr>
  <tr>
    <td>name</td>
    <td>string</td>
    <td>Required</td>
    <td>Sets the Name of the Radio Fields</td>
  </tr>
  <tr>
    <td>options</td>
    <td>array</td>
    <td>Required</td>
    <td>Array in the shape of [ { value: string or number, label: string } ]</td>
  </tr>
  <tr>
    <td>required</td>
    <td>boolean</td>
    <td>false</td>
    <td>Sets the field as required, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema</td>
  </tr>
</table>

#### [Demo](https://kaihotz.github.io/react-formik-ui/#radio-1)

#### Code example:
```jsx
import React, { Component } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup';

import { Form, Radio, SubmitBtn } from 'react-formik-ui'

class Example extends Component {

  onSubmit = data => {
    // here you handle the data to be submitted
  }

  // example of validation with yup
  getSchema = () => {
    return yup.object().shape({
      radioOptions: yup
        .string(),
    })
  }

  render () {
    return (
      <Formik
        initialValues={{
          radioOptions: ''
        }}
        validationSchema={this.getSchema}
        onSubmit={this.onSubmit}
        render={() => (
          <Form mode='structured'>

            <Radio
              name='radioOptions'
              label='Radio options main label'
              options={[
                { value: '1', label: 'Option 1' },
                { value: '2', label: 'Option 2' },
                { value: '3', label: 'Option 3' }
              ]}
            />

            <SubmitBtn />
          </Form>
        )}
      />
    )
  }
}
```

## Checkbox
The Checkbox component renders with the classNames `form-element` and `checkbox-wrapper`.</br>
A custom class can be passed through the `className` prop.

#### Props:
<table style="font-size: 12px">
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>className</td>
    <td>string</td>
    <td>null</td>
    <td>Adds a custom class to the input element of the Checkbox component</td>
  </tr>
  <tr>
    <td>style</td>
    <td>object</td>
    <td>null</td>
    <td>Adds a custom inline styles to the Checkbox wrapper div</td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>boolean</td>
    <td>false</td>
    <td>Disables the Checkbox</td>
  </tr>
  <tr>
    <td>hint</td>
    <td>string</td>
    <td>null</td>
    <td>Sets a hint text after/below the Checkbox</td>
  </tr>
  <tr>
    <td>id</td>
    <td>string</td>
    <td>null</td>
    <td>Sets an Id for the Checkbox, if not passed, the id will be the name</td>
  </tr>
  <tr>
    <td>label</td>
    <td>string</td>
    <td>null</td>
    <td>Sets the main Label for the Checkbox</td>
  </tr>
  <tr>
    <td>name</td>
    <td>string</td>
    <td>Required</td>
    <td>Sets the Name of the Checkbox</td>
  </tr>
  <tr>
    <td>required</td>
    <td>boolean</td>
    <td>false</td>
    <td>Sets the Checkbox as required, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema</td>
  </tr>
  <tr>
    <td>text</td>
    <td>string / node</td>
    <td>null</td>
    <td>Sets the text shown beside the checkbox </td>
  </tr>
</table>

#### [Demo](https://kaihotz.github.io/react-formik-ui/#checkbox)

#### Code example:
```jsx
import React, { Component } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup';

import { Form, Checkbox, SubmitBtn } from 'react-formik-ui'

class Example extends Component {

  onSubmit = data => {
    // here you handle the data to be submitted
  }

  // example of validation with yup
  getSchema = () => {
    return yup.object().shape({
      agreement: yup
        .boolean(),
    })
  }

  render () {
    return (
      <Formik
        initialValues={{
          agreement: false
        }}
        validationSchema={this.getSchema}
        onSubmit={this.onSubmit}
        render={() => (
          <Form mode='structured'>

            <Checkbox
              name='agreement'
              label='Checkbox main label'
              text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
            />

            <SubmitBtn />
          </Form>
        )}
      />
    )
  }
}
```

## Textarea
The Textarea component renders with the classNames `form-element` and `textarea-wrapper`.</br>
A custom class can be passed through the `className` prop.

#### Props:
<table style="font-size: 12px">
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>className</td>
    <td>string</td>
    <td>null</td>
    <td>Adds a custom class to the textarea element of the Textarea component</td>
  </tr>
  <tr>
    <td>style</td>
    <td>object</td>
    <td>null</td>
    <td>Adds a custom inline styles to the Textarea wrapper div</td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>boolean</td>
    <td>false</td>
    <td>Disables the Textarea</td>
  </tr>
  <tr>
    <td>hint</td>
    <td>string</td>
    <td>null</td>
    <td>Sets a hint text after/below the Textarea</td>
  </tr>
  <tr>
    <td>id</td>
    <td>string</td>
    <td>null</td>
    <td>Sets an Id for the Textarea, if not passed, the id will be the name</td>
  </tr>
  <tr>
    <td>label</td>
    <td>string</td>
    <td>null</td>
    <td>Sets the main Label for the Textarea</td>
  </tr>
  <tr>
    <td>name</td>
    <td>string</td>
    <td>Required</td>
    <td>Sets the Name of the Textarea</td>
  </tr>
  <tr>
    <td>placeholder</td>
    <td>string</td>
    <td>null</td>
    <td>Sets the Placeholder text</td>
  </tr>
  <tr>
    <td>required</td>
    <td>boolean</td>
    <td>false</td>
    <td>Sets the field as required, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema</td>
  </tr>
</table>

#### [Demo](https://kaihotz.github.io/react-formik-ui/#textarea-1)

#### Code example:
```jsx
import React, { Component } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup';

import { Form, Textarea, SubmitBtn } from 'react-formik-ui'

class Example extends Component {

  onSubmit = data => {
    // here you handle the data to be submitted
  }

  // example of validation with yup
  getSchema = () => {
    return yup.object().shape({
      comment: yup
        .string(),
    })
  }

  render () {
    return (
      <Formik
        initialValues={{
          comment: ''
        }}
        validationSchema={this.getSchema}
        onSubmit={this.onSubmit}
        render={() => (
          <Form mode='structured'>

            <Textarea
              name='comment'
              label='Write a comment'
            />

            <SubmitBtn />
          </Form>
        )}
      />
    )
  }
}
```

## Datepicker
The Datepicker component uses [ReactJS Datepicker](https://reactdatepicker.com/) under the hood.</br>
It renders with the classNames `form-element` and `datePicker-wrapper`.</br>
A custom class can be passed through the `className` prop.</br>

For additional configuration options and layouts, please refer to [ReactJS Datepicker](https://reactdatepicker.com/).</br>
You can then pass the desired configuration as props just like you would on ReactJS Datepicker.

#### Props:
<table style="font-size: 12px">
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>id</td>
    <td>string</td>
    <td>null</td>
    <td>Sets an Id for the Datepicker, if not passed, the id will be the name</td>
  </tr>
  <tr>
    <td>className</td>
    <td>string</td>
    <td>null</td>
    <td>Adds a custom class to the React-Datepicker component</td>
  </tr>
  <tr>
    <td>style</td>
    <td>object</td>
    <td>null</td>
    <td>Adds a custom inline styles to the Datepicker wrapper div</td>
  </tr>
  <tr>
    <td>dateFormat</td>
    <td>string / Array of strings</td>
    <td>dd.MM.yyyy</td>
    <td>Sets the desired date format.</td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>boolean</td>
    <td>false</td>
    <td>Disables the Datepicker Field</td>
  </tr>
  <tr>
    <td>hint</td>
    <td>string</td>
    <td>null</td>
    <td>Sets a hint text after/below the Datepicker Field</td>
  </tr>
  <tr>
    <td>label</td>
    <td>string</td>
    <td>null</td>
    <td>Sets the main Label for the Datepicker Field</td>
  </tr>
  <tr>
    <td>name</td>
    <td>string</td>
    <td>Required</td>
    <td>Sets the Name of the Datepicker Field</td>
  </tr>
  <tr>
    <td>placeholder</td>
    <td>string</td>
    <td>null</td>
    <td>Sets the Placeholder text</td>
  </tr>
  <tr>
    <td>required</td>
    <td>boolean</td>
    <td>false</td>
    <td>Sets the field as required, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema</td>
  </tr>
</table>

#### [Demo](https://kaihotz.github.io/react-formik-ui/#datepicker)

#### Code example:
```jsx
import React, { Component } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup';

import { Form, Datepicker, SubmitBtn } from 'react-formik-ui'

class Example extends Component {

  onSubmit = data => {
    // here you handle the data to be submitted
  }

  // example of validation with yup
  getSchema = () => {
    return yup.object().shape({
      birthday: yup
        .date(),
    })
  }

  render () {
    return (
      <Formik
        initialValues={{
          birthday: ''
        }}
        validationSchema={this.getSchema}
        onSubmit={this.onSubmit}
        render={() => (
          <Form mode='structured'>

            <Datepicker
              name='birthday'
              label='Birthdate'
            />

            <SubmitBtn />
          </Form>
        )}
      />
    )
  }
}
```

## DropZone
The DropZone component uses [react-dropzone](https://react-dropzone.js.org/) under the hood.</br>
It renders with the classNames `form-element` and `dropzone-wrapper`.</br>
A custom class can be passed through the `className` prop.</br>

For additional configuration options and layouts, please refer to [react-dropzone](https://react-dropzone.js.org/).</br>

#### Props:
<table style="font-size: 12px">
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>accept</td>
    <td>string</td>
    <td>image/*</td>
    <td>
      Allow specific types of files. See https://github.com/okonet/attr-accept for more information. Keep in mind that mime type determination is not reliable across platforms. CSV files, for example, are reported as text/plain under macOS but as application/vnd.ms-excel under Windows. In some cases there might not be a mime type set at all. See: https://github.com/react-dropzone/react-dropzone/issues/276
    </td>
  </tr>
  <tr>
    <td>name</td>
    <td>string</td>
    <td>Required</td>
    <td>Sets the Name of the DropZone Field</td>
  </tr>
  <tr>
    <td>id</td>
    <td>string</td>
    <td>null</td>
    <td>Sets an Id for the DropZone Field, if not passed, the id will be the name</td>
  </tr>
  <tr>
    <td>className</td>
    <td>string</td>
    <td>null</td>
    <td>Adds a custom class to the React-DropZone component</td>
  </tr>
  <tr>
    <td>style</td>
    <td>object</td>
    <td>null</td>
    <td>Adds a custom inline styles to the Dropzone wrapper div</td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>boolean</td>
    <td>false</td>
    <td>Disables the DropZone Field</td>
  </tr>
  <tr>
    <td>disabledText</td>
    <td>string</td>
    <td>File upload disabled</td>
    <td>text shown as placeholder if DropZone is disabled</td>
  </tr>
  <tr>
    <td>fileInfo</td>
    <td>boolean</td>
    <td>false</td>
    <td>Shows the number of accepted and rejected files after each drop</td>
  </tr>
  <tr>
    <td>hint</td>
    <td>string</td>
    <td>null</td>
    <td>Sets a hint text after/below the DropZone Field</td>
  </tr>
  <tr>
    <td>label</td>
    <td>string</td>
    <td>null</td>
    <td>Sets the main Label for the DropZone Field</td>
  </tr>
  <tr>
    <td>placeholder</td>
    <td>string</td>
    <td>Drop some files here.</td>
    <td>Sets the Placeholder text</td>
  </tr>
  <tr>
    <td>required</td>
    <td>boolean</td>
    <td>false</td>
    <td>Sets the field as required, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema</td>
  </tr>
  <tr>
    <td>zoneActiveText</td>
    <td>string</td>
    <td>Drop file(s) here</td>
    <td>Sets the text to be shown when dragging files over the drop zone </td>
  </tr>

  <tr>
    <td>withClearButton</td>
    <td>boolean</td>
    <td>false</td>
    <td>Enables a Clear button below the Dropbox, that enables you to clear out all the files you added to the Dropbox</td>
  </tr>
  <tr>
    <td>clearButtonText</td>
    <td>string</td>
    <td>Clear Files</td>
    <td>Sets the text to be shown on the Clear Button</td>
  </tr>
  <tr>
    <td>multiple</td>
    <td>boolean</td>
    <td>true</td>
    <td>Allow drag 'n' drop (or selection from the file dialog) of multiple files. Set to false to enable Single file upload</td>
  </tr>
</table>

#### [Demo](https://kaihotz.github.io/react-formik-ui/#dropzone)

#### Code example:
```jsx
import React, { Component } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup';

import { Form, DropZone, SubmitBtn } from 'react-formik-ui'

class Example extends Component {

  onSubmit = data => {
    // here you handle the data to be submitted
  }

  // example of validation with yup
  getSchema = () => {
    return yup.object().shape({
      files: yup
        .array()
    })
  }

  render () {
    return (
      <Formik
        initialValues={{
          files: []
        }}
        validationSchema={this.getSchema}
        onSubmit={this.onSubmit}
        render={() => (
          <Form mode='structured'>

              <DropZone
                name='files'
                label='Image upload'
              />

            <SubmitBtn />
          </Form>
        )}
      />
    )
  }
}
```

## Button
The Button component renders with the className `btn`.</br>
A custom class can be passed through the `className` prop.</br>

#### Props:
<table style="font-size: 12px">
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>children</td>
    <td>string / node</td>
    <td>null</td>
    <td>Renders the children passed to the button</td>
  </tr>
  <tr>
    <td>className</td>
    <td>string</td>
    <td>null</td>
    <td>Adds a custom class to the button</td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>boolean</td>
    <td>false</td>
    <td>Disables the button</td>
  </tr>
  <tr>
    <td>onClick</td>
    <td>function</td>
    <td>Required</td>
    <td>Sets the onClick handler for the button</td>
  </tr>
  <tr>
    <td>type</td>
    <td>string</td>
    <td>button</td>
    <td>Sets the type for the button</td>
  </tr>
</table>

#### [Demo](https://kaihotz.github.io/react-formik-ui/#button)

#### Code example:
```jsx
import React, { Component } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup';

import { Form, Button } from 'react-formik-ui'

class Example extends Component {

  onSubmit = data => {
    // here you handle the data to be submitted
  }

  render () {
    return (
      <Formik
        initialValues={ /* inital values setup */ }
        validationSchema={ /* validation schema setup */ }
        onSubmit={this.onSubmit}
        render={() => (
          <Form mode='structured'>

            <Button onClick={(() => alert('Cancel'))}>
              Cancel
            </Button>

          </Form>
        )}
      />
    )
  }
}
```

## Toggle
The Toggle button component, is the only component so far who has its own styling.</br>
Since it uses the Button component, it renders with the classNames `btn` and also `toggle-btn`.</br>
A custom class can be passed through the `className` prop.</br>

#### Props:
<table style="font-size: 12px">
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>id</td>
    <td>string</td>
    <td>null</td>
    <td>Sets an Id for the Toggle button, if not passed, the id will be the name</td>
  </tr>
  <tr>
    <td>className</td>
    <td>string</td>
    <td>null</td>
    <td>Adds a custom class to the Toggle button wrapper-div</td>
  </tr>
  <tr>
    <td>style</td>
    <td>object</td>
    <td>null</td>
    <td>Adds a custom inline styles to the Toggle switch wrapper div</td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>boolean</td>
    <td>false</td>
    <td>Disables the Toggle button</td>
  </tr>
  <tr>
    <td>name</td>
    <td>string</td>
    <td>Required</td>
    <td>Sets the Name of the Toggle button</td>
  </tr>
</table>

#### [Demo](https://kaihotz.github.io/react-formik-ui/#toggle-1)

#### Code example:
```jsx
import React, { Component } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup';

import { Form, Toggle, SubmitBtn } from 'react-formik-ui'

class Example extends Component {

  onSubmit = data => {
    // here you handle the data to be submitted
  }

  // example of validation with yup
  getSchema = () => {
    return yup.object().shape({
      toggleBtn: yup
        .boolean(),
    })
  }

  render () {
    return (
      <Formik
        initialValues={{
          toggleBtn: false
        }}
        validationSchema={this.getSchema}
        onSubmit={this.onSubmit}
        render={() => (
          <Form mode='structured'>

            <Toggle name='toggleBtn'/>

            <SubmitBtn />
          </Form>
        )}
      />
    )
  }
}
```

## SubmitBtn
The SubmitBtn component renders with the classNames `btn` and `submit-btn`.</br>
A custom class can be passed through the `className` prop.</br>

By default the SubmitBtn handles the submission, no further handler or configuration is needed.

#### Props:
<table style="font-size: 12px">
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>className</td>
    <td>string</td>
    <td>null</td>
    <td>Adds a custom class to the SubmitBtn</td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>boolean</td>
    <td>false</td>
    <td>Disables the SubmitBtn</td>
  </tr>
  <tr>
    <td>text</td>
    <td>string / node</td>
    <td>Submit</td>
    <td>Sets the text shown on the SubmitBtn</td>
  </tr>
  <tr>
    <td>type</td>
    <td>string</td>
    <td>submit</td>
    <td>Sets the type for the SubmitBtn</td>
  </tr>
</table>

#### [Demo](https://kaihotz.github.io/react-formik-ui/#submitbtn-1)

#### Code example:
```jsx
import React, { Component } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup';

import { Form, SubmitBtn } from 'react-formik-ui'

class Example extends Component {

  onSubmit = data => {
    // here you handle the data to be submitted
  }

  render () {
    return (
      <Formik
        initialValues={ /* inital values setup */ }
        validationSchema={ /* validation schema setup */ }
        onSubmit={this.onSubmit}
        render={() => (
          <Form mode='structured'>

            <SubmitBtn />

          </Form>
        )}
      />
    )
  }
}
```
## License

MIT © [KaiHotz](https://github.com/KaiHotz)
