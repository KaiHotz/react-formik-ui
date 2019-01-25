```jsx
<Formik
  initialValues={{
    toggleBtn: false
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form styled='min'>

      <Toggle name='toggleSwitch'/>

    </Form>
  )}
/>
```
