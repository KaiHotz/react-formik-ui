import React, { FC, ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import { Form, Formik } from 'formik';

import { Toggle } from './Toggle';

const FormiWrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <Formik
    onSubmit={vi.fn()}
    initialValues={{
      toggleTest: false,
    }}
  >
    <Form>{children}</Form>
  </Formik>
);

describe('<Toggle />', () => {
  const baseProps = {
    name: 'toggleTest',
  };

  it('should render', () => {
    render(
      <FormiWrapper>
        <Toggle {...baseProps} />
      </FormiWrapper>,
    );

    expect(screen.getByTestId('fui-toggle')).toBeInTheDocument();
  });

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'Custom',
    };
    render(
      <FormiWrapper>
        <Toggle {...props} />
      </FormiWrapper>,
    );

    expect(screen.getByTestId('fui-toggle')).toHaveClass(props.className);
  });

  it('should be disabled', () => {
    render(
      <FormiWrapper>
        <Toggle {...baseProps} disabled />
      </FormiWrapper>,
    );

    expect(screen.getByTestId('fui-toggle')).toHaveClass('isDisabled');
    expect(screen.getByTestId('fui-toggle-input')).toHaveProperty('disabled');
  });
});
