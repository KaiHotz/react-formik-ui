See [ReaJS Datepicker documentation](https://github.com/Hacker0x01/react-datepicker/blob/master/docs/datepicker.md) for a list of additional props
##### Default
```jsx
<Formik
  initialValues={{
    dateExample1: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form>

      <Datepicker
        name='dateExample1'
        label='Select a date'
      />
      <SubmitBtn />
    </Form>
  )}
/>
```

##### Structured
```jsx
<Formik
  initialValues={{
    dateExample2: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form structured>

      <Datepicker
        name='dateExample2'
        label='Select a date'
      />
      <SubmitBtn />
    </Form>
  )}
/>
```

##### Themed
```jsx
<Formik
  initialValues={{
    dateExample3: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form themed>

      <Datepicker
        name='dateExample3'
        label='Select a date'
      />
      <SubmitBtn />
    </Form>
  )}
/>
```

##### Themed with placeholder
```jsx
<Formik
  initialValues={{
    dateExample4: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form themed>

      <Datepicker
        name='dateExample4'
        label='Select a date'
        placeholder='DD.MM.YYYYY'
        dateFormat='dd.MM.yyyy'
      />
      <SubmitBtn />
    </Form>
  )}
/>
```

##### Themed and disabled
```jsx
<Formik
  initialValues={{
    dateExample5: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form themed>

      <Datepicker
        name='dateExample5'
        label='Select a date'
        disabled
      />
      <SubmitBtn />
    </Form>
  )}
/>
```

##### Themed disabled with placeholder
```jsx
<Formik
  initialValues={{
    dateExample6: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form themed>

      <Datepicker
        name='dateExample6'
        label='Select a date'
        placeholder='DD.MM.YYYYY'
        dateFormat='dd.MM.yyyy'
        disabled
      />
      <SubmitBtn />
    </Form>
  )}
/>
```



