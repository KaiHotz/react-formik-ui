import React, { FC, ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { Form, Formik } from 'formik';
import WithLabel from '../WithLabel';
import { DropZone } from './DropZone';

const FormiWrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <Formik
    onSubmit={jest.fn()}
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
    render(
      <FormiWrapper>
        <WrappedComponent {...baseProps} />
      </FormiWrapper>,
    );

    expect(screen.getByTestId('fui-dropzone')).toBeInTheDocument();
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
});
