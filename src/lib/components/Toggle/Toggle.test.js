import React from 'react'
import { shallow } from 'enzyme'
import Toggle from './Toggle'

describe('<Toggle />', () => {
  const context = {
    formik: {
      handleChange: jest.fn(),
      handleBlur: jest.fn(),
      setFieldValue: jest.fn(),
      setFieldTouched: jest.fn(),
      touched: {},
      errors: {},
      values: {
        toggleTest: false,
      },
    },
  }

  const baseProps = {
    name: 'toggleTest',
  }

  it('should render', () => {
    const wrapper = shallow(<Toggle {...baseProps} />, { context })

    expect(wrapper).toBeDefined()
  })

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'Custom',
    }
    const wrapper = shallow(<Toggle {...props} />, { context })

    expect(wrapper.hasClass(props.className)).toBe(true)
  })

  it('should call handleChange', () => {
    const wrapper = shallow(<Toggle {...baseProps} />, { context })
    wrapper.instance().handleChange()

    expect(context.formik.setFieldValue).toHaveBeenCalled()
    expect(context.formik.setFieldTouched).toHaveBeenCalled()
  })

  it('should be disabled', () => {
    const wrapper = shallow(<Toggle {...baseProps} disabled />, { context })

    expect(wrapper.prop('disabled')).toBe(true)
  })
})
