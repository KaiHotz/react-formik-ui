##### Default
```jsx
<Formik
  initialValues={{
    textAreaExample1: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form>

      <Textarea
        name='textAreaExample1'
        label='Write a comment'
      />

    </Form>
  )}
/>
```

##### Structured
```jsx
<Formik
  initialValues={{
    textAreaExample2: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form structured>

      <Textarea
        name='textAreaExample2'
        label='Write a comment'
      />

    </Form>
  )}
/>
```

##### Themed
```jsx
<Formik
  initialValues={{
    textAreaExample3: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form themed>

      <Textarea
        name='textAreaExample3'
        label='Write a comment'
      />

    </Form>
  )}
/>
```

##### Themed with placeholder
```jsx
<Formik
  initialValues={{
    textAreaExample3: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form themed>

      <Textarea
        name='textAreaExample3'
        label='Write a comment'
        placeholder='Write some text here'
      />

    </Form>
  )}
/>
```


##### Themed disabled
```jsx
<Formik
  initialValues={{
    textAreaExample3: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form themed>

      <Textarea
        name='textAreaExample3'
        label='Write a comment'
        disabled
      />

    </Form>
  )}
/>
```

