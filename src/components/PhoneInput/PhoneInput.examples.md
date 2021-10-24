See [React-PhoneNr-Input](https://github.com/KaiHotz/React-PhoneNr-Input) for a list of additional props and configurations

##### Default / Structured
```jsx
import { Formik } from 'formik'
import { Form, PhoneInput } from 'react-formik-ui';

<Formik
  initialValues={{
    phoneNr1: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
    {({values}) => {
      return (
        <Form>
          <PhoneInput
            name='phoneNr1'
            label='Phone Nr.'
            placeholder='+1 702 123 4567'
            hint='This is a hint'
          />
          <fieldset style={{maxWidth: 250, minHeight: 32, marginTop: 20}}>
            <legend>Preview of the returned Value:</legend>
            <pre style={{margin: 0}}>
              {values.phoneNr1 && JSON.stringify(values.phoneNr1, null, 2)}
            </pre>
          </fieldset>
        </Form>
      )
    }}
</Formik>
```

##### with country meta data
```jsx
import { Formik } from 'formik'
import { Form, PhoneInput } from 'react-formik-ui';

<Formik
  initialValues={{
    phoneData: {
      phoneNumber: '',
      country: {
        name: '',
        iso2: ''
      }
    }
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
    {({values}) => {
      return (
        <Form>
          <PhoneInput
            name='phoneData'
            label='Phone Nr.'
            placeholder='+1 702 123 4567'
            hint='This is a hint'
            withCountryMeta
          />
          <fieldset style={{maxWidth: 250, minHeight: 32, marginTop: 20}}>
            <legend>Preview of the returned Value:</legend>
            <pre style={{margin: 0}}>
              {values.phoneData && JSON.stringify(values.phoneData, null, 2)}
            </pre>
          </fieldset>
        </Form>
      )
    }}
</Formik>
```


##### With Default Country
```js
import { Formik } from 'formik'
import { Form, PhoneInput } from 'react-formik-ui';

<Formik
  initialValues={{
    phoneNr2: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
  <Form>

    <PhoneInput
      name='phoneNr2'
      label='Phone Nr.'
      hint='This is a hint'
      defaultCountry='DE'
    />

  </Form>
</Formik>
```

##### With Preferred Countries
```js
import { Formik } from 'formik'
import { Form, PhoneInput } from 'react-formik-ui';

<Formik
  initialValues={{
    phoneNr3: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
  <Form>

    <PhoneInput
      name='phoneNr3'
      label='Phone Nr.'
      hint='This is a hint'
      preferredCountries={['CL', 'AR', 'BR', 'CO']}
    />

  </Form>
</Formik>
```

##### With Regions
```js
import { Formik } from 'formik'
import { Form, PhoneInput } from 'react-formik-ui';

<Formik
  initialValues={{
    phoneNr4: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
  <Form>

    <PhoneInput
      name='phoneNr4'
      label='Phone Nr.'
      hint='This is a hint'
      regions={['carribean', 'oceania']}
    />

  </Form>
</Formik>
```

##### National Phone Nr. Format
```jsx
import { Formik } from 'formik'
import { Form, PhoneInput } from 'react-formik-ui';

<Formik
  initialValues={{
    phoneNr5: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
  <Form>

    <PhoneInput
      name='phoneNr5'
      label='Phone Nr.'
      format='NATIONAL'
      defaultCountry='US'
      placeholder='(555) 123-4567'
      hint='This is a hint'
    />

  </Form>
</Formik>
```

##### Themed
```jsx
import { Formik } from 'formik'
import { Form, PhoneInput } from 'react-formik-ui';

<Formik
  initialValues={{
    phoneNr6: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
  <Form styling='theme'>

    <PhoneInput
      name='phoneNr6'
      label='Phone Nr.'
      hint='This is a hint'
    />

  </Form>
</Formik>
```

##### Themed National Phone Nr. Format
```jsx
import { Formik } from 'formik'
import { Form, PhoneInput } from 'react-formik-ui';

<Formik
  initialValues={{
    phoneNr7: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
  <Form styling='theme'>

    <PhoneInput
      name='phoneNr7'
      label='Phone Nr.'
      format='NATIONAL'
      defaultCountry='US'
      hint='This is a hint'
    />

  </Form>
</Formik>
```






