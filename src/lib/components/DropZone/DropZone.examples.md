```jsx
<Formik
  initialValues={{
    files: []
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form styled>

      <DropZone
        name='files'
        label='Image upload'
      />

    </Form>
  )}
/>
```
