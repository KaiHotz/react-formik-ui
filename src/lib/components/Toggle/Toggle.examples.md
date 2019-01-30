#### Default / Structured / Themed
```jsx
<Formik
  initialValues={{
    toggleBtn: false
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form>

      <Toggle name='toggleSwitch'/>

    </Form>
  )}
/>
```
