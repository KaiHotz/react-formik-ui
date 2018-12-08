import React from 'react';
import { shallow, mount } from 'enzyme';
import Input from './Input';

describe('<Input />', () => {
  const context = {
    formik: {
      handleChange: jest.fn(),
      handleBlur: jest.fn(),
      setFieldValue: jest.fn(),
      setFieldTouched: jest.fn(),
      touched: {},
      errors: {},
      values: {
        inputTest: '',
      },
    },
  };

  const baseProps = {
    name: 'inputTest',
  };

  it('should render', () => {
    const wrapper = shallow(<Input {...baseProps} />, { context });

    expect(wrapper).toBeDefined();
  });

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'Custom',
    };
    const wrapper = shallow(<Input {...props} />, { context });

    expect(wrapper.hasClass(props.className)).toBe(true);
  });

  it('should have custom type', () => {
    const props = {
      ...baseProps,
      type: 'text',
    };
    const wrapper = mount(<Input {...props} />, { context });

    expect(wrapper.find('input').prop('type')).toBe(props.type);
  });

  it('should have a label', () => {
    const props = {
      ...baseProps,
      label: 'Custom',
    };
    const wrapper = shallow(<Input {...props} />, { context });

    expect(wrapper.find('label').length).toBe(1);
  });

  it('should have a hint', () => {
    const props = {
      ...baseProps,
      hint: 'hintTest',
    };
    const wrapper = shallow(<Input {...props} />, { context });

    expect(wrapper.find('.hint').length).toBe(1);
    expect(wrapper.find('.hint').text()).toBe(props.hint);
  });

  it('should be disabled', () => {
    const wrapper = shallow(<Input {...baseProps} disabled />, { context });

    expect(wrapper.find('input').prop('disabled')).toBe(true);
    expect(wrapper.prop('className').includes('disabled'));
  });

  it('should call onChange', () => {
    const wrapper = mount(<Input {...baseProps} />, { context });
    wrapper.find('input').simulate('change');

    expect(context.formik.handleChange).toHaveBeenCalled();
  });
});
