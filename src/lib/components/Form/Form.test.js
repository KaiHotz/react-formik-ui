import React from 'react'
import { shallow } from 'enzyme'
import { Form } from './Form'

describe('<Form />', () => {
  const baseProps = {
    children: 'dwadaw',
    formik: {
      handleSubmit: jest.fn(),
    },
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
    const wrapper = shallow(<Form {...props} />)

    expect(wrapper.hasClass(props.className)).toBe(true)
  })

  it('should show children', () => {
    const wrapper = shallow(<Form {...baseProps} />)

    expect(wrapper.text()).toBe(baseProps.children)
  })

  it('should call onSubmit', () => {
    const wrapper = shallow(<Form {...baseProps} />)
    wrapper.simulate('submit')

    expect(baseProps.formik.handleSubmit).toHaveBeenCalled()
  })
})
