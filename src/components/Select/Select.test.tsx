import React, { FC, ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { Form, Formik } from 'formik';
import WithLabel from '../WithLabel';
import { Select } from './Select';

const FormiWrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <Formik
    onSubmit={jest.fn()}
    initialValues={{
      selectTest: '',
    }}
  >
    <Form>{children}</Form>
  </Formik>
);

describe('<Select />', () => {
  const baseProps = {
    name: 'selectTest',
    options: [
      { value: '0', label: 'Option 1' },
      { value: '1', label: 'Option 2' },
      { value: '2', label: 'Option 3' },
    ],
  };

  const WrappedComponent = WithLabel('select')(Select);

  it('should render', () => {
    render(
      <FormiWrapper>
        <WrappedComponent {...baseProps} />
      </FormiWrapper>,
    );

    expect(screen.getByTestId('fui-select')).toBeInTheDocument();
  });

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'customClass',
    };
    render(
      <FormiWrapper>
        <WrappedComponent {...props} />
      </FormiWrapper>,
    );

    expect(screen.getByTestId('fui-select')).toHaveClass(props.className);
  });

  it('should have a label', () => {
    const props = {
      ...baseProps,
      label: 'Custom',
    };
    render(
      <FormiWrapper>
        <WrappedComponent {...props} />
      </FormiWrapper>,
    );

    expect(screen.getByText(props.label)).toBeInTheDocument();
  });

  it('should have a placeholder', () => {
    const props = {
      ...baseProps,
      placeholder: 'Custom',
    };
    render(
      <FormiWrapper>
        <WrappedComponent {...props} />
      </FormiWrapper>,
    );

    expect(screen.getAllByTestId('fui-select-option')[0]).toHaveTextContent(props.placeholder);
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

  it('should be disabled', () => {
    render(
      <FormiWrapper>
        <WrappedComponent {...baseProps} disabled />
      </FormiWrapper>,
    );

    expect(screen.getByTestId('fui-select')).toHaveProperty('disabled');
  });
});
