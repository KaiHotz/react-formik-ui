```jsx static
import React, { Component } from 'react'
import { Formik } from 'formik'
import yup from 'yup'
import { Form } from 'formik-components'

class FormExample extends Component {
  handleOptions = () => {
    let options = []
    for (let i = 1; i <= 16; i += 1) {
      const option = { label: `label ${i}`, value: i }
      options.push(option)
    }
    return options
  }

  getSchema = () => yup.object().shape({
    inputfield: yup
      .string()
      .required('Input field is Required'),
    passwordField: yup
      .string()
      .required('Input field is Required'),
    selectedDate: yup
      .date()
      .required('Date is required'),
    dropdown: yup.number()
  })

  onSubmit = data => {
    alert(data)
  }

  render () {
    return (
      <Formik
        initialValues={{
          inputfield: '',
          passwordField: '',
          selectedDate: '',
          dropdown: 1
        }}
        validationSchema={this.getSchema()}
        onSubmit={this.onSubmit}
        render={({ handleSubmit, values }) => (
          <Form>
            <Form.Input
              label='This is the label text'
              name='inputfield'
              placeholder='this is a placeholder'
              required
            />
            <Form.Input
              type='password'
              label='Enter a Password'
              name='passwordField'
              placeholder='Your password goes herer'
              required
            />
            <Form.DatePicker
              label='Select a Date'
              name='selectedDate'
              required
            />
            <Form.Select
              label='Select an Option'
              name='dropdown'
              required
              options={this.handleOptions()}
            />
            <Form.SubmitBtn
              content='Search'
              diabled={!values.inputfield && !values.selectedDate}
            />
          </Form>
        )}
      />
    )
  }
}

export default FormExample
```
