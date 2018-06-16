import React from 'react'
import { shallow, mount } from 'enzyme'

import Select from './Select'


describe('<Select />', () => {
  const context = {
    formik: {
      handleChange: jest.fn(),
      handleBlur: jest.fn(),
      touched: {},
      errors: {},
      values: {
        SelectTest: '',
      },
    },
  }

  const baseProps = {
    name: 'SelectTest',
    placeholder: 'Placeholder',
    options: [
      { value: '0', label: 'Option 1' },
      { value: '1', label: 'Option 2' },
      { value: '2', label: 'Option 3' },
    ],
  }

  it('should render', () => {
    const wrapper = shallow(<Select {...baseProps} />, { context })

    expect(wrapper).toBeDefined()
  })

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'customClass',
    }
    const wrapper = shallow(<Select {...props} />, { context })

    expect(wrapper.hasClass(props.className)).toBe(true)
  })

  it('should be disabled', () => {
    const wrapper = shallow(<Select {...baseProps} disabled />, { context })

    expect(wrapper.find('select').prop('disabled')).toBe(true)
    expect(wrapper.prop('className').includes('disabled'))
  })

  it('should call onChange', () => {
    const wrapper = mount(<Select {...baseProps} />, { context })
    wrapper.find('select').simulate('change')

    expect(context.formik.handleChange).toHaveBeenCalled()
  })
})
