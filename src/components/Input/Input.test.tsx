import React, { FC, ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import { Form, Formik } from 'formik';

import WithLabel from '../WithLabel';
import { Input } from './Input';

const FormiWrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <Formik
    onSubmit={vi.fn()}
    initialValues={{
      inputTest: '',
    }}
  >
    <Form>{children}</Form>
  </Formik>
);

describe('<Input />', () => {
  const baseProps = {
    name: 'inputTest',
    onFocus: vi.fn(),
    onBlur: vi.fn(),
    onAnimationStart: vi.fn(),
  };

  const WrappedComponent = WithLabel('input')(Input);

  it('should render', () => {
    render(
      <FormiWrapper>
        <WrappedComponent {...baseProps} />
      </FormiWrapper>,
    );

    expect(screen.getByTestId('fui-input')).toBeInTheDocument();
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

    expect(screen.getByTestId('fui-input')).toHaveClass(props.className);
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

    expect(screen.getByTestId('fui-input')).toHaveProperty('disabled');
  });
});
