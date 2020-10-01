#### Default / Structured / Themed

```jsx
import { Formik } from 'formik'
import { Form, Toggle } from 'react-formik-ui';

<Formik
  initialValues={{
    toggleSwitchExample: false
  }}
>
  <Form>

    <Toggle name='toggleSwitchExample'/>

  </Form>
</Formik>
```
