##### Default
```jsx
import { Formik } from 'formik'
import { Form, Select } from 'react-formik-ui';

<Formik
  initialValues={{
    selectExample1: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form>

      <Select
        name='selectExample1'
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

##### Structured
```jsx
import { Formik } from 'formik'
import { Form, Select } from 'react-formik-ui';

<Formik
  initialValues={{
    selectExample2: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form structured>

      <Select
        name='selectExample2'
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


##### Themed
```jsx
import { Formik } from 'formik'
import { Form, Select } from 'react-formik-ui';

<Formik
  initialValues={{
    selectExample3: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form themed>

      <Select
        name='selectExample3'
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


##### Themed and disabled
```jsx
import { Formik } from 'formik'
import { Form, Select } from 'react-formik-ui';

<Formik
  initialValues={{
    selectExample4: '1'
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form themed>

      <Select
        name='selectExample4'
        label='Select options label'
        placeholder='Select an Option'
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

