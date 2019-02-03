##### Default
```jsx
<Formik
  initialValues={{
    textFieldExample1: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form>

      <Input
        name='textFieldExample1'
        label='Input field label'
        hint='This is a hint'
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
    textFieldExample2: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form structured>

      <Input
        name='textFieldExample2'
        label='Input field label'
        hint='This is a hint'
      />

    </Form>
  )}
/>
```

##### Themed
```jsx
<Formik
  initialValues={{
    textFieldExample3: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form themed>

      <Input
        name='textFieldExample3'
        label='Input field label'
        hint='This is a hint'
      />

    </Form>
  )}
/>
```

###### Themed with placeholder
```jsx
<Formik
  initialValues={{
    textFieldExample4: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form themed>

      <Input
        name='textFieldExample4'
        label='Input field label'
        placeholder='Your Name'
        hint='This is a hint'
        required
      />

    </Form>
  )}
/>
```

###### Themed and disabled
```jsx
<Formik
  initialValues={{
    textFieldExample5: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form themed>

      <Input
        name='textFieldExample5'
        label='Text Input'
        hint='This field is disabled'
        disabled
      />

    </Form>
  )}
/>
```


