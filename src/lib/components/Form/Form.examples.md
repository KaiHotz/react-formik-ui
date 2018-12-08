### Form component
```jsx
<Formik
  render={() => {
  return (
    <Form styled>

      <Input
        name='firstName'
        label='First name'
        required
      />

    </Form>
  )}}
/>
```

### All together
```jsx
const onSubmit = data => (alert(JSON.stringify(data)));

const  getSchema = () => {
  return yup.object().shape({
    salutation: yup
      .string(),
    name: yup
      .string()
      .required('Name is required'),
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
};

<Formik
  initialValues={{
    salutation: 'Mr',
    name: '',
    email: '',
    birthDay: '',
    maritalStatus: '',
    driverLicense: false,
    pets: false,
    income: '0',
    files: [],
    additionalInfo: '',
    termsAndConitions: false,
  }}
  validationSchema={getSchema}
  onSubmit={onSubmit}
  render={({ values }) => {
  return (
    <Form styled>
      <fieldset>
        <legend>All together:</legend>

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
            name='name'
            label='Name'
            required
          />

          <Input
            name='email'
            label='Enter your Email'
            placeholder='foo@bar.com'
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

          <div style={{marginBottom: '15px'}}>
            <div style={{marginBottom: '10px'}}>
              {`Do you have a drivers license ? ${values.driverLicense ? 'Yes' : 'No'}`}
            </div>
            <Toggle name='driverLicense' />
          </div>

          <Input
            name='income'
            label={`What is your monthly income $ ${values.income},-`}
            type='range'
            min='0'
            max='10000'
            step='5'
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
```
