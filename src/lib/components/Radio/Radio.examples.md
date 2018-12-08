```jsx
<Formik
  initialValues={{
    radioOptions: ''
  }}
  render={() => (
    <Form styled>

      <Radio
        name='radioOptions'
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
