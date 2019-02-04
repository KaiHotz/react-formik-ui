##### Default / Structured / Themed
```jsx
<Formik
  initialValues={{
    myAutocomplete: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form themed>

      <Autocomplete
        name="myAutocomplete"
        suggestions={[
          "Alligator",
          "Bask",
          "Crocodilian",
          "Death Roll",
          "Eggs",
          "Jaws",
          "Reptile",
          "Solitary",
          "Tail",
          "Wetlands"
        ]}
      />

    </Form>
  )}
/>
```
