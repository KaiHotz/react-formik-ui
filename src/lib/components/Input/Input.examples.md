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

    </Form>
  )}
/>
```


##### with minimum styling
```jsx
<Formik
  initialValues={{
    nameField: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form styled='min'>

      <Input
        name='nameField'
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
    nameField: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form styled='ui'>

      <Input
        name='nameField'
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
    nameField: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form styled='ui'>

      <Input
        name='nameField'
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
    password: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form styled='ui'>

      <Input
        name='password'
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
<Formik
  initialValues={{
    password: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form styled='ui'>

      <Input
        name='password'
        type='password'
        label='Psssword'
        withStrengthMeter
        autoComplete="off"
        hint='This is a password field with strength meter'
      />

    </Form>
  )}
/>
```




