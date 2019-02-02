#### All together with structured style
```jsx
const onSubmit = data => (alert(JSON.stringify(data)));

const  getSchema = () => {
  return yup.object().shape({
    salutationExample: yup
      .string(),
    nameExample: yup
      .string()
      .required('Name is required'),
    emailExample: yup
      .string()
      .email('Wrong format')
      .required('Email is required'),
    birthDayExample: yup
       .date(),
    maritalStatusExample: yup
      .string()
      .nullable(),
     driverLicenseExample: yup
       .boolean(),
     petsExample: yup
       .boolean(),
     filesExample: yup
       .array()
       .required('Image is required'),
     additionalInfoExample: yup
       .string(),
     termsAndConitionsExample: yup
       .boolean(),
  });
};

<Formik
  initialValues={{
    salutationExample: 'Mr',
    nameExample: '',
    emailExample: '',
    birthDayExample: '',
    maritalStatusExample: '',
    driverLicenseExample: false,
    petsExample: false,
    filesExample: [],
    additionalInfoExample: '',
    termsAndConitionsExample: false,
  }}
  validationSchema={getSchema}
  onSubmit={onSubmit}
  render={({ values }) => {
  return (
    <Form structured>
      <fieldset>
        <legend>Complete Form Example</legend>

          <Radio
            name='salutationExample'
            label='Salutation'
            options={[
              { value: 'Mr', label: 'Mr.' },
              { value: 'Mrs', label: 'Mrs.' },
              { value: 'Ms', label: 'Ms.' }
            ]}
          />

          <Input
            name='nameExample'
            label='Name'
            required
          />

          <Input
            name='emailExample'
            label='Email'
            placeholder='foo@bar.com'
            hint='Please enter your Email'
            required
          />

          <Datepicker
            name='birthDayExample'
            label='Birthday'
            dateFormat='dd.MM.yyyy'
            placeholder='dd.mm.yyyy'
            hint='Please enter your birth date'
          />

          <Select
            name='maritalStatusExample'
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
            <Toggle name='driverLicenseExample' />
          </div>

          <DropZone
            name='filesExample'
            label='File upload'
            placeholder='Drop some files here'
          />

          <Textarea
            name='additionalInfoExample'
            label='Aditional information'
            hint='this is optional'
          />

          <Checkbox
            name='termsAndConitionsExample'
            label='Terms and Conditions'
            text='Click to accept the terms and conditions'
          />

          <SubmitBtn disabled={!values.termsAndConitionsExample} />
          <Button onClick={(() => alert('Cancel'))}>Cancel</Button>
        </fieldset>
      </Form>
    );
  }}
/>
```


#### All together with Themed style
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
       .date()
       .required('Is required'),
    maritalStatus: yup
      .string()
      .required('Is required')
      .nullable(),
    driverLicense: yup
      .boolean(),
    pets: yup
      .boolean(),
    files: yup
      .array()
      .required('Image is required'),
    additionalInfo: yup
      .string()
      .required('Is required'),
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
    files: [],
    additionalInfo: '',
    termsAndConitions: false,
  }}
  validationSchema={getSchema}
  onSubmit={onSubmit}
  render={({ values }) => {
  return (
    <Form themed>
      <fieldset>
        <legend>Complete Form Example</legend>

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
            hint='This is a hint message'
            required
          />

          <Input
            name='email'
            label='Email'
            placeholder='foo@bar.com'
            hint='Please enter your birth date'
            required
          />

          <Datepicker
            name='birthDay'
            label='Birthday'
            dateFormat='dd.MM.yyyy'
            placeholder='dd.mm.yyyy'
            hint='Please enter your birth date'
            required
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
            required
          />

          <div style={{marginBottom: '15px'}}>
            <div style={{marginBottom: '10px'}}>
              {`Do you have a drivers license ? ${values.driverLicense ? 'Yes' : 'No'}`}
            </div>
            <Toggle name='driverLicense' />
          </div>

          <DropZone
            name='files'
            label='File upload'
            placeholder='Drop some files here'
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
