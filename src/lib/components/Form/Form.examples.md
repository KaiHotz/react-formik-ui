```jsx static
import React, { Component } from 'react';
import * as yup from 'yup';
import {Formik} from 'formik'
import Form, {
  Input,
  Datepicker,
  Select,
  Checkbox,
  Radio,
  Textarea,
  SubmitBtn
} from 'react-formik-ui'

class FormExample extends Component {

  onSubmit = data => {
    console.log(data)
  }

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

  render() {
    return (
      <Formik
        initialValues={{
          name: '',
          birthDay: '',
          dropdown: '',
          myCheckBox: false,
          myRadio: '2',
          myTextarea: ''
        }}
        validationSchema={this.getSchema}
        onSubmit={this.onSubmit}
        render={({ handleSubmit, values }) => {
          return (
            <Form>
              <fieldset>
                <legend>Personalia:</legend>
                  <Input
                    name='name'
                    label='Input Field'
                    hint='this is a hint'
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
                    text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
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
                </fieldset>
              <SubmitBtn />
            </Form>
          );
        }}
      />
    );
  }
}

export default FormExample
```
