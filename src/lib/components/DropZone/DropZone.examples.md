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
        label='Image upload'
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
        label='Image upload'
        disabled
      />

    </Form>
  )}
/>
```
