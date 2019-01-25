```jsx
<Formik
  initialValues={{
    files: []
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form styled='min'>

      <DropZone
        name='files'
        label='Image upload'
      />

    </Form>
  )}
/>
```
