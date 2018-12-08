```jsx
const onSubmit = data => (alert(JSON.stringify(data)));

<Formik
  initialValues={{
    testFiled: 'Data was submitted'
  }}
  onSubmit={onSubmit}
  render={() => (
    <Form styled>

      <SubmitBtn />

    </Form>
  )}
/>
```
