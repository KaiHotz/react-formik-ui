##### Default / Structured / Themed

```jsx
import { Formik } from 'formik'
import { Form, DropZone } from 'react-formik-ui';

<Formik
  initialValues={{
    files1: []
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
  <Form>

    <DropZone
      name='files1'
      label='File upload'
      placeholder='Try dropping some files here, or click to select files to upload.'
    />

  </Form>
</Formik>
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
>
  <Form>

    <DropZone
      name='files2'
      label='File upload'
      placeholder='Try dropping some files here, or click to select files to upload.'
      withClearButton
    />

  </Form>
</Formik>
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
>
  <Form>

    <DropZone
      name='files3'
      label='File upload'
      placeholder='Try dropping some files here, or click to select files to upload.'
      multiple={false}
    />

  </Form>
</Formik>
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
>
  <Form>

    <DropZone
      fileInfo
      name='files4'
      label='File upload'
      placeholder='Try dropping some files here, or click to select files to upload.'
    />

  </Form>
</Formik>
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
>
  <Form>

    <DropZone
      name='files5'
      label='File upload'
      placeholder='Try dropping some files here, or click to select files to upload.'
      disabled
    />

  </Form>
</Formik>
```
