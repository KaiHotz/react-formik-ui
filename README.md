<h1 align="center">React-Formik-UI</h1>

<div align="center">

[![NPM](https://img.shields.io/npm/v/react-formik-ui.svg)](https://www.npmjs.com/package/react-formik-ui)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-Airbnb-brightgreen.svg)](https://github.com/airbnb/javascript)
[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/KaiHotz/react-formik-ui/blob/master/LICENSE)

</div>

## Overview
React-Formik-UI is a component libarary composed out of HTML form elements like:
form, input, select, checkbox, radio, textarea, button, toggle button and a datepicker.

The Idea behind React-Formik-UI is to make the composition of forms with React and Formik even easier,
so you don't have to write any HTML markup or extra components for your forms.

Each component makes use of Formiks context, there for you need to have Formik installed in project

## Installation

```sh
npm install --save react-formik-ui
```

## Markup, Styling and ClassNames
The markup for the components input, select, checkbox, radio, textarea and Datepicker consists of a wrapper div, label, the main component, hint, and error message.

By default all component have NO styling applied.</br>
This is intentionally, so you have the posibility to apply your own styling.</br>
All the components used in your form are scoped by the default class on the Form component `react-formik-ui form-wrapper`

Each component has its corresponding wrapper class (eg: Input component  `input-wrapper` ), as well as the class `form-element`.</br>
you also can pass your own custom class to the wrapper of each component bay passing the `className` prop.

Anyhow if you pass the prop `styled` to the Form component a minimal styling will be applied to add some structure to each form element.

# Usage

### Peer Dependency
React-Formik-UI has a Peer dependency of [Formik](https://github.com/jaredpalmer/formik).
This means that you need to add [Formik](https://github.com/jaredpalmer/formik) to your project.

```sh
npm install --save formik
```

### Form validatios
To validate the form fields, the use of [Yup](https://github.com/jquense/yup) is recommended.

```sh
npm install --save yup
```

### Complete Form Examples
- [Form Example](#form-example)

### Components
- [Form](#form)
- [Input](#input)
- [Select](#select)
- [Radio](#radio)
- [Checkbox](#checkbox)
- [Textarea](#textarea)
- [DatePicker](#datepicker)
- [Button](#button)
- [Toggle](#toggle)
- [SubmitBtn](#submitbtn)


## Form
The Form component, like in a normal HTML form is the main wrapper for your form.</br>
It renders with the classNames `react-formik-ui` and `form-wrapper`</br>
A custom class can be passed with the `className` prop

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
import {Formik} from 'formik'
import Form from 'react-formik-ui'

class Example extends Component {

  onSubmit = data => {
    // here you hanlde the data to be submited
  }

  render () {
    return (
      <Formik
        initialValues={
          // here you define the initial values
        }
        validationSchema={
          // here you define the validation schema
        }
        onSubmit={this.onSubmit}
        render={({ handleSubmit }) => (
          <Form styled>

          </Form>
        )}
      />
    )
  }
}
```

## Input
The Input component renders with the classNames `form-element` and `input-wrapper`</br>
A custom class can be passed through the `className` prop

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

import Form, { Input, SubmitBtn } from 'react-formik-ui'

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
        render={({ handleSubmit }) => (
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
The Select component renders with the classNames `form-element` and `select-wrapper`</br>
A custom class can be passed through the `className` prop

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

import Form, { Select, SubmitBtn } from 'react-formik-ui'

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
        render={({ handleSubmit }) => (
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
The Radio component renders with the classNames `form-element` and `radio-wrapper`</br>
A custom class can be passed through the `className` prop

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

import Form, { Radio, SubmitBtn } from 'react-formik-ui'

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
        render={({ handleSubmit }) => (
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
The Checkbox component renders with the classNames `form-element` and `checkbox-wrapper`</br>
A custom class can be passed through the `className` prop

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

import Form, { Checkbox, SubmitBtn } from 'react-formik-ui'

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
        render={({ handleSubmit }) => (
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
The Textarea component renders with the classNames `form-element` and `textarea-wrapper`</br>
A custom class can be passed through the `className` prop

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

import Form, { Textarea, SubmitBtn } from 'react-formik-ui'

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
        render={({ handleSubmit }) => (
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
It renders with the classNames `form-element` and `datePicker-wrapper`</br>
A custom class can be passed through the `className` prop</br>

For aditional configuration options and layouts, please refere to [ReactJS Datepicker](https://reactdatepicker.com/)</br>
You can then pass the desired configuration as props just like you would on ReactJS Datepicker

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
    <td>[ 'DD.MM.YYYY', 'D.M.YYYY', 'MM/DD/YYYY', 'M/D/YYYY' ]</td>
    <td>Sets the desired date format</td>
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
    <td>maxDate</td>
    <td>string / number</td>
    <td>null</td>
    <td>Sets the max. Date</td>
  </tr>
  <tr>
    <td>minDate</td>
    <td>string / number</td>
    <td>null</td>
    <td>Sets the min. Date</td>
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

import Form, { Datepicker, SubmitBtn } from 'react-formik-ui'

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
        render={({ handleSubmit }) => (
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

## Button
The Button component renders with the classNames `form-element` and `btn`</br>
A custom class can be passed through the `className` prop</br>

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

import Form, { Button } from 'react-formik-ui'

class Example extends Component {

  onSubmit = data => {
    // here you hanlde the data to be submited
  }

  // example of validation with yup
  getSchema = () => {
    return yup.object().shape({

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
        render={({ handleSubmit }) => (
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
Since it uses the Button component, it renders with the classNames `form-element` and `btn`, and also `toggle-btn`</br>
A custom class can be passed through the `className` prop</br>

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

import Form, { Toggle, SubmitBtn } from 'react-formik-ui'

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
        render={({ handleSubmit }) => (
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

















































## Form Example
```jsx
import React, { Component } from 'react'
import {Formik} from 'formik'
import Form, {
  Input,
  Datepicker,
  Select,
  Checkbox,
  Radio,
  Textarea,
  Button,
  SubmitBtn,
  Toggle,
} from 'react-formik-ui'

import * as yup from 'yup';

class Example extends Component {

  onSubmit = data => {
    // here you hanlde the data to be submited
    console.log(data)
  }

  // example of validation with yup
  getSchema = () => {
    return yup.object().shape({
      name: yup
        .string()
        .required('Name Is required'),
      myTextarea: yup
        .string()
        .required('Comment Is required'),

    });
  }

  render () {
    return (
      <Formik
        initialValues={{
          name: '',
          range: '',
          birthDay: '',
          dropdown: '',
          myCheckBox: false,
          myRadio: '2',
          myTextarea: '',
          myToggle: true,
        }}
        validationSchema={this.getSchema}
        onSubmit={this.onSubmit}
        render={({ handleSubmit, values }) => (
          <Form styled>
            <fieldset>
              <legend>Form Example:</legend>
              <Toggle name='myToggle'/>
                <Input
                  name='name'
                  label='Input'
                  hint='this is a hint'
                  required
                />
                <Input
                  name='range'
                  label='Input as Range'
                  hint='this is a hint'
                  type='range'
                  required
                />
                <Datepicker
                  name='birthDay'
                  label='Birthdate'
                  dateFormat='D.M.YYYY'
                  required
                />
                <Select
                  name='dropdown'
                  label='DropDown'
                  placeholder='Select an Option'
                  options={[
                    { value: '1', label: 'Option 1' },
                    { value: '2', label: 'Option 2' },
                    { value: '3', label: 'Option 3' }
                  ]}
                />
                <Checkbox
                  name='myCheckBox'
                  label='Checkbox label'
                  text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.'
                />
                <Radio
                  name='myRadio'
                  label='Select one Radio option'
                  options={[
                    {value: '1', label: 'Option 1'},
                    {value: '2', label: 'Option 2'},
                    {value: '3', label: 'Option 3'}
                  ]}
                />
                <Textarea
                  name='myTextarea'
                  label='Write a comment'
                  hint='this is a hint'
                  required
                />
              <SubmitBtn disabled={!values.myToggle}/>
              <Button onClick={(() => alert('Cancel'))}>Cancel</Button>
            </fieldset>
          </Form>
        )}
      />
    )
  }
}
```

## License

MIT © [KaiHotz](https://github.com/KaiHotz)
