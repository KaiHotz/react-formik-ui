```jsx
<Formik
  initialValues={{
    birthday: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form styled>

      <Datepicker
        name='birthDay'
        label='Birthdate'
      />

    </Form>
  )}
/>
```
