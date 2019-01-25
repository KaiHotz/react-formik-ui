```jsx
<Formik
  initialValues={{
    comment: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form styled='min'>

      <Textarea
        name='comment'
        label='Write a comment'
      />

    </Form>
  )}
/>
```
