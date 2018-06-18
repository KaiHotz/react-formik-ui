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
To validate your form fields, the use of [Yup](https://github.com/jquense/yup) is recommended.

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
- [Toggle](#toggle)
- [Button](#button)
- [SubmitBtn](#submitbtn)


## Form
The Form component, like in a normal HTML form is the main wrapper for your form.</br>
It renders with the classNames `react-formik-ui` and `form-wrapper`</br>
A custom class can be passed with the `className` prop

#### Props:
<table style="font-size: 14px">
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>styled</td>
    <td>boolean</td>
    <td>false</td>
    <td>If passed adds a minimal style and structure to your form </td>
  </tr>
  <tr>
    <td>className</td>
    <td>string</td>
    <td>null</td>
    <td>Adds a custom class to your form</td>
  </tr>
</table>

#### Code example:
```jsx
import React, { Component } from 'react'
import {Formik} from 'formik'
import Form from 'react-formik-ui'

class Example extends Component {

  onSubmit = data => {
    // here you hanlde your data to be submited
  }

  render () {
    return (
      <Formik
        initialValues={
          // here you define the initial values
        }
        validationSchema={
          // here you define your validation schema
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
The Input component renders with the classNames `form-elemnt` and `input-wrapper`</br>
A custom class can be passed through the `className` prop

#### Props:
<table style="font-size: 14px">
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
    <td>Sets the Name of your Input Field</td>
  </tr>
    <tr>
    <td>id</td>
    <td>string</td>
    <td>null</td>
    <td>Sets an Id for your Input Field, if not passed, the id will be the name</td>
  </tr>
  <tr>
    <td>type</td>
    <td>string</td>
    <td>text</td>
    <td>Defines the type of the Input Filed</td>
  </tr>
  <tr>
    <td>label</td>
    <td>string</td>
    <td>null</td>
    <td>Sets the main Label for the Input Field</td>
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
    <td>Sets the field as requierd, if label is passed an * is added to the end of the label. This will only work if you pass the required() method in your yup validation schema</td>
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
    <td>className</td>
    <td>string</td>
    <td>null</td>
    <td>Adds a custom class to the Input wrapper div</td>
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
    // here you hanlde your data to be submited
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
              label='This is the label'
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
The Select component renders with the classNames `form-elemnt` and `select-wrapper`</br>
A custom class can be passed through the `className` prop

#### Props:
<table style="font-size: 14px">
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
    <td>Sets the Name of your Select Field</td>
  </tr>
  <tr>
    <td>options</td>
    <td>array</td>
    <td>Required</td>
    <td>Array in the shape of [ { value: string or number, label: string } ]</td>
  </tr>
  <tr>
    <td>id</td>
    <td>string</td>
    <td>null</td>
    <td>Sets an Id for your Select Field, if not passed, the id will be the name</td>
  </tr>
  <tr>
    <td>label</td>
    <td>string</td>
    <td>null</td>
    <td>Sets the main Label for the Select Field</td>
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
    <td>Sets the field as requierd, if label is passed an * is added to the end of the label. This will only work if you pass the required() method in your yup validation schema</td>
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
    <td>className</td>
    <td>string</td>
    <td>null</td>
    <td>Adds a custom class to the Select wrapper div</td>
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
    // here you hanlde your data to be submited
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
              label='This is the label'
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
The Radio component renders with the classNames `form-elemnt` and `radio-wrapper`</br>
A custom class can be passed through the `className` prop

#### Props:
<table style="font-size: 14px">
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
    <td>Sets the Name of your Radio Fields</td>
  </tr>
  <tr>
    <td>options</td>
    <td>array</td>
    <td>Required</td>
    <td>Array in the shape of [ { value: string or number, label: string } ]</td>
  </tr>
  <tr>
    <td>label</td>
    <td>string</td>
    <td>null</td>
    <td>Sets the main Label for the Radio Fields</td>
  </tr>
  <tr>
    <td>required</td>
    <td>boolean</td>
    <td>false</td>
    <td>Sets the field as requierd, if label is passed, an * is added to the end of the label. Validation will only work if you pass the required() method in your yup validation schema</td>
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
    <td>className</td>
    <td>string</td>
    <td>null</td>
    <td>Adds a custom class to the Radio wrapper div</td>
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
    // here you hanlde your data to be submited
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
              label='This is the label'
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
    // here you hanlde your data to be submited
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
