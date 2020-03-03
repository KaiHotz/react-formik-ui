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

##### FieldArray example with Inital values

```jsx
import { Formik, FieldArray } from 'formik'
import { Form, Input, SubmitBtn } from 'react-formik-ui'
const buttonStyle = {
  cursor: 'pointer',
  margin: '7px 3px 0px',
};

<Formik
  initialValues={{
    friends: ['jared', 'ian', 'brent']
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
  {
    ({ values }) => (
      <Form mode='structured'>
        <FieldArray
          name="friends"
          render={arrayHelpers => (
            <div>
              {values.friends && values.friends.length > 0 ? (
                values.friends.map((friend, index) => (
                  <div key={index} style={{display: 'flex', alignItems: 'center'}}>
                    <Input
                      name={`friends.${index}`}
                      label={`Friend ${index + 1}`}
                    />
                    <div>
                      <button
                        style={buttonStyle}
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                      >
                        -
                      </button>
                      <button
                        style={buttonStyle}
                        type="button"
                        onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <button type="button" onClick={() => arrayHelpers.push('')}>
                  {/* show this when user has removed all friends from the list */}
                  Add a friend
                </button>
              )}
              <div>
                <SubmitBtn />
              </div>
            </div>
          )}
        />
      </Form>
    )
  }
</Formik>
```

##### FieldArray example without Inital values

```jsx
import { Formik, FieldArray } from 'formik'
import { Form, Input, SubmitBtn } from 'react-formik-ui'
const buttonStyle = {
  cursor: 'pointer',
  margin: '7px 3px 0px',
};

<Formik
  initialValues={{
    friendsEmpty: []
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
>
  {
    ({ values }) => (
      <Form mode='structured'>
        <FieldArray
          name="friendsEmpty"
          render={arrayHelpers => (
            <div>
              {values.friendsEmpty && values.friendsEmpty.length > 0 ? (
                values.friendsEmpty.map((friend, index) => (
                  <div key={index} style={{display: 'flex', alignItems: 'center'}}>
                    <Input
                      name={`friendsEmpty.${index}`}
                      label={`Friend ${index + 1}`}
                    />
                    <div>
                      <button
                        style={buttonStyle}
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                      >
                        -
                      </button>
                      <button
                        style={buttonStyle}
                        type="button"
                        onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <button type="button" onClick={() => arrayHelpers.push('')}>
                  {/* show this when user has removed all friends from the list */}
                  Add a friend
                </button>
              )}
              <div>
                <SubmitBtn />
              </div>
            </div>
          )}
        />
      </Form>
    )
  }
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
      onFocus={() => console.log('focus')}
      onBlur={() => console.log('blur')}
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
