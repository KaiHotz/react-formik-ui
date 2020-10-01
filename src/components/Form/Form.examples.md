#### Form Example structured

```jsx
import { Formik } from 'formik'
import * as yup from 'yup'
import { Form, Radio, Input, DatePicker, PhoneInput, Select, Toggle, DropZone, Textarea, Checkbox, SubmitBtn } from 'react-formik-ui';

const onSubmit = data => (alert(JSON.stringify(data)));

const getSchema1 = () => {
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
    phoneNrExample: yup
      .string()
      .required('Phone number is required'),
    maritalStatusExample: yup
      .string()
      .nullable(),
     driverLicenseExample: yup
       .boolean(),
     petsExample: yup
       .boolean(),
     filesExample: yup
       .array(),
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
    phoneNrExample: '',
    maritalStatusExample: '',
    driverLicenseExample: false,
    petsExample: false,
    filesExample: [],
    additionalInfoExample: '',
    checkboxExample: false,
  }}
  validationSchema={getSchema1}
  onSubmit={onSubmit}
>
{
  ({ values }) => (
    <Form styling='structure'>
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

        <DatePicker
          name='birthDayExample'
          label='Birthday'
          dateFormat='dd.MM.yyyy'
          placeholder='dd.mm.yyyy'
          hint='Please enter your birth date'
        />

        <PhoneInput
          name='phoneNrExample'
          label='Phone Nr.'
          required
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
            {`Do you have a drivers license ? ${values.driverLicenseExample ? 'Yes' : 'No'}`}
          </div>
          <Toggle name='driverLicenseExample' />
        </div>

        <DropZone
          name='filesExample'
          label='File upload'
          placeholder='Drop some files here'
          withClearButton
        />

        <Textarea
          name='additionalInfoExample'
          label='Aditional information'
          hint='this is optional'
        />

        <Checkbox
          name='checkboxExample'
          label='Terms and Conditions'
          text='Click to enable the submit button'
        />
        <br />
        <SubmitBtn disabled={!values.checkboxExample} text="Submit"/>
        <br />
        <br />
        <button onClick={(() => alert('Cancel'))}>Cancel</button>
      </fieldset>
    </Form>
  )
}
</Formik>
```

#### Form example Themed

```jsx
import { Formik } from 'formik';
import * as yup from 'yup';
import { Form, Radio, Input, DatePicker, Select, PhoneInput, Toggle, DropZone, Textarea, Checkbox, SubmitBtn } from 'react-formik-ui';

const onSubmit = data => (alert(JSON.stringify(data)));

const getSchema2 = () => {
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
    phoneNr: yup
      .string()
      .required('Phone number is required'),
    driverLicense: yup
      .boolean(),
    files: yup
      .array(),
    additionalInfo: yup
      .string(),
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
    phoneNr: '',
    title: '',
    driverLicense: false,
    files: [],
    additionalInfo: '',
    termsAndConitions: false,
  }}
  validationSchema={getSchema2}
  onSubmit={onSubmit}
>
{
  ({ values }) => (
    <Form styling='theme'>
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

        <Input
          name='fullName'
          label='Full name'
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

        <DatePicker
          name='birthDay'
          label='Birthday'
          dateFormat='dd.MM.yyyy'
          placeholder='dd.mm.yyyy'
          hint='Please enter your birth date'
          required
        />

        <Select
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

        <PhoneInput
          name='phoneNr'
          label='Phone Nr.'
          required
        />

        <div style={{marginBottom: '25px', padding: '0 10px'}}>
          <div style={{marginBottom: '10px'}}>
            {`Do you have a drivers license ? ${values.driverLicense ? 'Yes' : 'No'}`}
          </div>
          <Toggle name='driverLicense'/>
        </div>

        <div style={{padding: '0 10px'}}>
          <DropZone
            name='files'
            label='File upload'
            placeholder='Drop some files here'
            withClearButton
          />

          <Textarea
            name='additionalInfo'
            label='Aditional information'
            hint='this is optional'
          />

          <Checkbox
            name='termsAndConitions'
            label='Terms and Conditions'
            text='Click to enable the submit button'
          />

          <SubmitBtn disabled={!values.termsAndConitions} text="Submit"/>
          <br />
          <button onClick={(() => alert('Cancel'))}>Cancel</button>
        </div>
      </fieldset>
    </Form>
  )
}
</Formik>
```
