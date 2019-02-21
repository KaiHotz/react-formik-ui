#### Default / Structured / Themed
```jsx
import { Formik } from 'formik'
import { Form, Toggle } from 'react-formik-ui';

<Formik
  initialValues={{
    toggleSwitch: false
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form>

      <Toggle name='toggleSwitch'/>

    </Form>
  )}
/>
```
