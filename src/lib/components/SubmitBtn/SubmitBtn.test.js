import React from 'react'
import { shallow } from 'enzyme'
import SubmitBtn from './SubmitBtn'

describe('<SubmitBtn />', () => {
  const context = {
    formik: {
      handleSubmit: jest.fn(),
    },
  }

  it('should render', () => {
    const wrapper = shallow(<SubmitBtn />, { context })

    expect(wrapper).toBeDefined()
  })

  it('should display text', () => {
    const props = {
      text: 'Content',
    }
    const wrapper = shallow(<SubmitBtn {...props} />, { context })

    expect(wrapper.text().includes(props.text)).toBeTruthy()
  })

  it('should call onClick', () => {
    const wrapper = shallow(<SubmitBtn />, { context })
    wrapper.simulate('click')

    expect(context.formik.handleSubmit).toHaveBeenCalled()
  })

  it('should be disabled', () => {
    const wrapper = shallow(<SubmitBtn disabled />, { context })

    expect(wrapper.prop('disabled')).toBe(true)
    expect(wrapper.prop('className').includes('disabled'))
  })

  it('should have custom type', () => {
    const props = {
      type: 'button',
    }
    const wrapper = shallow(<SubmitBtn {...props} />, { context })

    expect(wrapper.prop('type')).toBe(props.type)
  })

  it('should allow custom className', () => {
    const props = {
      className: 'Custom',
    }
    const wrapper = shallow(<SubmitBtn {...props} />, { context })

    expect(wrapper.hasClass(props.className)).toBe(true)
  })
})
