import React from 'react'
import { shallow, mount } from 'enzyme'
import Checkbox from './Checkbox'

describe('<Checkbox />', () => {
  const context = {
    formik: {
      handleChange: jest.fn(),
      handleBlur: jest.fn(),
      setFieldValue: jest.fn(),
      setFieldTouched: jest.fn(),
      touched: {},
      errors: {},
      values: {
        checkboxTest: false,
      },
    },
  }

  const baseProps = {
    name: 'checkboxTest',
  }

  it('should render', () => {
    const wrapper = shallow(<Checkbox {...baseProps} />, { context })

    expect(wrapper).toBeDefined()
  })

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'Custom',
    }
    const wrapper = shallow(<Checkbox {...props} />, { context })

    expect(wrapper.hasClass(props.className)).toBe(true)
  })

  it('should be disabled', () => {
    const wrapper = shallow(<Checkbox {...baseProps} disabled />, { context })

    expect(wrapper.find('input').prop('disabled')).toBe(true)
    expect(wrapper.prop('className').includes('disabled'))
  })

  it('should have a hint', () => {
    const props = {
      ...baseProps,
      hint: 'hintTest',
    }
    const wrapper = shallow(<Checkbox {...props} />, { context })

    expect(wrapper.find('.hint').length).toBe(1)
    expect(wrapper.find('.hint').text()).toBe(props.hint)
  })

  it('should call onChange', () => {
    const wrapper = mount(<Checkbox {...baseProps} />, { context })

    wrapper.find('input').simulate('change')

    expect(context.formik.handleChange).toHaveBeenCalled()
  })
})
