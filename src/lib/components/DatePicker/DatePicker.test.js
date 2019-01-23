import React from 'react'
import { shallow, mount } from 'enzyme'
import { Datepicker } from './Datepicker'

describe('<Datepicker />', () => {
  const baseProps = {
    name: 'DatepickerTest',
    formik: {
      handleChange: jest.fn(),
      handleBlur: jest.fn(),
      setFieldValue: jest.fn(),
      setFieldTouched: jest.fn(),
      touched: {},
      errors: {},
      values: {
        DatepickerTest: '',
      },
    },
  }

  it('should render', () => {
    const wrapper = shallow(<Datepicker {...baseProps} />)

    expect(wrapper).toBeDefined()
  })

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'customDatepicker',
    }
    const wrapper = mount(<Datepicker {...props} />)

    expect(wrapper.hasClass(props.className)).toBe(true)
  })

  it('should be disabled', () => {
    let wrapper
    wrapper = mount(<Datepicker {...baseProps} disabled />)
    expect(wrapper.find('input').prop('disabled')).toBe(true)

    wrapper = shallow(<Datepicker {...baseProps} disabled />)

    expect(wrapper.prop('className').includes('disabled'))
  })

  it('should have a label', () => {
    const props = {
      ...baseProps,
      label: 'Custom',
    }
    const wrapper = shallow(<Datepicker {...props} />)

    expect(wrapper.find('label').length).toBe(1)
  })

  it('should have a hint', () => {
    const props = {
      ...baseProps,
      hint: 'hintTest',
    }
    const wrapper = shallow(<Datepicker {...props} />)

    expect(wrapper.find('.hint').length).toBe(1)
    expect(wrapper.find('.hint').text()).toBe(props.hint)
  })
})
