#### Form Example structured
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


#### Form example Themed
```jsx
const onSubmit = data => (alert(JSON.stringify(data)));

const  getSchema = () => {
  return yup.object().shape({
    salutation: yup
      .string(),
    fullName: yup
      .string()
      .required('Name is required'),
    email: yup
      .string()
      .email('Wrong format')
      .required('Email is required'),
    birthDay: yup
       .date()
       .required('Is required'),
    title: yup
      .string()
      .required('Is required')
      .nullable(),
    driverLicense: yup
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
    fullName: '',
    email: '',
    birthDay: '',
    title: '',
    driverLicense: false,
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
          <div style={{padding: '0 10px'}}>
            <Radio
              inline
              name='salutation'
              label='Salutation'
              options={[
                { value: 'Mr', label: 'Mr.' },
                { value: 'Mrs', label: 'Mrs.' },
                { value: 'Ms', label: 'Ms.' }
              ]}
            />
          </div>

          <div style={{display: 'flex', 'justify-content': 'flex-start'}}>
            <Input
              style={{'width': '50%', padding: '0 10px'}}
              name='fullName'
              label='Full name'
              hint='This is a hint message'
              required
            />

            <Input
              style={{'width': '50%', padding: '0 10px'}}
              name='email'
              label='Email'
              placeholder='foo@bar.com'
              hint='Please enter your birth date'
              required
            />
          </div>

          <div style={{display: 'flex', 'justify-content': 'flex-start', 'align-items': 'flex-start'}}>
            <Datepicker
              style={{'width': '30%', padding: '0 10px'}}
              name='birthDay'
              label='Birthday'
              dateFormat='dd.MM.yyyy'
              placeholder='dd.mm.yyyy'
              hint='Please enter your birth date'
              required
            />

            <Select
              style={{'width': '30%', padding: '0 10px'}}
              name='title'
              label='Title'
              placeholder='Select an Option'
              options={[
                { value: '1', label: 'Option 1' },
                { value: '2', label: 'Option 2' },
                { value: '3', label: 'Option 3' },
                { value: '4', label: 'Option 4' }
              ]}
              required
            />

            <div style={{marginBottom: '15px', padding: '0 10px'}}>
              <div style={{marginBottom: '10px'}}>
                {`Do you have a drivers license ? ${values.driverLicense ? 'Yes' : 'No'}`}
              </div>
              <Toggle name='driverLicense' style={{display: 'flex', 'justify-content': 'center'}}/>
            </div>
          </div>

          <div style={{padding: '0 10px'}}>
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
          </div>
        </fieldset>
      </Form>
    );
  }}
/>
```
