import React from 'react'
import { shallow } from 'enzyme'
import { SubmitBtn } from './SubmitBtn'

describe('<SubmitBtn />', () => {
  const baseProps = {
    formik: {
      handleSubmit: jest.fn(),
    },
  }

  it('should render', () => {
    const wrapper = shallow(<SubmitBtn {...baseProps} />)

    expect(wrapper).toBeDefined()
  })

  it('should display text', () => {
    const props = {
      text: 'Content',
      ...baseProps,
    }
    const wrapper = shallow(<SubmitBtn {...props} />)

    expect(wrapper.text().includes(props.text)).toBeTruthy()
  })

  it('should call onClick', () => {
    const wrapper = shallow(<SubmitBtn {...baseProps} />)
    wrapper.simulate('click')

    expect(baseProps.formik.handleSubmit).toHaveBeenCalled()
  })

  it('should be disabled', () => {
    const wrapper = shallow(<SubmitBtn {...baseProps} disabled />)

    expect(wrapper.prop('disabled')).toBe(true)
    expect(wrapper.prop('className').includes('disabled'))
  })

  it('should have custom type', () => {
    const props = {
      type: 'button',
      ...baseProps,
    }
    const wrapper = shallow(<SubmitBtn {...props} />)

    expect(wrapper.prop('type')).toBe(props.type)
  })

  it('should allow custom className', () => {
    const props = {
      className: 'Custom',
      ...baseProps,
    }
    const wrapper = shallow(<SubmitBtn {...props} />)

    expect(wrapper.hasClass(props.className)).toBe(true)
  })
})
