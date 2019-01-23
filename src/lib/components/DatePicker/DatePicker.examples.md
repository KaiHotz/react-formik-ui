```jsx
<Formik
  initialValues={{
    date: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form styled>

      <Datepicker
        name='date'
        label='Select a date'
      />
      <SubmitBtn />
    </Form>
  )}
/>
```

##### with Placeholder and custom Date Format
```jsx
<Formik
  initialValues={{
    date: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form styled>

      <Datepicker
        name='date'
        label='Select a date'
        placeholder='DD.MM.YYYYY'
        dateFormat='dd.MM.yyyy'
      />
      <SubmitBtn />
    </Form>
  )}
/>
```

##### with Populated Data
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
      <SubmitBtn />
    </Form>
  )}
/>
```


