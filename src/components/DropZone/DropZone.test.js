import React from 'react';
import { mount } from 'enzyme';
import { Form, Formik } from 'formik';
import WithLabel from '../WithLabel';
import { DropZone } from './DropZone';

// eslint-disable-next-line react/prop-types
const FormiWrapper = ({ children }) => (
  <Formik
    initialValues={{
      DropZoneTest: [],
    }}
  >
    <Form>{children}</Form>
  </Formik>
);

describe('<DropZone />', () => {
  const baseProps = {
    name: 'DropZoneTest',
  };

  const WrappedComponent = WithLabel('dropzone')(DropZone);

  it('should render', () => {
    const wrapper = mount(
      <FormiWrapper>
        <WrappedComponent {...baseProps} />
      </FormiWrapper>,
    );

    expect(wrapper).toBeDefined();
  });

  it('should have a label', () => {
    const props = {
      ...baseProps,
      label: 'Custom',
    };

    const wrapper = mount(
      <FormiWrapper>
        <WrappedComponent {...props} />
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
        <WrappedComponent {...props} />
      </FormiWrapper>,
    );

    expect(wrapper.find('.hint').length).toBe(1);
    expect(wrapper.find('.hint').text()).toBe(props.hint);
  });
});
