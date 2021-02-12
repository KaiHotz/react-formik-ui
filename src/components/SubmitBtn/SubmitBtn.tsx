import React, { FC, MouseEvent, memo, ReactNode } from 'react';
import cx from 'classnames';
import { useFormikContext } from 'formik';

export interface IFormikUiSubmitBtnProps {
  /** Adds a custom class to the SubmitBtn */
  className?: string;
  /** Disables the SubmitBtn */
  disabled?: boolean;
  /** sets aölternativley to children the teyt shown on the button */
  text?: string | number | ReactNode;
  /** Button Click handler */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const SubmitBtn: FC<IFormikUiSubmitBtnProps> = ({ className, disabled, children, onClick, text, ...rest }) => {
  const { isSubmitting } = useFormikContext();

  return (
    <button
      {...rest}
      type="submit"
      disabled={disabled || isSubmitting}
      onClick={onClick}
      className={cx('form-element btn submit-btn', className, { disabled })}
    >
      {children || text}
    </button>
  );
};

export default memo(SubmitBtn);
