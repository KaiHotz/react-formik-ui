import React from 'react';
import { mount } from 'enzyme';
import { Form, Formik } from 'formik';
import WithLabel from '../WithLabel';
import { Textarea } from './Textarea';

// eslint-disable-next-line react/prop-types
const FormiWrapper = ({ children }) => (
  <Formik
    initialValues={{
      autocompleteTest: '',
    }}
  >
    <Form>{children}</Form>
  </Formik>
);

describe('<Textarea />', () => {
  const baseProps = {
    name: 'textAreaTest',
    value: '',
    onFocus: jest.fn(),
    onBlur: jest.fn(),
  };

  const WrappedComponent = WithLabel('textarea')(Textarea);

  it('should render', () => {
    const wrapper = mount(
      <FormiWrapper>
        <WrappedComponent {...baseProps} />
      </FormiWrapper>,
    );

    expect(wrapper).toBeDefined();
  });

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'Custom',
    };
    const wrapper = mount(
      <FormiWrapper>
        <WrappedComponent {...props} readOnly />
      </FormiWrapper>,
    );

    expect(wrapper.find('textarea').hasClass(props.className)).toBe(true);
  });

  it('should have a label', () => {
    const props = {
      ...baseProps,
      label: 'Custom Label',
    };
    const wrapper = mount(
      <FormiWrapper>
        <WrappedComponent {...props} readOnly />
      </FormiWrapper>,
    );

    expect(wrapper.find('.label').length).toBe(1);
  });

  it('should have a hint', () => {
    const props = {
      ...baseProps,
      hint: 'hintTest',
    };
    const wrapper = mount(
      <FormiWrapper>
        <WrappedComponent {...props} readOnly />
      </FormiWrapper>,
    );

    expect(wrapper.find('.hint').length).toBe(1);
    expect(wrapper.find('.hint').text()).toBe(props.hint);
  });
});
