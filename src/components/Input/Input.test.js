import React from 'react'
import { mount } from 'enzyme'
import { Form, Formik } from 'formik'
import WithLabel from '../WithLabel'
import { Input } from './Input'

// eslint-disable-next-line react/prop-types
const FormiWrapper = ({ children }) => (
  <Formik
    initialValues={{
      inputTest: '',
    }}
  >
    <Form>
      {children}
    </Form>
  </Formik>
)

describe('<Input />', () => {
  const baseProps = {
    name: 'inputTest',
    onFocus: jest.fn(),
    onBlur: jest.fn(),
    onAnimationStart: jest.fn(),
  }

  const WrappedComponent = WithLabel('input')(Input)

  it('should render', () => {
    const wrapper = mount(
      <FormiWrapper>
        <WrappedComponent {...baseProps} />
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
        <WrappedComponent {...props} />
      </FormiWrapper>,
    )

    expect(wrapper.find('input').hasClass(props.className)).toBe(true)
  })

  it('should have custom type', () => {
    const props = {
      ...baseProps,
      type: 'text',
    }
    const wrapper = mount(
      <FormiWrapper>
        <WrappedComponent {...props} />
      </FormiWrapper>,
    )

    expect(wrapper.find('input').prop('type')).toBe(props.type)
  })

  it('should have a label', () => {
    const props = {
      ...baseProps,
      label: 'Custom',
    }
    const wrapper = mount(
      <FormiWrapper>
        <WrappedComponent {...props} />
      </FormiWrapper>,
    )

    expect(wrapper.find('.label').length).toBe(1)
  })

  it('should have a hint', () => {
    const props = {
      ...baseProps,
      hint: 'hintTest',
    }
    const wrapper = mount(
      <FormiWrapper>
        <WrappedComponent {...props} />
      </FormiWrapper>,
    )

    expect(wrapper.find('.hint').length).toBe(1)
    expect(wrapper.find('.hint').text()).toBe(props.hint)
  })

  it('should be disabled', () => {
    const wrapper = mount(
      <FormiWrapper>
        <WrappedComponent {...baseProps} disabled />
      </FormiWrapper>,
    )

    expect(wrapper.find('input').prop('disabled')).toBe(true)
  })
})
