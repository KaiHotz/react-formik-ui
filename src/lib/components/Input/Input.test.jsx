import React from 'react'
import { shallow, mount } from 'enzyme'
import Input from './Input'

describe('<Input />', () => {
  const context = {
    formik: {
      handleChange: jest.fn(),
      handleBlur: jest.fn(),
      touched: {},
      errors: {},
      values: {
        textField: '',
      },
    },
  }

  const baseProps = {
    name: 'textField',
  }

  it('should render', () => {
    const wrapper = shallow(<Input {...baseProps} />, { context })

    expect(wrapper).toBeDefined()
  })

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'Custom',
    }
    const wrapper = shallow(<Input {...props} />, { context })

    expect(wrapper.hasClass(props.className)).toBe(true)
  })

  it('should have custom type', () => {
    const props = {
      ...baseProps,
      type: 'text',
    }
    const wrapper = mount(<Input {...props} />, { context })

    expect(wrapper.find('input').prop('type')).toBe(props.type)
  })

  it('should call onChange', () => {
    const props = {
      ...baseProps,
    }
    const wrapper = mount(<Input {...props} />, { context })
    wrapper.find('input').simulate('change')

    expect(context.formik.handleChange).toHaveBeenCalled()
  })
})
