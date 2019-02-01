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

## Markup, Styling and ClassNames
The markup for the components Input, Select, Checkbox, Radio, Textarea, Datepicker and DropZone consists of a wrapper div, label, the main component, hint, and error message.

By default all component have NO styling applied att all.</br>
This is intentionally, so you have the posibility to apply your own styling.</br>
All the components used in the form are scoped by the default classes, situated on the Form component, `react-formik-ui form-wrapper`

Each component has its corresponding wrapper class (eg: Input component  `input-wrapper` ), as well as the class `form-element`.</br>
you also can pass your own custom class to the wrapper of each component bay passing the `className` prop.

Anyhow, if you pass the  `structured` prop to the Form component, a minimal styling will be applied to add some structure to the form and each form element.

NEW: If you pass `themed` instead of `structured` as prop to the form component, the React-Fomik-UI Theme will be applied to all components expet the Button and SubmitBtn components.
The Button and SubmitBtn have been left out of styling due to most apps alrready have some styles for buttons established, there fore you can pass on those styles to the mentioned buttos by adde your cutom clasName

IMPORTANT: There is no need to pass `structured` and `themed` together, but no harm if you do.

## Installation

```sh
npm install --save react-formik-ui@next
```

# Usage

### Peer Dependency
React-Formik-UI has a Peer dependency of [Formik](https://github.com/jaredpalmer/formik).</br>
This means that you need to add [Formik](https://github.com/jaredpalmer/formik) to your project to make use of React-Formik-UI.</br>

```sh
npm install --save formik@latest
```

### Form validations
To validate the form fields, the use of [Yup](https://github.com/jquense/yup) is recommended.

```sh
npm install --save yup
```

### Components and Examples

See the Styleguide [here](https://kaihotz.github.io/react-formik-ui/)

- [Form](#form)
- [Input](#input)
- [Select](#select)
- [Radio](#radio)
- [Checkbox](#checkbox)
- [Textarea](#textarea)
- [DatePicker](#datepicker)
- [DropZone](#dropzone)
- [Button](#button)
- [Toggle](#toggle)
- [SubmitBtn](#submitbtn)

- [Example Form](#complete-form-example)


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
    <td>styled</td>
    <td>boolean</td>
    <td>false</td>
    <td>If passed adds a minimal style and structure to the form </td>
  </tr>
</table>

#### Code example:
```jsx
import React, { Component } from 'react'
import { Formik } from 'formik'
import { Form } from 'react-formik-ui'

class Example extends Component {

  onSubmit = data => {
    // here you hanlde the data to be submited
  }

  render () {
    return (
      <Formik
        initialValues={ /* inital values setup */ }
        validationSchema={ /* validation schema setup */ }
        onSubmit={this.onSubmit}
        render={() => (
          <Form styled>

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
    <td>Adds a custom class to the Input wrapper div</td>
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
    <td>Sets the field as requierd, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema</td>
  </tr>
  <tr>
    <td>type</td>
    <td>string</td>
    <td>text</td>
    <td>Defines the type of the Input Filed</td>
  </tr>
</table>

#### Code example:
```jsx
import React, { Component } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup';

import { Form, Input, SubmitBtn } from 'react-formik-ui'

class Example extends Component {

  onSubmit = data => {
    // here you hanlde the data to be submited
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
          <Form styled>

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
    <td>Adds a custom class to the Select wrapper div</td>
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
    <td>Sets the field as requierd, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema</td>
  </tr>
</table>

#### Code example:
```jsx
import React, { Component } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup';

import { Form, Select, SubmitBtn } from 'react-formik-ui'

class Example extends Component {

  onSubmit = data => {
    // here you hanlde the data to be submited
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
          <Form styled>

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
    <td>Adds a custom class to the Radio wrapper div</td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>boolean</td>
    <td>false</td>
    <td>Disables the Radio Fields</td>
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
    <td>Sets the field as requierd, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema</td>
  </tr>
</table>

#### Code example:
```jsx
import React, { Component } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup';

import { Form, Radio, SubmitBtn } from 'react-formik-ui'

class Example extends Component {

  onSubmit = data => {
    // here you hanlde the data to be submited
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
          <Form styled>

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
    <td>Adds a custom class to the Checkbox wrapper div</td>
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
    <td>Sets the Checkbox as requierd, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema</td>
  </tr>
  <tr>
    <td>text</td>
    <td>string / node</td>
    <td>null</td>
    <td>Sets the text shown beside the checkbox </td>
  </tr>
</table>

#### Code example:
```jsx
import React, { Component } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup';

import { Form, Checkbox, SubmitBtn } from 'react-formik-ui'

class Example extends Component {

  onSubmit = data => {
    // here you hanlde the data to be submited
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
          <Form styled>

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
    <td>Adds a custom class to the Textarea wrapper div</td>
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
    <td>Sets the field as requierd, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema</td>
  </tr>
</table>

#### Code example:
```jsx
import React, { Component } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup';

import { Form, Textarea, SubmitBtn } from 'react-formik-ui'

class Example extends Component {

  onSubmit = data => {
    // here you hanlde the data to be submited
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
          <Form styled>

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

For aditional configuration options and layouts, please refere to [ReactJS Datepicker](https://reactdatepicker.com/).</br>
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
    <td>className</td>
    <td>string</td>
    <td>null</td>
    <td>Adds a custom class to the Input wrapper div</td>
  </tr>
  <tr>
    <td>dateFormat</td>
    <td>string / Array of strings</td>
    <td>[ 'MM/dd/yyyy', 'M/d/yyyy', 'dd.MM.yyyy', 'd.M.yyyy' ]</td>
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
    <td>Sets the field as requierd, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema</td>
  </tr>
</table>

#### Code example:
```jsx
import React, { Component } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup';

import { Form, Datepicker, SubmitBtn } from 'react-formik-ui'

class Example extends Component {

  onSubmit = data => {
    // here you hanlde the data to be submited
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
          <Form styled>

            <Datepicker
              name='birthDay'
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

For aditional configuration options and layouts, please refere to [react-dropzone](https://react-dropzone.js.org/).</br>

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
    <td>className</td>
    <td>string</td>
    <td>null</td>
    <td>Adds a custom class to the DropZone wrapper div</td>
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
    <td>name</td>
    <td>string</td>
    <td>Required</td>
    <td>Sets the Name of the DropZone Field</td>
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
    <td>Sets the field as requierd, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema</td>
  </tr>
  <tr>
    <td>zoneActiveText</td>
    <td>string</td>
    <td>Drop file(s) here</td>
    <td>Sets the text to be shown when draging files over the drop zone </td>
  </tr>
</table>

#### Code example:
```jsx
import React, { Component } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup';

import { Form, DropZone, SubmitBtn } from 'react-formik-ui'

class Example extends Component {

  onSubmit = data => {
    // here you hanlde the data to be submited
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
          <Form styled>

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

#### Code example:
```jsx
import React, { Component } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup';

import { Form, Button } from 'react-formik-ui'

class Example extends Component {

  onSubmit = data => {
    // here you hanlde the data to be submited
  }

  render () {
    return (
      <Formik
        initialValues={ /* inital values setup */ }
        validationSchema={ /* validation schema setup */ }
        onSubmit={this.onSubmit}
        render={() => (
          <Form styled>

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
    <td>className</td>
    <td>string</td>
    <td>null</td>
    <td>Adds a custom class to the Toggle button</td>
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

#### Code example:
```jsx
import React, { Component } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup';

import { Form, Toggle, SubmitBtn } from 'react-formik-ui'

class Example extends Component {

  onSubmit = data => {
    // here you hanlde the data to be submited
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
          <Form styled>

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

By default the SubmitBtn handles the submition, no further handler or configuration is needed.

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

#### Code example:
```jsx
import React, { Component } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup';

import { Form, SubmitBtn } from 'react-formik-ui'

class Example extends Component {

  onSubmit = data => {
    // here you hanlde the data to be submited
  }

  render () {
    return (
      <Formik
        initialValues={ /* inital values setup */ }
        validationSchema={ /* validation schema setup */ }
        onSubmit={this.onSubmit}
        render={() => (
          <Form styled>

            <SubmitBtn />

          </Form>
        )}
      />
    )
  }
}
```

## Complete Form Example
```jsx
import React, { Component } from 'react';
import { Formik } from 'formik'
import *  as yup from 'yup'
import {
  Form,
  Input,
  Datepicker,
  Select,
  Checkbox,
  Radio,
  Textarea,
  Button,
  SubmitBtn,
  Toggle,
  DropZone,
} from './components'
import logo from './logo.svg';
import './App.css';

class ExampleForm extends Component {
  onSubmit = data => {
    console.log(data)
  }

  // example of validation with yup
  getSchema = () => {
    return yup.object().shape({
      salutation: yup
        .string(),
      firstName: yup
        .string()
        .required('First name is required'),
      lastName: yup
        .string()
        .required('Last name is required'),
      email: yup
        .string()
        .email('Wrong format')
        .required('Email is required'),
      birthDay: yup
        .date(),
      maritalStatus: yup
        .string()
        .nullable(),
      driverLicense: yup
        .boolean(),
      pets: yup
        .boolean(),
      income: yup
        .string()
        .required('Income is required'),
      files: yup
        .array()
        .required('Image is required'),
      additionalInfo: yup
        .string(),
      termsAndConitions: yup
        .boolean(),
    });
  }

  render() {
    const styledDiv = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '15px'
    }

    return (
      <Formik
        initialValues={{
          salutation: 'Mr',
          firstName: '',
          lastName: '',
          email: '',
          birthDay: '',
          maritalStatus: '',
          driverLicense: false,
          pets: false,
          income: '',
          files: [],
          additionalInfo: '',
          termsAndConitions: false,
        }}
        validationSchema={this.getSchema}
        onSubmit={this.onSubmit}
        render={({ values }) => {
          return (
            <Form styled>
              <fieldset>
                <legend>Form Example:</legend>

                <Radio
                  name='salutation'
                  label='Salutation'
                  options={[
                    { value: 'Mr', label: 'Mr.' },
                    { value: 'Mrs', label: 'Mrs.' },
                    { value: 'Ms', label: 'Ms.' }
                  ]}
                />

                <Input
                  name='firstName'
                  label='First name'
                  required
                />

                <Input
                  name='lastName'
                  label='Last name'
                  required
                />

                <Input
                  name='email'
                  label='Enter your Email'
                  required
                />

                <Datepicker
                  name='birthDay'
                  label='Birthday'
                  dateFormat='D.M.YYYY'
                  placeholder='D.M.YYYY'
                  hint='Please enter your birth date'
                />

                <Select
                  name='maritalStatus'
                  label='Marital Status'
                  placeholder='Select an Option'
                  options={[
                    { value: '1', label: 'Married' },
                    { value: '2', label: 'Single' },
                    { value: '3', label: 'Divorced' },
                    { value: '4', label: 'Widowed' }
                  ]}
                />

                <div style={styledDiv}>
                  <div>
                    {`Do you have a drivers license ? ${values.driverLicense ? 'Yes' : 'No'}`}
                  </div>
                  <Toggle name='driverLicense' />
                </div>

                <div style={styledDiv}>
                  <div>
                    {`Do you own pets ? ${values.pets ? 'Yes' : 'No'}`}
                  </div>
                  <Toggle name='pets' />
                </div>

                <Input
                  name='income'
                  label={`What is your monthly income $${values.income}`}
                  type='range'
                  min='0'
                  max='10000'
                  step='500'
                  required
                />

                <DropZone
                  name='files'
                  label='File upload'
                />

                <Textarea
                  name='additionalInfo'
                  label='Aditional information'
                  hint='this is optional'
                />

                <Checkbox
                  name='termsAndConitions'
                  label='Terms and Conditions'
                  text='Click to accept the terms and conditions'
                />

                <SubmitBtn disabled={!values.termsAndConitions} />
                <Button onClick={(() => alert('Cancel'))}>Cancel</Button>
              </fieldset>
            </Form>
          );
        }}
      />
    );
  }
}

export default ExampleForm;
```

## License

MIT © [KaiHotz](https://github.com/KaiHotz)
