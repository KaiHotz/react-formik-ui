##### Default / Structured / Themed
```jsx
import { Formik } from 'formik'
import { Form, DropZone } from 'react-formik-ui';

<Formik
  initialValues={{
    files: []
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form>

      <DropZone
        name='files'
        label='File upload'
        placeholder='Drop some files here'
      />

    </Form>
  )}
/>
```


##### Disabled
```jsx
import { Formik } from 'formik'
import { Form, DropZone } from 'react-formik-ui';

<Formik
  initialValues={{
    files: []
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form>

      <DropZone
        name='files'
        label='File upload'
        disabled
      />

    </Form>
  )}
/>
```
