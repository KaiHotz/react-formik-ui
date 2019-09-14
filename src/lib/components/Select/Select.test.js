import React from 'react'
import { shallow, mount } from 'enzyme'
import WithLabel from '../WithLabel'
import { Select } from './Select'

describe('<Select />', () => {
  const baseProps = {
    name: 'selectTest',
    options: [
      { value: '0', label: 'Option 1' },
      { value: '1', label: 'Option 2' },
      { value: '2', label: 'Option 3' },
    ],
    formik: {
      handleChange: jest.fn(),
      handleBlur: jest.fn(),
      setFieldValue: jest.fn(),
      setFieldTouched: jest.fn(),
      touched: {},
      errors: {},
      values: {
        selectTest: '',
      },
    },
  }

  const WrappedComponent = WithLabel('select')(Select)

  it('should render', () => {
    const wrapper = shallow(<WrappedComponent {...baseProps} />)

    expect(wrapper).toBeDefined()
  })

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'customClass',
    }
    const wrapper = mount(<WrappedComponent {...props} />)

    expect(wrapper.find('select').hasClass(props.className)).toBe(true)
  })

  it('should have a label', () => {
    const props = {
      ...baseProps,
      label: 'Custom',
    }
    const wrapper = mount(<WrappedComponent {...props} />)

    expect(wrapper.find('.label').length).toBe(1)
  })

  it('should have a placeholder', () => {
    const props = {
      ...baseProps,
      placeholder: 'Custom',
    }
    const wrapper = mount(<WrappedComponent {...props} />)
    expect(wrapper.prop('placeholder')).toBe(props.placeholder)
    expect(wrapper.find('option').first().text()).toBe(props.placeholder)
  })

  it('should have a placeholder with required', () => {
    const props = {
      ...baseProps,
      placeholder: 'Custom',
    }
    const wrapper = mount(<WrappedComponent {...props} required />)
    expect(wrapper.prop('placeholder')).toBe(props.placeholder)
    expect(wrapper.find('option').first().text()).toBe(`${props.placeholder} *`)
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

  it('should be disabled', () => {
    const wrapper = mount(<WrappedComponent {...baseProps} disabled />)

    expect(wrapper.find('select').prop('disabled')).toBe(true)
  })

  it('should call onChange', () => {
    const wrapper = mount(<Select {...baseProps} />)
    wrapper.find('select').simulate('change')

    expect(baseProps.formik.handleChange).toHaveBeenCalled()
  })
})
