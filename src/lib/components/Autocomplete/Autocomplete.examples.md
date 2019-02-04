##### Default
```jsx
<Formik
  initialValues={{
    myAutocomplete1: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form>

      <Autocomplete
        label='Search'
        name="myAutocomplete1"
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

##### Structured
```jsx
<Formik
  initialValues={{
    myAutocomplete2: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form structured>

      <Autocomplete
        name="myAutocomplete2"
        label='Search'
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

##### Default / Structured / Themed
```jsx
<Formik
  initialValues={{
    myAutocomplete3: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form themed>

      <Autocomplete
        name="myAutocomplete3"
        label='Search'
        suggestions={[
          "Alligator",
          "alabama",
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
