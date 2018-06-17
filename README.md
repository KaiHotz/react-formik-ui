# react-formik-ui

>

[![NPM](https://img.shields.io/npm/v/react-formik-ui.svg)](https://www.npmjs.com/package/react-formik-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-Airbnb-brightgreen.svg)](https://github.com/airbnb/javascript)

## Install

```bash
npm install --save react-formik-ui
```

## Usage

```jsx
import React, { Component } from 'react'

import * as yup from 'yup';

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
          render={({ handleSubmit, values }) => {
            return (
              <Form styled>
                <fieldset>
                  <legend>Form Example:</legend>
                  <Toggle name='myToggle'/>
                    <Input
                      name='name'
                      label='Input'
                      hint='this is a hint'
                      required
                      disabled
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
            );
          }}
        />
    )
  }
}
```

## License

MIT © [KaiHotz](https://github.com/KaiHotz)
