import React from 'react'
import { mount } from 'enzyme'
import { Form, Formik } from 'formik'
import WithLabel from '../WithLabel'
import { Select } from './Select'

// eslint-disable-next-line react/prop-types
const FormiWrapper = ({ children }) => (
  <Formik
    initialValues={{
      selectTest: '',
    }}
  >
    <Form>
      {children}
    </Form>
  </Formik>
)

describe('<Select />', () => {
  const baseProps = {
    name: 'selectTest',
    options: [
      { value: '0', label: 'Option 1' },
      { value: '1', label: 'Option 2' },
      { value: '2', label: 'Option 3' },
    ],
  }

  const WrappedComponent = WithLabel('select')(Select)

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
      className: 'customClass',
    }
    const wrapper = mount(
      <FormiWrapper>
        <WrappedComponent {...props} />
      </FormiWrapper>,
    )

    expect(wrapper.find('select').hasClass(props.className)).toBe(true)
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

  it('should have a placeholder', () => {
    const props = {
      ...baseProps,
      placeholder: 'Custom',
    }
    const wrapper = mount(
      <FormiWrapper>
        <WrappedComponent {...props} />
      </FormiWrapper>,
    )

    expect(wrapper.find('option').first().text()).toBe(props.placeholder)
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

    expect(wrapper.find('select').prop('disabled')).toBe(true)
  })
})
