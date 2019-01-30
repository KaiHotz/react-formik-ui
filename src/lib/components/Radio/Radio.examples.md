##### Default
```jsx
<Formik
  initialValues={{
    radioExample1: '2'
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form>

      <Radio
        name='radioExample1'
        label='Radio options label'
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' }
        ]}
      />

    </Form>
  )}
/>
```

##### Structured
```jsx
<Formik
  initialValues={{
    radioExample2: '2'
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form structured>

      <Radio
        name='radioExample2'
        label='Radio options label'
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' }
        ]}
      />

    </Form>
  )}
/>
```

##### Themed
```jsx
<Formik
  initialValues={{
    radioExample3: '2'
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form themed>

      <Radio
        name='radioExample3'
        label='Radio options label'
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' }
        ]}
      />

    </Form>
  )}
/>
```

##### Themed and disabled
```jsx
<Formik
  initialValues={{
    radioExample4: '2'
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form themed>

      <Radio
        name='radioExample4'
        label='Radio options label'
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' }
        ]}
        disabled
      />

    </Form>
  )}
/>
```


