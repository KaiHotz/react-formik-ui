import React, {
  FC, CSSProperties, ReactNode,
} from 'react'
import { useField } from 'formik'
import WithLabel from '../WithLabel'

export interface IFormikUiCheckboxProps {
  /** Sets the Name of the Checkbox */
  name: string;
  /** Sets an Id for the Checkbox, if not passed, the id will be the name */
  id?: string;
  /** Adds a custom class to the Checkbox input element */
  className?: string;
  /** Adds a custom inline styles to the Checkbox input element */
  style?: CSSProperties
  /** Sets the main Label for the Checkbox */
  label?: string;
  /** Sets a hint text after/below the Checkbox */
  hint?: string;
  /** Sets the text shown beside the checkbox */
  text?: string | ReactNode,
  /** Sets the Checkbox as requierd, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema */
  required?: boolean;
  /** Disables the Checkbox */
  disabled?: boolean;

}

export const Checkbox: FC<IFormikUiCheckboxProps> = ({
  disabled,
  id,
  name,
  text,
  className,
  style,
  ...rest
}) => {
  const [{ value, onChange }] = useField(name)

  return (
    <div className="checkbox-input-wrapper">
      <input
        {...rest}
        onChange={onChange}
        id={id || name}
        name={name}
        checked={value}
        className={className}
        style={style}
        disabled={disabled}
        type="checkbox"
      />
      <label
        htmlFor={name}
        className="checkbox-text"
      >
        {text}
      </label>
    </div>
  )
}

export default WithLabel('checkbox')(Checkbox)
