For a list af all available props please refere to the [ReaJS Datepicker documentation](https://github.com/Hacker0x01/react-datepicker/blob/master/docs/datepicker.md)

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


