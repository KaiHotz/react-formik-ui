import React, { FC, ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { Form, Formik } from 'formik';
import Radio from './Radio';

const FormiWrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <Formik
    onSubmit={jest.fn()}
    initialValues={{
      radioTest: '0',
    }}
  >
    <Form>{children}</Form>
  </Formik>
);

describe('<Radio />', () => {
  const baseProps = {
    name: 'radioTest',
    options: [
      { value: '0', label: 'Option 1' },
      { value: '1', label: 'Option 2' },
      { value: '2', label: 'Option 3' },
    ],
  };

  it('should render', () => {
    render(
      <FormiWrapper>
        <Radio {...baseProps} />
      </FormiWrapper>,
    );

    expect(screen.getByTestId('fui-radio')).toBeInTheDocument();
  });

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'Custom',
    };

    render(
      <FormiWrapper>
        <Radio {...props} readOnly />
      </FormiWrapper>,
    );

    screen.getAllByTestId('fui-radio-item').forEach((node) => {
      expect(node).toHaveClass(props.className);
    });
  });

  it('should have a hint', () => {
    const props = {
      ...baseProps,
      hint: 'hintTest',
    };
    render(
      <FormiWrapper>
        <Radio {...props} readOnly />
      </FormiWrapper>,
    );

    expect(screen.getByText(props.hint)).toBeInTheDocument();
  });

  it('should be disabled', () => {
    render(
      <FormiWrapper>
        <Radio {...baseProps} disabled />
      </FormiWrapper>,
    );

    screen.getAllByTestId('fui-radio-item').forEach((node) => {
      expect(node).toHaveProperty('disabled');
    });
  });
});
