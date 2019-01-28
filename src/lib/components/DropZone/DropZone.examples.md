```jsx
<Formik
  initialValues={{
    files: []
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form structured>

      <DropZone
        name='files'
        label='Image upload'
      />

    </Form>
  )}
/>
```
