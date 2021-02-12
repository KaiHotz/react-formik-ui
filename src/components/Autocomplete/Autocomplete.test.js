import React from 'react';
import { mount } from 'enzyme';
import { Form, Formik } from 'formik';
import WithLabel from '../WithLabel';
import { Autocomplete } from './Autocomplete';

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

describe('<Autocomplete />', () => {
  const baseProps = {
    name: 'autocompleteTest',
    suggestions: ['Afghanistan', 'Aland Islands', 'Albania', 'Algeria'],
  };

  const WrappedComponent = WithLabel('autocomplete')(Autocomplete);

  it('should render', () => {
    const wrapper = mount(
      <FormiWrapper>
        <Autocomplete {...baseProps} />
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
        <WrappedComponent {...props} />
      </FormiWrapper>,
    );

    expect(wrapper.find('input').hasClass(props.className)).toBe(true);
  });

  it('should be disabled', () => {
    const wrapper = mount(
      <FormiWrapper>
        <WrappedComponent {...baseProps} disabled />
      </FormiWrapper>,
    );

    expect(wrapper.find('input').prop('disabled')).toBe(true);
  });

  it('should have a hint', () => {
    const props = {
      ...baseProps,
      hint: 'hintTest',
    };
    const wrapper = mount(
      <FormiWrapper>
        <WrappedComponent {...props} />
      </FormiWrapper>,
    );

    expect(wrapper.find('.hint').length).toBe(1);
    expect(wrapper.find('.hint').text()).toBe(props.hint);
  });
});
