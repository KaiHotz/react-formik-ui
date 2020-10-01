import React from 'react'
import { mount } from 'enzyme'
import { Form, Formik } from 'formik'
import { SubmitBtn } from './SubmitBtn'

// eslint-disable-next-line react/prop-types
const FormiWrapper = ({ children }) => (
  <Formik>
    <Form>
      {children}
    </Form>
  </Formik>
)

describe('<SubmitBtn />', () => {
  const baseProps = {
    formik: {
      handleSubmit: jest.fn(),
    },
  }

  it('should render', () => {
    const wrapper = mount(
      <FormiWrapper>
        <SubmitBtn {...baseProps} />
      </FormiWrapper>,
    )

    expect(wrapper).toBeDefined()
  })

  it('should display children', () => {
    const props = {
      children: 'Content',
      ...baseProps,
    }
    const wrapper = mount(
      <FormiWrapper>
        <SubmitBtn {...props} />
      </FormiWrapper>,
    )

    expect(wrapper.find('button').text().includes(props.children)).toBeTruthy()
  })

  it('should be disabled', () => {
    const wrapper = mount(
      <FormiWrapper>
        <SubmitBtn {...baseProps} disabled />
      </FormiWrapper>,
    )

    expect(wrapper.find('button').prop('disabled')).toBe(true)
    expect(wrapper.find('button').prop('className').includes('disabled'))
  })

  it('should allow custom className', () => {
    const props = {
      className: 'Custom',
      ...baseProps,
    }
    const wrapper = mount(
      <FormiWrapper>
        <SubmitBtn {...props} />
      </FormiWrapper>,
    )

    expect(wrapper.find('button').hasClass(props.className)).toBe(true)
  })
})
