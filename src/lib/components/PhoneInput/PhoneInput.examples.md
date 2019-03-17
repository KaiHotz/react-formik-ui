### Default / Structured

```jsx
import { Formik } from 'formik'
import { Form, PhoneInput } from 'react-formik-ui';

<Formik
  initialValues={{
    phoneNr1: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form>

      <PhoneInput
        name='phoneNr1'
        label='Phone Nr.'
        placeholder='+1 702 123 4567'
        hint='This is a hint'
      />

    </Form>
  )}
/>
```

###### With Default Country
```js
import { Formik } from 'formik'
import { Form, PhoneInput } from 'react-formik-ui';

<Formik
  initialValues={{
    phoneNr2: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form>

      <PhoneInput
        name='phoneNr2'
        label='Phone Nr.'
        hint='This is a hint'
        defaultCountry='de'
      />

    </Form>
  )}
/>
```

###### With Preferred Countries
```js
import { Formik } from 'formik'
import { Form, PhoneInput } from 'react-formik-ui';

<Formik
  initialValues={{
    phoneNr3: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form>

      <PhoneInput
        name='phoneNr3'
        label='Phone Nr.'
        hint='This is a hint'
        preferredCountries={['cl', 'ar', 'br', 'co']}
      />

    </Form>
  )}
/>
```

###### With Regions
```js
import { Formik } from 'formik'
import { Form, PhoneInput } from 'react-formik-ui';

<Formik
  initialValues={{
    phoneNr4: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form>

      <PhoneInput
        name='phoneNr4'
        label='Phone Nr.'
        hint='This is a hint'
        regions={['carribean', 'oceania']}
      />

    </Form>
  )}
/>
```

###### National Phone Nr. Format
```jsx
import { Formik } from 'formik'
import { Form, PhoneInput } from 'react-formik-ui';

<Formik
  initialValues={{
    phoneNr5: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form>

      <PhoneInput
        name='phoneNr5'
        label='Phone Nr.'
        format='NATIONAL'
        defaultCountry='us'
        placeholder='(555) 123-4567'
        hint='This is a hint'
      />

    </Form>
  )}
/>
```

###### Themed
```jsx
import { Formik } from 'formik'
import { Form, PhoneInput } from 'react-formik-ui';

<Formik
  initialValues={{
    phoneNr6: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form themed>

      <PhoneInput
        name='phoneNr6'
        label='Phone Nr.'
        hint='This is a hint'
      />

    </Form>
  )}
/>
```

###### Themed National Phone Nr. Format
```jsx
import { Formik } from 'formik'
import { Form, PhoneInput } from 'react-formik-ui';

<Formik
  initialValues={{
    phoneNr7: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form themed>

      <PhoneInput
        name='phoneNr7'
        label='Phone Nr.'
        format='NATIONAL'
        defaultCountry='us'
        hint='This is a hint'
      />

    </Form>
  )}
/>
```






