import React from 'react'
import { shallow, mount } from 'enzyme'
import Checkbox from './Checkbox'
import { context } from '../../__mocks__/context'

jest.mock('../../__mocks__/Provider')

describe('<Checkbox />', () => {
  const baseProps = {
    name: 'checkboxTest',
  }

  it('should render', () => {
    const wrapper = shallow(<Checkbox {...baseProps} />)

    expect(wrapper).toBeDefined()
  })

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'Custom',
    }
    const wrapper = mount(<Checkbox {...props} />)

    expect(wrapper.find('.checkbox-wrapper').hasClass(props.className)).toBe(true)
  })

  it('should be disabled', () => {
    const wrapper = mount(<Checkbox {...baseProps} disabled />)

    expect(wrapper.find('input').prop('disabled')).toBe(true)
    expect(wrapper.find('.checkbox-wrapper').prop('className').includes('disabled'))
  })

  it('should have a hint', () => {
    const props = {
      ...baseProps,
      hint: 'hintTest',
    }
    const wrapper = shallow(<Checkbox {...props} />)

    expect(wrapper.find('.hint').length).toBe(1)
    expect(wrapper.find('.hint').text()).toBe(props.hint)
  })

  it('should call onChange', () => {
    const wrapper = mount(<Checkbox {...baseProps} />)

    wrapper.find('input').simulate('change')

    expect(context.formik.handleChange).toHaveBeenCalled()
  })
})
