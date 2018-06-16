import React from 'react'
import { shallow } from 'enzyme'
import Form from './Form'

describe('<Form />', () => {
  const context = {
    formik: {
      handleSubmit: jest.fn(),
    },
  }

  const baseProps = {
    children: 'dwadaw',
  }

  it('should render', () => {
    const wrapper = shallow(<Form {...baseProps} />, { context })

    expect(wrapper).toBeDefined()
  })

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'Custom',
    }
    const wrapper = shallow(<Form {...props} />, { context })

    expect(wrapper.hasClass(props.className)).toBe(true)
  })

  it('should show children', () => {
    const wrapper = shallow(<Form {...baseProps} />, { context })

    expect(wrapper.text()).toBe(baseProps.children)
  })

  it('should call onSubmit', () => {
    const wrapper = shallow(<Form {...baseProps} />, { context })
    wrapper.simulate('submit')

    expect(context.formik.handleSubmit).toHaveBeenCalled()
  })
})
