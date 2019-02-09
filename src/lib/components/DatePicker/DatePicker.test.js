import React from 'react'
import { shallow, mount } from 'enzyme'
import useLabel from '../useLabel'
import { Datepicker } from './Datepicker'

describe('<Datepicker />', () => {
  const baseProps = {
    name: 'DatepickerTest',
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
        DatepickerTest: '',
      },
    },
  }

  const WrappedComponent = useLabel('datePicker')(Datepicker)

  it('should render', () => {
    const wrapper = shallow(<WrappedComponent {...baseProps} />)

    expect(wrapper).toBeDefined()
  })

  it('should call handleChange', () => {
    const wrapper = mount(<Datepicker {...baseProps} />)
    wrapper.find('input').simulate('change', { target: { value: '10.10.2019' } })

    expect(baseProps.formik.setFieldValue).toHaveBeenCalled()
    expect(baseProps.formik.setFieldTouched).toHaveBeenCalled()
  })

  it('should call handleChangeRaw', () => {
    const wrapper = mount(<Datepicker {...baseProps} />)
    wrapper.find('input').simulate('change', { target: { value: '10.10.2019' } })

    expect(baseProps.formik.setFieldValue).toHaveBeenCalled()
    expect(baseProps.formik.setFieldTouched).toHaveBeenCalled()
  })

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'customDatepicker',
    }
    const wrapper = mount(<WrappedComponent {...props} />)

    expect(wrapper.hasClass(props.className)).toBe(true)
  })

  it('should be disabled', () => {
    const wrapper = mount(<WrappedComponent {...baseProps} disabled />)

    expect(wrapper.find('label').hasClass('isDisabled')).toBe(true)
    expect(wrapper.find('input').prop('disabled')).toBe(true)
  })

  it('should have a label', () => {
    const props = {
      ...baseProps,
      label: 'Custom',
    }
    const wrapper = mount(<WrappedComponent {...props} />)

    expect(wrapper.find('label').length).toBe(1)
  })

  it('should have a hint', () => {
    const props = {
      ...baseProps,
      hint: 'hintTest',
    }
    const wrapper = mount(<WrappedComponent {...props} />)

    expect(wrapper.find('.hint').length).toBe(1)
    expect(wrapper.find('.hint').text()).toBe(props.hint)
  })
})
