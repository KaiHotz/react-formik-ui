##### Default
```jsx
<Formik
  initialValues={{
    checkboxExample1: false
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form>

      <Checkbox
        name='checkboxExample1'
        label='Checkbox label'
        text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
    />

    </Form>
  )}
/>


```
##### Structured
```jsx
<Formik
  initialValues={{
    checkboxExample2: false
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form structured>

      <Checkbox
        name='checkboxExample2'
        label='Checkbox label'
        text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
    />

    </Form>
  )}
/>
```


##### Themed
```jsx
<Formik
  initialValues={{
    checkboxExample3: false
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form themed>

      <Checkbox
        name='checkboxExample3'
        label='Checkbox label'
        text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
    />

    </Form>
  )}
/>
```

##### Themed disabled
```jsx
<Formik
  initialValues={{
    checkboxExample4: false
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form themed>

      <Checkbox
        name='checkboxExample4'
        label='Checkbox label'
        text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
        disabled
    />

    </Form>
  )}
/>
```


##### Themed disabled and checked
```jsx
<Formik
  initialValues={{
    checkboxExample5: true
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form themed>

      <Checkbox
        name='checkboxExample5'
        label='Checkbox label'
        text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
        disabled
    />

    </Form>
  )}
/>
```



