import React, { FC, ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { Formik } from 'formik';
import { Form } from './Form';

const FormiWrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <Formik
    onSubmit={jest.fn()}
    initialValues={{
      formTest: '',
    }}
  >
    {children}
  </Formik>
);

describe('<Form />', () => {
  const baseProps = {
    children: 'dwadaw',
  };

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'Custom',
    };
    render(
      <FormiWrapper>
        <Form {...props} />
      </FormiWrapper>,
    );

    expect(screen.getByTestId('fui-form')).toHaveClass(props.className);
  });

  it('should show children', () => {
    render(
      <FormiWrapper>
        <Form {...baseProps} />
      </FormiWrapper>,
    );

    expect(screen.getByText(/dwadaw/i)).toBeInTheDocument();
  });
});
