#### Default / Structured / Themed
```jsx
<Formik
  initialValues={{
    toggleSwitch: false
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form>

      <Toggle name='toggleSwitch'/>

    </Form>
  )}
/>
```
