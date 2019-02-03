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


##### Themed and disabled
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


##### Themed disabled with text
```jsx
<Formik
  initialValues={{
    textAreaExample4: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form themed>

      <Textarea
        name='textAreaExample4'
        label='Write a comment'
        disabled
      />

    </Form>
  )}
/>
```


