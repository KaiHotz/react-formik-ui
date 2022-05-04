import React, { FC, FocusEvent, CSSProperties, ReactNode } from 'react';
import { useField } from 'formik';
import WithLabel from '../WithLabel';

export interface IFormikUiTextareaProps {
  /** Sets the Name of the Textarea */
  name: string;
  /** Function that is called when entering the focus */
  onFocus?: (event: FocusEvent<unknown>) => void;
  /** Function that is called when leaving the focus */
  onBlur?: (event: FocusEvent<unknown>) => void;
  /** Adds a custom class to the textarea element of the Textarea component */
  className?: string;
  /** Adds a custom inline styles to the Textarea element */
  style?: CSSProperties;
  /** Disables the Textarea */
  disabled?: boolean;
  /** Sets an Id for the Textarea, if not passed, the id will be the name */
  id?: string;
  /** Sets the main Label for the Textarea */
  label?: ReactNode;
  /** Sets the Placeholder text */
  placeholder?: string;
  /** Sets a hint text after/below the Textarea */
  hint?: ReactNode;
  /** Sets the field as requierd, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema */
  required?: boolean;
}

export const Textarea: FC<IFormikUiTextareaProps> = ({ disabled, id, name, placeholder, onFocus, onBlur, className, style, ...rest }) => {
  const [{ value, onChange }] = useField(name);

  return (
    <textarea
      onChange={onChange}
      {...rest}
      id={id || name}
      name={name}
      placeholder={placeholder}
      value={value}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      className={className}
      style={style}
      data-testid="fui-textarea"
    />
  );
};

export default WithLabel('textarea')(Textarea);
