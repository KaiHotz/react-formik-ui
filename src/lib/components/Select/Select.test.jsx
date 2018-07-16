import React from 'react'
import { shallow, mount } from 'enzyme'
import Select from './Select'
import { context } from '../../__mocks__/context'

jest.mock('../../__mocks__/Provider')

describe('<Select />', () => {
  const baseProps = {
    name: 'selectTest',
    placeholder: 'Placeholder',
    options: [
      { value: '0', label: 'Option 1' },
      { value: '1', label: 'Option 2' },
      { value: '2', label: 'Option 3' },
    ],
  }

  it('should render', () => {
    const wrapper = shallow(<Select {...baseProps} />)

    expect(wrapper).toBeDefined()
  })

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'customClass',
    }
    const wrapper = shallow(<Select {...props} />)

    expect(wrapper.hasClass(props.className)).toBe(true)
  })

  it('should have a label', () => {
    const props = {
      ...baseProps,
      label: 'Custom',
    }
    const wrapper = shallow(<Select {...props} />)

    expect(wrapper.find('label').length).toBe(1)
  })

  it('should have a hint', () => {
    const props = {
      ...baseProps,
      hint: 'hintTest',
    }
    const wrapper = shallow(<Select {...props} />)

    expect(wrapper.find('.hint').length).toBe(1)
    expect(wrapper.find('.hint').text()).toBe(props.hint)
  })


  it('should be disabled', () => {
    const wrapper = shallow(<Select {...baseProps} disabled />)

    expect(wrapper.find('select').prop('disabled')).toBe(true)
    expect(wrapper.prop('className').includes('disabled'))
  })

  it('should call onChange', () => {
    const wrapper = mount(<Select {...baseProps} />)
    wrapper.find('select').simulate('change')

    expect(context.formik.handleChange).toHaveBeenCalled()
  })
})
