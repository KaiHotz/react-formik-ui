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

##### Default / Structured / Themed, with Clear Button
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
        placeholder='Drop some files here'
        withClearButton
      />

    </Form>
  )}
/>
```

##### Default / Structured / Themed, with Single file upload
```jsx
import { Formik } from 'formik'
import { Form, DropZone } from 'react-formik-ui';

<Formik
  initialValues={{
    files3: []
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form>

      <DropZone
        name='files3'
        label='File upload'
        placeholder='Drop or Select a file here'
        multiple={false}
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
    files4: []
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form>

      <DropZone
        fileInfo
        name='files4'
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
    files5: []
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form>

      <DropZone
        name='files5'
        label='File upload'
        disabled
      />

    </Form>
  )}
/>
```
