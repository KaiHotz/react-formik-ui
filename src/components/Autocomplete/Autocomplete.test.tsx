import React, { FC, ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { Form, Formik } from 'formik';
import WithLabel from '../WithLabel';
import { Autocomplete } from './Autocomplete';

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

describe('<Autocomplete />', () => {
  const baseProps = {
    name: 'autocompleteTest',
    suggestions: ['Afghanistan', 'Aland Islands', 'Albania', 'Algeria'],
  };

  const WrappedComponent = WithLabel('autocomplete')(Autocomplete);

  it('should render', () => {
    render(
      <FormiWrapper>
        <Autocomplete {...baseProps} />
      </FormiWrapper>,
    );

    expect(screen.getByTestId('fui-autocomplete')).toBeInTheDocument();
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

    expect(screen.getByTestId('fui-autocomplete')).toHaveClass(props.className);
  });

  it('should be disabled', () => {
    render(
      <FormiWrapper>
        <WrappedComponent {...baseProps} disabled />
      </FormiWrapper>,
    );

    expect(screen.getByTestId('fui-autocomplete')).toHaveProperty('disabled');
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
