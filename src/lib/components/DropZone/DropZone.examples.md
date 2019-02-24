##### Default / Structured / Themed
```jsx
import { Formik } from 'formik'
import { Form, DropZone } from 'react-formik-ui';

<Formik
  initialValues={{
    files1: []
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form>

      <DropZone
        name='files1'
        label='File upload'
        placeholder='Drop some files here'
      />

    </Form>
  )}
/>
```

##### Default / Structured / Themed, with file information on accepted and rejected files
```jsx
import { Formik } from 'formik'
import { Form, DropZone } from 'react-formik-ui';

<Formik
  initialValues={{
    files2: []
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form>

      <DropZone
        fileInfo
        name='files2'
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
    files2: []
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form>

      <DropZone
        name='files2'
        label='File upload'
        disabled
      />

    </Form>
  )}
/>
```
