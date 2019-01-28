```jsx
<Formik
  initialValues={{
    toggleBtn: false
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form structured>

      <Toggle name='toggleSwitch'/>

    </Form>
  )}
/>
```
