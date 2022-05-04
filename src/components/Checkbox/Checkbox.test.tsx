import React, { FC, ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { Form, Formik } from 'formik';
import WithLabel from '../WithLabel';
import { Checkbox } from './Checkbox';

const FormiWrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <Formik
    onSubmit={jest.fn()}
    initialValues={{
      checkboxTest: false,
    }}
  >
    <Form>{children}</Form>
  </Formik>
);

describe('<Checkbox />', () => {
  const baseProps = {
    name: 'checkboxTest',
  };

  const WrappedComponent = WithLabel('checkbox')(Checkbox);

  it('should render', () => {
    render(
      <FormiWrapper>
        <WrappedComponent {...baseProps} />
      </FormiWrapper>,
    );

    expect(screen.getByTestId('fui-checkbox')).toBeInTheDocument();
  });

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'Custom',
    };
    render(
      <FormiWrapper>
        <WrappedComponent {...props} />
      </FormiWrapper>,
    );

    expect(screen.getByTestId('fui-checkbox')).toHaveClass(props.className);
  });

  it('should be disabled', () => {
    render(
      <FormiWrapper>
        <WrappedComponent {...baseProps} disabled />
      </FormiWrapper>,
    );

    expect(screen.getByTestId('fui-checkbox')).toHaveProperty('disabled');
  });

  it('should have a hint', () => {
    const props = {
      ...baseProps,
      hint: 'hintTest',
    };
    render(
      <FormiWrapper>
        <WrappedComponent {...props} />
      </FormiWrapper>,
    );

    expect(screen.getByText(props.hint)).toBeInTheDocument();
  });
});
