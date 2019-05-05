##### Default
```jsx
import { Formik } from 'formik'
import { Form, Radio } from 'react-formik-ui';

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

##### Default inline
```jsx
import { Formik } from 'formik'
import { Form, Radio } from 'react-formik-ui';

<Formik
  initialValues={{
    radioExample2: '2'
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form>

      <Radio
        inline
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


##### Structured
```jsx
import { Formik } from 'formik'
import { Form, Radio } from 'react-formik-ui';

<Formik
  initialValues={{
    radioExample3: '2'
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form mode='structured'>

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


##### Structured inline
```jsx
import { Formik } from 'formik'
import { Form, Radio } from 'react-formik-ui';

<Formik
  initialValues={{
    radioExample4: '2'
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form mode='structured'>

      <Radio
        inline
        name='radioExample4'
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
import { Formik } from 'formik'
import { Form, Radio } from 'react-formik-ui';

<Formik
  initialValues={{
    radioExample5: '2'
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form mode='themed'>

      <Radio
        name='radioExample5'
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

##### Themed inline
```jsx
import { Formik } from 'formik'
import { Form, Radio } from 'react-formik-ui';

<Formik
  initialValues={{
    radioExample6: '2'
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form mode='themed'>

      <Radio
        inline
        name='radioExample6'
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
import { Formik } from 'formik'
import { Form, Radio } from 'react-formik-ui';

<Formik
  initialValues={{
    radioExample7: '2'
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form mode='themed'>

      <Radio
        name='radioExample7'
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


