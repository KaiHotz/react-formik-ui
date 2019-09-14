import React from 'react'
import { shallow, mount } from 'enzyme'
import WithLabel from '../WithLabel'
import { Textarea } from './Textarea'

describe('<Textarea />', () => {
  const baseProps = {
    name: 'textAreaTest',
    value: '',
    onFocus: jest.fn(),
    onBlur: jest.fn(),
    formik: {
      handleChange: jest.fn(),
      handleBlur: jest.fn(),
      setFieldValue: jest.fn(),
      setFieldTouched: jest.fn(),
      touched: {},
      errors: {},
      values: {
        textAreaTest: '',
      },
    },
  }

  const WrappedComponent = WithLabel('textarea')(Textarea)

  it('should render', () => {
    const wrapper = shallow(<WrappedComponent {...baseProps} />)

    expect(wrapper).toBeDefined()
  })

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'Custom',
    }
    const wrapper = mount(<WrappedComponent {...props} readOnly />)

    expect(wrapper.hasClass(props.className)).toBe(true)
  })

  it('should have a label', () => {
    const props = {
      ...baseProps,
      label: 'Custom Label',
    }
    const wrapper = mount(<WrappedComponent {...props} readOnly />)

    expect(wrapper.find('.label').length).toBe(1)
  })

  it('should have a hint', () => {
    const props = {
      ...baseProps,
      hint: 'hintTest',
    }
    const wrapper = mount(<WrappedComponent {...props} readOnly />)

    expect(wrapper.find('.hint').length).toBe(1)
    expect(wrapper.find('.hint').text()).toBe(props.hint)
  })

  it('should call onChange', () => {
    const wrapper = mount(<Textarea {...baseProps} />)
    wrapper.find('textarea').simulate('change')

    expect(baseProps.formik.handleChange).toHaveBeenCalled()
  })
})
