#### Default / Structured / Themed

```jsx
import { Formik } from 'formik'
import { Form, Button } from 'react-formik-ui';

<Formik
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form>

      <Button onClick={(() => alert('Button clicked'))}>
        Click me
      </Button>

    </Form>
  )}
/>
```
