```jsx
<Formik
  initialValues={{
    files: []
  }}
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
