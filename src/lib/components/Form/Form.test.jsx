import React from 'react'
import { shallow, mount } from 'enzyme'
import Form from './Form'

describe('<Form />', () => {
  const baseProps = {
    children: 'dwadaw',
  }

  it('should render', () => {
    const wrapper = shallow(<Form {...baseProps} />)

    expect(wrapper).toBeDefined()
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
})
