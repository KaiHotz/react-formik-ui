export const context = {
  formik: {
    handleSubmit: jest.fn(),
    handleChange: jest.fn(),
    handleBlur: jest.fn(),
    setFieldValue: jest.fn(),
    setFieldTouched: jest.fn(),
    touched: {},
    errors: {},
    values: {
      checkboxTest: false,
      toggleTest: false,
      datePickerTest: '',
      inputTest: '',
      radioTest: '0',
      selectTest: '',
      textAreaTest: '',
    },
  },
}


export default context
