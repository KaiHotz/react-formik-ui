import React from 'react'
import { mount } from 'enzyme'
import { Form, Formik } from 'formik'
import Radio from './Radio'

// eslint-disable-next-line react/prop-types
const FormiWrapper = ({ children }) => (
  <Formik
    initialValues={{
      radioTest: '0',
    }}
  >
    <Form>
      {children}
    </Form>
  </Formik>
)

describe('<Radio />', () => {
  const baseProps = {
    name: 'radioTest',
    options: [
      { value: '0', label: 'Option 1' },
      { value: '1', label: 'Option 2' },
      { value: '2', label: 'Option 3' },
    ],
  }

  it('should render', () => {
    const wrapper = mount(
      <FormiWrapper>
        <Radio {...baseProps} />
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
        <Radio {...props} readOnly />
      </FormiWrapper>,
    )

    wrapper.find('input').forEach(node => {
      expect(node.prop('className')).toBe(props.className)
    })
  })

  it('should have a hint', () => {
    const props = {
      ...baseProps,
      hint: 'hintTest',
    }
    const wrapper = mount(
      <FormiWrapper>
        <Radio {...props} readOnly />
      </FormiWrapper>,
    )

    expect(wrapper.find('.hint').length).toBe(1)
    expect(wrapper.find('.hint').text()).toBe(props.hint)
  })

  it('should be disabled', () => {
    const wrapper = mount(
      <FormiWrapper>
        <Radio {...baseProps} disabled />
      </FormiWrapper>,
    )

    wrapper.find('input').forEach(node => {
      expect(node.prop('disabled')).toBe(true)
    })
  })
})
