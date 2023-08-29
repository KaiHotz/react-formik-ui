import React, { FC, ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import { Form, Formik } from 'formik';

import { SubmitBtn } from './SubmitBtn';

const FormiWrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <Formik
    onSubmit={vi.fn()}
    initialValues={{
      testValue: '',
    }}
  >
    <Form>{children}</Form>
  </Formik>
);

describe('<SubmitBtn />', () => {
  it('should render', () => {
    render(
      <FormiWrapper>
        <SubmitBtn />
      </FormiWrapper>,
    );

    expect(screen.getByTestId('fui-submit-btn')).toBeInTheDocument();
  });

  it('should display children', () => {
    const props = {
      children: 'Content',
    };
    render(
      <FormiWrapper>
        <SubmitBtn {...props} />
      </FormiWrapper>,
    );

    expect(screen.getByText(/Content/i)).toBeInTheDocument();
  });

  it('should be disabled', () => {
    render(
      <FormiWrapper>
        <SubmitBtn disabled />
      </FormiWrapper>,
    );

    expect(screen.getByTestId('fui-submit-btn')).toHaveProperty('disabled');
  });

  it('should allow custom className', () => {
    const props = {
      className: 'Custom',
    };
    render(
      <FormiWrapper>
        <SubmitBtn {...props} />
      </FormiWrapper>,
    );

    expect(screen.getByTestId('fui-submit-btn')).toHaveClass(props.className);
  });
});
