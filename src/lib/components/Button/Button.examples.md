#### Default / Structured / Themed
```jsx
<Formik
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form>

      <Button onClick={(() => alert('Button clicked'))}>
        Click me
      </Button>

    </Form>
  )}
/>
```
