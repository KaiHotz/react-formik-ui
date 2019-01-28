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
    <Form structured>

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
    <Form themed>

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
    <Form themed>

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

###### with UI style disabled

```jsx
<Formik
  initialValues={{
    anyTextInput: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form themed>

      <Input
        name='anyTextInput'
        label='Text Input'
        hint='This field is disabled'
        disabled
      />

    </Form>
  )}
/>
```


