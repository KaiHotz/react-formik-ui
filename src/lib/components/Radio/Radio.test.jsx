import React from 'react'
import { shallow } from 'enzyme'
import Radio from './Radio'

describe('<Radio />', () => {
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
    name: 'radioTest',
    options: [
      { value: '0', label: 'Option 1' },
      { value: '1', label: 'Option 2' },
      { value: '2', label: 'Option 3' },
    ],
  }

  it('should render', () => {
    const wrapper = shallow(<Radio {...baseProps} />, { context })

    expect(wrapper).toBeDefined()
  })

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'Custom',
    }
    const wrapper = shallow(<Radio {...props} />, { context })

    expect(wrapper.hasClass(props.className)).toBe(true)
  })

  it('should call onChange', () => {
    const wrapper = shallow(<Radio {...baseProps} />, { context })
    wrapper.find('input').forEach(node => {
      node.simulate('change')
      expect(context.formik.handleChange).toHaveBeenCalled()
    })
  })
})

