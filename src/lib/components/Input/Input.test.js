import React from 'react'
import { shallow, mount } from 'enzyme'
import { Input } from './Input'

describe('<Input />', () => {
  const baseProps = {
    name: 'inputTest',
    formik: {
      handleChange: jest.fn(),
      handleBlur: jest.fn(),
      setFieldValue: jest.fn(),
      setFieldTouched: jest.fn(),
      touched: {},
      errors: {},
      values: {
        inputTest: '',
      },
    },

  }

  it('should render', () => {
    const wrapper = shallow(<Input {...baseProps} />)

    expect(wrapper).toBeDefined()
  })

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'Custom',
    }
    const wrapper = shallow(<Input {...props} />)

    expect(wrapper.hasClass(props.className)).toBe(true)
  })

  it('should have custom type', () => {
    const props = {
      ...baseProps,
      type: 'text',
    }
    const wrapper = mount(<Input {...props} />)

    expect(wrapper.find('input').prop('type')).toBe(props.type)
  })

  it('should have a label', () => {
    const props = {
      ...baseProps,
      label: 'Custom',
    }
    const wrapper = mount(<Input {...props} />)

    expect(wrapper.find('label').length).toBe(1)
  })

  it('should have a hint', () => {
    const props = {
      ...baseProps,
      hint: 'hintTest',
    }
    const wrapper = mount(<Input {...props} />)

    expect(wrapper.find('.hint').length).toBe(1)
    expect(wrapper.find('.hint').text()).toBe(props.hint)
  })

  it('should be disabled', () => {
    const wrapper = shallow(<Input {...baseProps} disabled />)

    expect(wrapper.find('input').prop('disabled')).toBe(true)
    expect(wrapper.prop('className').includes('disabled'))
  })

  it('should call onChange', () => {
    const wrapper = mount(<Input {...baseProps} />)
    wrapper.find('input').simulate('change')

    expect(baseProps.formik.handleChange).toHaveBeenCalled()
  })
})
