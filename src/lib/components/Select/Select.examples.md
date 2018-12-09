```jsx
<Formik
  initialValues={{
    dropdown: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form styled>

      <Select
        name='dropdown'
        label='Select options label'
        placeholder='Select an Option'
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
