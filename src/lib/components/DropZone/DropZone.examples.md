##### Default / Structured / Themed
```jsx
<Formik
  initialValues={{
    files: []
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form>

      <DropZone
        name='files'
        label='File upload'
        placeholder='Drop some files here'
      />

    </Form>
  )}
/>
```


##### Disabled
```jsx
<Formik
  initialValues={{
    files: []
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form>

      <DropZone
        name='files'
        label='File upload'
        disabled
      />

    </Form>
  )}
/>
```
