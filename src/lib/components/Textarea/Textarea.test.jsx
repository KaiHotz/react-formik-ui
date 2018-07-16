import React from 'react'
import { shallow, mount } from 'enzyme'
import { context } from '../../__mocks__/context'
import Textarea from './Textarea'

jest.mock('../../__mocks__/Provider')

describe('<Textarea />', () => {
  const baseProps = {
    name: 'textAreaTest',
  }

  it('should render', () => {
    const wrapper = shallow(<Textarea {...baseProps} />)

    expect(wrapper).toBeDefined()
  })

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'Custom',
    }
    const wrapper = shallow(<Textarea {...props} />)

    expect(wrapper.hasClass(props.className)).toBe(true)
  })

  it('should have a label', () => {
    const props = {
      ...baseProps,
      label: 'Custom',
    }
    const wrapper = shallow(<Textarea {...props} />)

    expect(wrapper.find('label').length).toBe(1)
  })

  it('should have a hint', () => {
    const props = {
      ...baseProps,
      hint: 'hintTest',
    }
    const wrapper = shallow(<Textarea {...props} />)

    expect(wrapper.find('.hint').length).toBe(1)
    expect(wrapper.find('.hint').text()).toBe(props.hint)
  })

  it('should render children', () => {
    const props = {
      ...baseProps,
      children: 'test',
    }
    const wrapper = shallow(<Textarea {...props} />)

    expect(wrapper.text().includes(props.children)).toBe(true)
  })

  it('should call onChange', () => {
    const wrapper = mount(<Textarea {...baseProps} />)
    wrapper.find('textarea').simulate('change')

    expect(context.formik.handleChange).toHaveBeenCalled()
  })
})
