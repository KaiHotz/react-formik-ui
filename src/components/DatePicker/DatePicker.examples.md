See [ReactJS DatePicker documentation](https://github.com/Hacker0x01/react-DatePicker/blob/master/docs/DatePicker.md) for a list of additional props and configurations

##### Default

```jsx
import { Formik } from 'formik'
import { Form, DatePicker, SubmitBtn } from 'react-formik-ui';

<Formik
  initialValues={{
    dateExample1: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
  <Form>

    <DatePicker
      name='dateExample1'
      label='Select a date'
    />

    <SubmitBtn text="Submit"/>
  </Form>
</Formik>
```

##### Structured

```jsx
import { Formik } from 'formik'
import { Form, DatePicker, SubmitBtn } from 'react-formik-ui';

<Formik
  initialValues={{
    dateExample2: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
  <Form styling='structure'>

    <DatePicker
      name='dateExample2'
      label='Select a date'
    />

    <SubmitBtn text="Submit"/>
  </Form>
</Formik>
```

##### Structured Required

```jsx
import { Formik } from 'formik'
import * as yup from 'yup'
import { Form, DatePicker, SubmitBtn } from 'react-formik-ui';

const getSchema = () => {
  return yup.object().shape({
    dateExampleRequired: yup
      .date()
      .required('Is required'),
  });
};

<Formik
  initialValues={{
    dateExampleRequired: ''
  }}
  validationSchema={getSchema}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
  <Form styling='structure'>

    <DatePicker
      name='dateExampleRequired'
      label='Select a date'
      dateFormat='dd.MM.yyyy'
      placeholder='dd.mm.yyyy'
      hint='Please enter / select a date'
      required
    />

    <SubmitBtn text="Submit"/>
  </Form>
</Formik>
```


##### with Keyboard Navigation enabled

```jsx
import { Formik } from 'formik'
import { Form, DatePicker, SubmitBtn } from 'react-formik-ui';

<Formik
  initialValues={{
    dateExample8: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
  <Form styling='structure'>

    <DatePicker
      name='dateExample8'
      label='Select a date'
      disabledKeyboardNavigation={false}
    />

    <SubmitBtn text="Submit"/>
  </Form>
</Formik>
```

##### Themed

```jsx
import { Formik } from 'formik'
import { Form, DatePicker, SubmitBtn } from 'react-formik-ui';

<Formik
  initialValues={{
    dateExample3: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
  <Form styling='theme'>
    <DatePicker
      name='dateExample3'
      label='Select a date'
      hint='DD.MM.YYYY'
    />

    <SubmitBtn text="Submit"/>
  </Form>
</Formik>
```

##### Themed with placeholder

```jsx
import { Formik } from 'formik'
import { Form, DatePicker, SubmitBtn } from 'react-formik-ui';

<Formik
  initialValues={{
    dateExample4: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
  <Form styling='theme'>

    <DatePicker
      name='dateExample4'
      label='Select a date'
      placeholder='DD.MM.YYYYY'
      dateFormat='dd.MM.yyyy'
    />

    <SubmitBtn text="Submit"/>
  </Form>
</Formik>
```

##### Themed with time picker

```jsx
import { Formik } from 'formik'
import { Form, DatePicker, SubmitBtn } from 'react-formik-ui';

<Formik
  initialValues={{
    dateExample5: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
  <Form styling='theme'>

    <DatePicker
      name='dateExample5'
      label='Select a date and time'
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={30}
      dateFormat="dd.MM.yyyy hh:mm aa"
      timeCaption="time"
      minDate={new Date()}
    />

    <SubmitBtn text="Submit"/>
  </Form>
</Formik>
```

##### Themed and disabled

```jsx
import { Formik } from 'formik'
import { Form, DatePicker, SubmitBtn } from 'react-formik-ui';

<Formik
  initialValues={{
    dateExample6: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
  <Form styling='theme'>

    <DatePicker
      name='dateExample6'
      label='Select a date'
      disabled
    />

    <SubmitBtn text="Submit"/>
  </Form>
</Formik>
```

##### Themed disabled with placeholder

```jsx
import { Formik } from 'formik'
import { Form, DatePicker, SubmitBtn } from 'react-formik-ui';

<Formik
  initialValues={{
    dateExample7: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
  <Form styling='theme'>

    <DatePicker
      name='dateExample7'
      label='Select a date'
      placeholder='DD.MM.YYYYY'
      dateFormat='dd.MM.yyyy'
      disabled
    />

    <SubmitBtn text="Submit"/>
  </Form>
</Formik>
```
