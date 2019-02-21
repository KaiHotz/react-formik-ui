#### Default / Structured / Themed
```jsx
import { Formik } from 'formik'
import { Form, SubmitBtn } from 'react-formik-ui';

<Formik
  initialValues={{
    testFiled: 'Data was submitted'
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form>

      <SubmitBtn />

    </Form>
  )}
/>
```
