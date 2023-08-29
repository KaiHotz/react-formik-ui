import React, { FC, FocusEvent, AnimationEvent, CSSProperties, ReactNode } from 'react';
import { useField } from 'formik';

import WithLabel from '../WithLabel';

export interface IFormikUiInputProps {
  /** @ignore */
  onAnimationStart: (event: AnimationEvent<HTMLInputElement>) => void;
  /** Sets the Name of the Input Field */
  name: string;
  /** Function that is called when entering the focus */
  onFocus?: (event: FocusEvent<unknown>) => void;
  /** Function that is called when leaving the focus */
  onBlur?: (event: FocusEvent<unknown>) => void;
  /** Adds a custom class to the input element of the Input component */
  className?: string;
  /** Adds a custom inline styles to the input element */
  style?: CSSProperties;
  /** Sets an Id for the Input Field, if not passed, the id will be the name */
  id?: string;
  /** Sets the main Label for the Input Field */
  label?: ReactNode;
  /** Sets the Placeholder text */
  placeholder?: string;
  /** Defines the type of the Input Filed */
  type?: 'text' | 'color' | 'email' | 'hidden' | 'image' | 'number' | 'password' | 'range' | 'search' | 'tel' | 'url';
  /** Disables the Input Field */
  disabled?: boolean;
  /** Sets a hint text after/below the Input Field */
  hint?: ReactNode;
  /** Sets the field as requierd, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema */
  required?: boolean;
}

export const Input: FC<IFormikUiInputProps> = ({
  disabled,
  id,
  name,
  placeholder,
  type = 'text',
  onAnimationStart,
  onFocus,
  onBlur,
  className,
  style,
  ...rest
}) => {
  const [{ value, onChange }] = useField(name);

  return (
    <input
      {...rest}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      id={id || name}
      name={name}
      className={className}
      style={style}
      type={type}
      onAnimationStart={onAnimationStart}
      placeholder={placeholder}
      disabled={disabled}
      data-testid="fui-input"
    />
  );
};

export default WithLabel('input')(Input);
