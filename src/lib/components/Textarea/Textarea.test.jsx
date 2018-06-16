import React from 'react'
import { shallow, mount } from 'enzyme'

import Textarea from './Textarea'


describe('<Textarea />', () => {
  const context = {
    formik: {
      handleChange: jest.fn(),
      handleBlur: jest.fn(),
      touched: {},
      errors: {},
      values: {
        textAreaTest: '',
      },
    },
  }

  const baseProps = {
    name: 'textAreaTest',
  }

  it('should render', () => {
    const wrapper = shallow(<Textarea {...baseProps} />, { context })

    expect(wrapper).toBeDefined()
  })

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'Custom',
    }
    const wrapper = shallow(<Textarea {...props} />, { context })

    expect(wrapper.hasClass(props.className)).toBe(true)
  })

  it('should have a label', () => {
    const props = {
      ...baseProps,
      label: 'Custom',
    }
    const wrapper = shallow(<Textarea {...props} />, { context })

    expect(wrapper.find('label').length).toBe(1)
  })

  it('should have a hint', () => {
    const props = {
      ...baseProps,
      hint: 'hintTest',
    }
    const wrapper = shallow(<Textarea {...props} />, { context })

    expect(wrapper.find('.hint').length).toBe(1)
    expect(wrapper.find('.hint').text()).toBe(props.hint)
  })

  it('should render children', () => {
    const props = {
      ...baseProps,
      children: 'test',
    }
    const wrapper = shallow(<Textarea {...props} />, { context })

    expect(wrapper.text().includes(props.children)).toBe(true)
  })

  it('should call onChange', () => {
    const wrapper = mount(<Textarea {...baseProps} />, { context })
    wrapper.find('textarea').simulate('change')

    expect(context.formik.handleChange).toHaveBeenCalled()
  })
})
