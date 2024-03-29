import React, { FC, memo } from 'react';
import cx from 'clsx';
import { Form as FormCmp, FormikFormProps } from 'formik';
import '../../styles/index.scss';

export interface IFormikUiFormProps extends FormikFormProps {
  className?: string;
  styling?: 'default' | 'structure' | 'theme';
}

export const Form: FC<IFormikUiFormProps> = ({
  children,
  /** Adds a custom class to the form element */
  className,
  /** Sets the styling of The Form Elemnts */
  styling = 'default',
  ...rest
}) => (
  <FormCmp {...rest} className={cx('react-formik-ui form-wrapper', styling, className)} data-testid="fui-form">
    {children}
  </FormCmp>
);

export default memo(Form);
