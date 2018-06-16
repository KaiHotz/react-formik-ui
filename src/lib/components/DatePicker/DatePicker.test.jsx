import React from 'react'
import { shallow, mount } from 'enzyme'
import DatePicker from './DatePicker'

describe('<DatePicker />', () => {
  const context = {
    formik: {
      handleChange: jest.fn(),
      handleBlur: jest.fn(),
      setFieldValue: jest.fn(),
      setFieldTouched: jest.fn(),
      touched: {},
      errors: {},
      values: {
        DatePickerTest: '',
      },
    },
  }

  const baseProps = {
    name: 'DatePickerTest',
  }

  it('should render', () => {
    const wrapper = shallow(<DatePicker {...baseProps} />, { context })

    expect(wrapper).toBeDefined()
  })

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'customDatepicker',
    }
    const wrapper = mount(<DatePicker {...props} />, { context })

    expect(wrapper.hasClass(props.className)).toBe(true)
  })

  it('should be disabled', () => {
    let wrapper
    wrapper = mount(<DatePicker {...baseProps} disabled />, { context })
    expect(wrapper.find('input').prop('disabled')).toBe(true)

    wrapper = shallow(<DatePicker {...baseProps} disabled />, { context })
    expect(wrapper.prop('className').includes('disabled'))
  })

  it('should have a label', () => {
    const props = {
      ...baseProps,
      label: 'Custom',
    }
    const wrapper = shallow(<DatePicker {...props} />, { context })

    expect(wrapper.find('label').length).toBe(1)
  })

  it('should have a hint', () => {
    const props = {
      ...baseProps,
      hint: 'hintTest',
    }
    const wrapper = shallow(<DatePicker {...props} />, { context })

    expect(wrapper.find('.hint').length).toBe(1)
    expect(wrapper.find('.hint').text()).toBe(props.hint)
  })
})
