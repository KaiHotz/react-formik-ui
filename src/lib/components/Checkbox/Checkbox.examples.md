```jsx
<Formik
  initialValues={{
    agreement: false
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form structured>

      <Checkbox
        name='agreement'
        label='Checkbox label'
        text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
    />

    </Form>
  )}
/>
```


##### With UI style
```jsx
<Formik
  initialValues={{
    uiExample: false
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form themed>

      <Checkbox
        name='uiExample'
        label='Checkbox label'
        text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
    />

    </Form>
  )}
/>
```

