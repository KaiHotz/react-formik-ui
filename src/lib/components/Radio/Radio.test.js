import React from 'react'
import { shallow } from 'enzyme'
import { Radio } from './Radio'

describe('<Radio />', () => {
  const baseProps = {
    name: 'radioTest',
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
        radioTest: '0',
      },
    },
  }

  it('should render', () => {
    const wrapper = shallow(<Radio {...baseProps} />)

    expect(wrapper).toBeDefined()
  })

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'Custom',
    }
    const wrapper = shallow(<Radio {...props} />)

    expect(wrapper.hasClass(props.className)).toBe(true)
  })

  it('should have a hint', () => {
    const props = {
      ...baseProps,
      hint: 'hintTest',
    }
    const wrapper = shallow(<Radio {...props} />)

    expect(wrapper.find('.hint').length).toBe(1)
    expect(wrapper.find('.hint').text()).toBe(props.hint)
  })

  it('should be disabled', () => {
    const wrapper = shallow(<Radio {...baseProps} disabled />)

    expect(wrapper.prop('className').includes('disabled'))
  })

  it('should call onChange', () => {
    const wrapper = shallow(<Radio {...baseProps} />)
    wrapper.find('input').forEach(node => {
      node.simulate('change')
      expect(baseProps.formik.handleChange).toHaveBeenCalled()
    })
  })
})
