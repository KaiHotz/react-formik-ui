import React from 'react'
import { shallow, mount } from 'enzyme'
import { context } from '../../__mocks__/context'
import Form from './Form'

jest.mock('../../__mocks__/Provider')

describe('<Form />', () => {
  const baseProps = {
    children: 'dwadaw',
  }

  it('should render', () => {
    const wrapper = shallow(<Form {...baseProps} />)

    expect(wrapper.find('form')).toBeDefined()
  })

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'Custom',
    }
    const wrapper = mount(<Form {...props} />)
    expect(wrapper.find('form').hasClass(props.className)).toBe(true)
  })

  it('should show children', () => {
    const wrapper = mount(<Form {...baseProps} />)

    expect(wrapper.find('form').text()).toBe(baseProps.children)
  })

  it('should call onSubmit', () => {
    const wrapper = mount(<Form {...baseProps} />)
    wrapper.find('form').simulate('submit')

    expect(context.formik.handleSubmit).toHaveBeenCalled()
  })
})
