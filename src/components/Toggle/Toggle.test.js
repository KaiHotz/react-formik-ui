import React from 'react'
import { mount } from 'enzyme'
import { Form, Formik } from 'formik'
import { Toggle } from './Toggle'

// eslint-disable-next-line react/prop-types
const FormiWrapper = ({ children }) => (
  <Formik
    initialValues={{
      toggleTest: false,
    }}
  >
    <Form>
      {children}
    </Form>
  </Formik>
)

describe('<Toggle />', () => {
  const baseProps = {
    name: 'toggleTest',
  }

  it('should render', () => {
    const wrapper = mount(
      <FormiWrapper>
        <Toggle {...baseProps} />
      </FormiWrapper>,
    )

    expect(wrapper).toBeDefined()
  })

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'Custom',
    }
    const wrapper = mount(
      <FormiWrapper>
        <Toggle {...props} />
      </FormiWrapper>,
    )

    expect(wrapper.find('.form-element').hasClass(props.className)).toBe(true)
  })

  it('should be disabled', () => {
    const wrapper = mount(
      <FormiWrapper>
        <Toggle {...baseProps} disabled />
      </FormiWrapper>,
    )

    expect(wrapper.find('input').prop('disabled')).toBe(true)
    expect(wrapper.find('.form-element').prop('className').includes('disabled'))
  })
})
