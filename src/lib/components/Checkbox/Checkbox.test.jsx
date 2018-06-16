import React from 'react'
import { shallow, mount } from 'enzyme'
import Checkbox from './Checkbox'

describe('<Checkbox />', () => {
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
    name: 'Checkbox',
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

  it('should be disableable', () => {
    const wrapper = shallow(<Checkbox {...baseProps} disabled />, { context })

    expect(wrapper.find('input').prop('disabled')).toBe(true)
    expect(wrapper.prop('className').includes('disabled'))
  })

  it('should call onChange', () => {
    const wrapper = mount(<Checkbox {...baseProps} />, { context })

    wrapper.find('input').simulate('change')

    expect(context.formik.handleChange).toHaveBeenCalled()
  })
})
