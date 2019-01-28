```jsx
<Formik
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form structured>

      <Button onClick={(() => alert('Button clicked'))}>
        Click me
      </Button>

    </Form>
  )}
/>
```
