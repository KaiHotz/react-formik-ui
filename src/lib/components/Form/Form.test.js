import React from 'react'
import { mount } from 'enzyme'
import { Formik } from 'formik'
import { Form } from './Form'

// eslint-disable-next-line react/prop-types
const FormiWrapper = ({ children }) => (
  <Formik onSubmit={() => { }}>
    {children}
  </Formik>
)

describe('<Form />', () => {
  const baseProps = {
    children: 'dwadaw',
  }

  it('should render', () => {
    const wrapper = mount(
      <FormiWrapper>
        <Form {...baseProps} />
      </FormiWrapper>,
    )

    expect(wrapper).toBeDefined()
  })

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'Custom',
    }
    const wrapper = mount(
      <FormiWrapper>
        <Form {...props} />
      </FormiWrapper>,
    )

    expect(wrapper.find('form').hasClass(props.className)).toBe(true)
  })

  it('should show children', () => {
    const wrapper = mount(
      <FormiWrapper>
        <Form {...baseProps} />
      </FormiWrapper>,
    )

    expect(wrapper.text()).toBe(baseProps.children)
  })
})
