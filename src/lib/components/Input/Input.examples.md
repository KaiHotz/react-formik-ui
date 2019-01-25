##### with no styling

```jsx
<Formik
  initialValues={{
    nameField: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form>

      <Input
        name='nameField'
        label='Input field label'
        placeholder='Your Name'
        hint='This is a hint'
        required
      />
      <SubmitBtn />
    </Form>
  )}
/>
```


##### with minimum styling
```jsx
const  getsecondSchema = () => {
  return yup.object().shape({
    kaisName: yup
      .string()
      .required('Name is required'),
  });
};

<Formik
  initialValues={{
    kaisName: ''
  }}
  validationSchema={getsecondSchema}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form styled='min'>

      <Input
        name='kaisName'
        label='Input field label'
        placeholder='Your Name'
        hint='This is a hint'
        required
      />

    </Form>
  )}
/>
```


##### with UI style

```jsx
<Formik
  initialValues={{
    uiNameField: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form styled='ui'>

      <Input
        name='uiNameField'
        label='Input field label'
        hint='This is a hint'
      />

    </Form>
  )}
/>
```

###### with UI style and placeholder

```jsx
<Formik
  initialValues={{
    myName: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form styled='ui'>

      <Input
        name='myName'
        label='Input field label'
        placeholder='Your Name'
        hint='This is a hint'
        required
      />

    </Form>
  )}
/>
```

###### with UI style as password field

```jsx
<Formik
  initialValues={{
    mayPassword: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form styled='ui'>

      <Input
        name='mayPassword'
        type='password'
        label='Psssword'
        hint='This is a password field'
      />

    </Form>
  )}
/>
```

###### with UI style as password field and password strength meter

```jsx
const  getSchema = () => {
  return yup.object().shape({
    uiPassword: yup
      .string()
      .required('Password is required'),
  });
};

<Formik
  initialValues={{
    uiPassword: ''
  }}
  validationSchema={getSchema}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form styled='ui'>

      <Input
        name='uiPassword'
        type='password'
        label='Psssword'
        withStrengthMeter
        autoComplete="off"
        hint='This is a password field with strength meter'
      />

      <SubmitBtn />

    </Form>
  )}
/>
```




