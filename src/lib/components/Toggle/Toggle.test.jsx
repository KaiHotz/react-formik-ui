import React from 'react'
import { shallow } from 'enzyme'
import Toggle from './Toggle'
import { context } from '../../__mocks__/context'

jest.mock('../../__mocks__/Provider')

describe('<Toggle />', () => {
  const baseProps = {
    name: 'toggleTest',
  }

  jest.mock('./Toggle', () => ({ FormikConsumer: props => props.children(context) }))

  it('should render', () => {
    const wrapper = shallow(<Toggle {...baseProps} />)

    expect(wrapper).toBeDefined()
  })

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'Custom',
    }
    const wrapper = shallow(<Toggle {...props} />)

    expect(wrapper.hasClass(props.className)).toBe(true)
  })

  it('should call handleChange', () => {
    const wrapper = shallow(<Toggle {...baseProps} />)
    wrapper.instance().handleChange()

    expect(context.formik.setFieldValue).toHaveBeenCalled()
    expect(context.formik.setFieldTouched).toHaveBeenCalled()
  })

  it('should be disabled', () => {
    const wrapper = shallow(<Toggle {...baseProps} disabled />)

    expect(wrapper.prop('disabled')).toBe(true)
  })
})
