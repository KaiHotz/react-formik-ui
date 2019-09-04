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
          { value: '3', label: 'Option 3' },
          { value: '4', label: 'Option 4' },
          { value: '5', label: 'Option 5' },
          { value: '6', label: 'Option 6' },
        ]}
      />

    </Form>
  )}
/>
```

##### Default Multiselect

*Hold down the Ctrl (windows) / Command (Mac) button to select multiple options.*

```jsx
import { Formik } from 'formik'
import { Form, Select } from 'react-formik-ui';

<Formik
  initialValues={{
    defaultMultipleSelect: ['1', '3']
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form>

      <Select
        multiple
        name='defaultMultipleSelect'
        label='Select options label'
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
          { value: '4', label: 'Option 4' },
          { value: '5', label: 'Option 5' },
          { value: '6', label: 'Option 6' },
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
    <Form mode='structured'>

      <Select
        name='selectExample2'
        label='Select options label'
        placeholder='Select an Option'
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
          { value: '4', label: 'Option 4' },
          { value: '5', label: 'Option 5' },
          { value: '6', label: 'Option 6' },
        ]}
      />

    </Form>
  )}
/>
```

##### Structured Multiselect

*Hold down the Ctrl (windows) / Command (Mac) button to select multiple options.*

```jsx
import { Formik } from 'formik'
import { Form, Select } from 'react-formik-ui';

<Formik
  initialValues={{
    structuredMultipleSelect: ['1', '3']
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form mode='structured'>

      <Select
        multiple
        name='structuredMultipleSelect'
        label='Select options label'
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
          { value: '4', label: 'Option 4' },
          { value: '5', label: 'Option 5' },
          { value: '6', label: 'Option 6' },
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
    <Form mode='themed'>

      <Select
        name='selectExample3'
        label='Select options label'
        placeholder='Select an Option'
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
          { value: '4', label: 'Option 4' },
          { value: '5', label: 'Option 5' },
          { value: '6', label: 'Option 6' },
        ]}
      />

    </Form>
  )}
/>
```

##### Themed Multiselect

*Hold down the Ctrl (windows) / Command (Mac) button to select multiple options.*

```jsx
import { Formik } from 'formik'
import { Form, Select } from 'react-formik-ui';

<Formik
  initialValues={{
    themedMultipleSelect: ['1', '3']
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form mode='themed'>

      <Select
        multiple
        name='themedMultipleSelect'
        label='Select options label'
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
          { value: '4', label: 'Option 4' },
          { value: '5', label: 'Option 5' },
          { value: '6', label: 'Option 6' },
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
    <Form mode='themed'>

      <Select
        name='selectExample4'
        label='Select options label'
        placeholder='Select an Option'
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
          { value: '4', label: 'Option 4' },
          { value: '5', label: 'Option 5' },
          { value: '6', label: 'Option 6' },
        ]}
        disabled
      />

    </Form>
  )}
/>
```
