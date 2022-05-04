import React, { FC, ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { Form, Formik } from 'formik';
import WithLabel from '../WithLabel';
import { Textarea } from './Textarea';

const FormiWrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <Formik
    onSubmit={jest.fn()}
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
    render(
      <FormiWrapper>
        <WrappedComponent {...baseProps} />
      </FormiWrapper>,
    );

    expect(screen.getByTestId('fui-textarea')).toBeInTheDocument();
  });

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'Custom',
    };
    render(
      <FormiWrapper>
        <WrappedComponent {...props} readOnly />
      </FormiWrapper>,
    );

    expect(screen.getByTestId('fui-textarea')).toHaveClass(props.className);
  });

  it('should have a label', () => {
    const props = {
      ...baseProps,
      label: 'Custom Label',
    };
    render(
      <FormiWrapper>
        <WrappedComponent {...props} readOnly />
      </FormiWrapper>,
    );

    expect(screen.getByText(props.label)).toBeInTheDocument();
  });

  it('should have a hint', () => {
    const props = {
      ...baseProps,
      hint: 'hintTest',
    };
    render(
      <FormiWrapper>
        <WrappedComponent {...props} readOnly />
      </FormiWrapper>,
    );

    expect(screen.getByText(props.hint)).toBeInTheDocument();
  });
});
