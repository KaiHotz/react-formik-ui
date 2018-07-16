import React from 'react'
import { shallow } from 'enzyme'
import { context } from '../../__mocks__/context'
import SubmitBtn from './SubmitBtn'

jest.mock('../../__mocks__/Provider')

describe('<SubmitBtn />', () => {
  it('should render', () => {
    const wrapper = shallow(<SubmitBtn />)

    expect(wrapper).toBeDefined()
  })

  it('should display text', () => {
    const props = {
      text: 'Content',
    }
    const wrapper = shallow(<SubmitBtn {...props} />)

    expect(wrapper.text().includes(props.text)).toBeTruthy()
  })

  it('should call onClick', () => {
    const wrapper = shallow(<SubmitBtn />)
    wrapper.simulate('click')

    expect(context.formik.handleSubmit).toHaveBeenCalled()
  })

  it('should be disabled', () => {
    const wrapper = shallow(<SubmitBtn disabled />)

    expect(wrapper.prop('disabled')).toBe(true)
    expect(wrapper.prop('className').includes('disabled'))
  })

  it('should have custom type', () => {
    const props = {
      type: 'button',
    }
    const wrapper = shallow(<SubmitBtn {...props} />)

    expect(wrapper.prop('type')).toBe(props.type)
  })

  it('should allow custom className', () => {
    const props = {
      className: 'Custom',
    }
    const wrapper = shallow(<SubmitBtn {...props} />)

    expect(wrapper.hasClass(props.className)).toBe(true)
  })
})
