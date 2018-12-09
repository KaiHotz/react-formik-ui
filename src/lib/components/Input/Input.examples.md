```jsx
<Formik
  initialValues={{
    nameField: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form styled>

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
