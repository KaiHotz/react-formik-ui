import React from 'react'
import { shallow, mount } from 'enzyme'
import withLabel from '../withLabel'
import { DropZone } from './DropZone'

describe('<DropZone />', () => {
  const baseProps = {
    name: 'DropZoneTest',
    formik: {
      handleChange: jest.fn(),
      handleBlur: jest.fn(),
      setFieldValue: jest.fn(),
      setFieldTouched: jest.fn(),
      touched: {},
      errors: {},
      values: {
        files: [],
      },
    },
  }

  const WrappedComponent = withLabel('dropzone')(DropZone)

  it('should render', () => {
    const wrapper = shallow(<WrappedComponent {...baseProps} />)

    expect(wrapper).toBeDefined()
  })

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'customDropZone',
    }
    const wrapper = mount(<WrappedComponent {...props} />)

    expect(wrapper.hasClass(props.className)).toBe(true)
  })

  it('should be disabled', () => {
    const wrapper = shallow(<WrappedComponent {...baseProps} disabled />)

    expect(wrapper.prop('className').includes('disabled'))
  })

  it('should have a label', () => {
    const props = {
      ...baseProps,
      label: 'Custom',
    }

    const wrapper = mount(<WrappedComponent {...props} />)

    expect(wrapper.find('label').length).toBe(1)
  })

  it('should have a hint', () => {
    const props = {
      ...baseProps,
      hint: 'hintTest',
    }
    const wrapper = mount(<WrappedComponent {...props} />)

    expect(wrapper.find('.hint').length).toBe(1)
    expect(wrapper.find('.hint').text()).toBe(props.hint)
  })
})
