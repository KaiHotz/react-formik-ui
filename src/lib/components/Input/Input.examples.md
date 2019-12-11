##### Default

```jsx
import { Formik } from 'formik'
import { Form, Input, SubmitBtn } from 'react-formik-ui';

<Formik
  initialValues={{
    textFieldExample1: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
  <Form>

    <Input
      name='textFieldExample1'
      label='Input field label'
      hint='This is a hint'
    />

    <SubmitBtn />
  </Form>
</Formik>
```

##### Structured

```jsx
import { Formik } from 'formik'
import { Form, Input, SubmitBtn } from 'react-formik-ui';

<Formik
  initialValues={{
    textFieldExample2: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
  <Form mode='structured'>

    <Input
      name='textFieldExample2'
      label='Input field label'
      hint='This is a hint'
    />

  </Form>
</Formik>
```

##### Themed

```jsx
import { Formik } from 'formik'
import { Form, Input, SubmitBtn } from 'react-formik-ui';

<Formik
  initialValues={{
    textFieldExample3: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
  <Form mode='themed'>

    <Input
      name='textFieldExample3'
      label='Input field label'
      hint='This is a hint'
    />

  </Form>
</Formik>
```

###### Themed with placeholder

```jsx
import { Formik } from 'formik'
import { Form, Input, SubmitBtn } from 'react-formik-ui';

<Formik
  initialValues={{
    textFieldExample4: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
  <Form mode='themed'>

    <Input
      name='textFieldExample4'
      label='Input field label'
      placeholder='Your Name'
      hint='This is a hint'
      required
    />

  </Form>
</Formik>
```

###### Themed and disabled

```jsx
import { Formik } from 'formik'
import { Form, Input, SubmitBtn } from 'react-formik-ui';

<Formik
  initialValues={{
    textFieldExample5: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
  <Form mode='themed'>

    <Input
      name='textFieldExample5'
      label='Text Input'
      hint='This field is disabled'
      disabled
    />

  </Form>
</Formik>
```
