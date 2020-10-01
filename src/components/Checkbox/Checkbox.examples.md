##### Default

```jsx
import { Formik } from 'formik'
import { Form, Checkbox } from 'react-formik-ui';

<Formik
  initialValues={{
    checkboxExample1: false
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
  <Form>

    <Checkbox
      name='checkboxExample1'
      label='Checkbox label'
      text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
    />

  </Form>
</Formik>
```

##### Structured

```jsx
import { Formik } from 'formik'
import { Form, Checkbox } from 'react-formik-ui';

<Formik
  initialValues={{
    checkboxExample2: false
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
  <Form styling='structure'>

    <Checkbox
      name='checkboxExample2'
      label='Checkbox label'
      text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
    />

  </Form>
</Formik>
```

##### Themed

```jsx
import { Formik } from 'formik'
import { Form, Checkbox } from 'react-formik-ui';

<Formik
  initialValues={{
    checkboxExample3: false
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
  <Form styling='theme'>

    <Checkbox
      name='checkboxExample3'
      label='Checkbox label'
      text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
      hint='This is a hint'
    />

  </Form>
</Formik>
```

##### Checkbox group example

```jsx
import { Formik } from 'formik'
import { Form, Checkbox } from 'react-formik-ui';

const checkBoxes = [
  { name: 'check1', label: 'Checkbox 1', text: 'Lorem ipsum dolor 1.' , value: false },
  { name: 'check2', label: 'Checkbox 2', text: 'Lorem ipsum dolor 2.', value: true },
  { name: 'check3', label: 'Checkbox 3', text: 'Lorem ipsum dolor 3.', value: false },
  { name: 'check4', label: 'Checkbox 4', text: 'Lorem ipsum dolor 4.', value: true },
];

<Formik
  initialValues={{
    ...checkBoxes.reduce((acc, {name, value }) => ({
      ...acc,
      [name]: value,
    }), {})
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
  <Form styling='theme'>
    {
      checkBoxes.map(cb => (
        <Checkbox
          key={cb.name}
          name={cb.name}
          text={cb.text}
        />
      ))
    }
  </Form>
</Formik>
```

##### Themed and disabled

```jsx
import { Formik } from 'formik'
import { Form, Checkbox } from 'react-formik-ui';

<Formik
  initialValues={{
    checkboxExample4: false
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
  <Form styling='theme'>

    <Checkbox
      name='checkboxExample4'
      label='Checkbox label'
      text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
      disabled
    />

  </Form>
</Formik>
```

##### Themed disabled and checked

```jsx
import { Formik } from 'formik'
import { Form, Checkbox } from 'react-formik-ui';

<Formik
  initialValues={{
    checkboxExample5: true
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
  <Form styling='theme'>

  <Checkbox
    name='checkboxExample5'
    label='Checkbox label'
    text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
    hint='This is a hint'
    disabled
  />

  </Form>
</Formik>
```
