```jsx
<Formik
  initialValues={{
    date: '2019-11-3'
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form styled>

      <Datepicker
        name='date'
        label='Select a date'
      />

    </Form>
  )}
/>
```
