import React from 'react'
import { shallow } from 'enzyme'
import { Toggle } from './Toggle'

describe('<Toggle />', () => {
  const baseProps = {
    name: 'toggleTest',
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

  it('should render', () => {
    const wrapper = shallow(<Toggle {...baseProps} />)

    expect(wrapper).toBeDefined()
  })

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'Custom',
    }
    const wrapper = shallow(<Toggle {...props} />)

    expect(wrapper.hasClass(props.className)).toBe(true)
  })

  it('should call handleChange', () => {
    const wrapper = shallow(<Toggle {...baseProps} />)
    wrapper.instance().handleChange()

    expect(baseProps.formik.setFieldValue).toHaveBeenCalled()
    expect(baseProps.formik.setFieldTouched).toHaveBeenCalled()
  })

  it('should be disabled', () => {
    const wrapper = shallow(<Toggle {...baseProps} disabled />)

    expect(wrapper.prop('disabled')).toBe(true)
  })
})
