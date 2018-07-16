import React from 'react'
import { shallow, mount } from 'enzyme'
import DatePicker from './DatePicker'
import { context } from '../../__mocks__/context'

jest.mock('../../__mocks__/Provider')

describe('<DatePicker />', () => {
  const baseProps = {
    name: 'datePickerTest',
  }

  it('should render', () => {
    const wrapper = shallow(<DatePicker {...baseProps} />)

    expect(wrapper).toBeDefined()
  })

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'customDatepicker',
    }
    const wrapper = mount(<DatePicker {...props} />)

    expect(wrapper.hasClass(props.className)).toBe(true)
  })

  it('should be disabled', () => {
    let wrapper
    wrapper = mount(<DatePicker {...baseProps} disabled />)
    expect(wrapper.find('input').prop('disabled')).toBe(true)

    wrapper = shallow(<DatePicker {...baseProps} disabled />)
    expect(wrapper.prop('className').includes('disabled'))
  })

  it('should have a label', () => {
    const props = {
      ...baseProps,
      label: 'Custom',
    }
    const wrapper = shallow(<DatePicker {...props} />)

    expect(wrapper.find('label').length).toBe(1)
  })

  it('should call handleChange', () => {
    const wrapper = shallow(<DatePicker {...baseProps} />)
    wrapper.instance().handleChange()

    expect(context.formik.setFieldValue).toHaveBeenCalled()
    expect(context.formik.setFieldTouched).toHaveBeenCalled()
  })

  it('should have a hint', () => {
    const props = {
      ...baseProps,
      hint: 'hintTest',
    }
    const wrapper = shallow(<DatePicker {...props} />)

    expect(wrapper.find('.hint').length).toBe(1)
    expect(wrapper.find('.hint').text()).toBe(props.hint)
  })
})
