```jsx
<Formik
  initialValues={{
    testFiled: 'Data was submitted'
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form styled='min'>

      <SubmitBtn />

    </Form>
  )}
/>
```
