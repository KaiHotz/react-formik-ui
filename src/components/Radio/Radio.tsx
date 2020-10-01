import React, { FC, CSSProperties } from 'react'
import { useField } from 'formik'
import cx from 'classnames'
import WithLabel from '../WithLabel'

export interface IFormikUiRadioOption {
  label: string;
  value: string | number
}

export interface IFormikUiRadioProps {
  /** Sets the Name of the Radio Fields */
  name: string;
  /** Array in the shape of [ { value: string or number, label: string } ] */
  options: IFormikUiRadioOption[];
  /** Adds a custom class to each input element of the Radio component */
  className?: string;
  /** Adds a custom inline styles to the Radio input element */
  style?: CSSProperties;
  /** Disables the Radio Fields */
  disabled?: boolean;
  /** Sets the main Label for the Radio Fields */
  label?: string;
  /** Displays the radio option inline from left to right */
  inline?: boolean;
    /** Sets a hint text after/below the Radio component */
  hint?: string;
  /** Sets the field as requierd, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema */
  required?: boolean;
}

export const Radio: FC<IFormikUiRadioProps> = ({
  disabled,
  name,
  options,
  inline,
  className,
  style,
  ...rest
}) => {
  const [{ value, onChange }] = useField(name)

  return (
    <div className={cx('radio-options', { inline })}>
      {
        options.map(option => (
          <div key={option.label} className="radio-option">
            <input
              {...rest}
              className={className}
              style={style}
              onChange={onChange}
              checked={value === option.value}
              id={`${name}-id-${option.value}`}
              value={option.value}
              name={name}
              disabled={disabled}
              type="radio"
            />
            <label
              htmlFor={`${name}-id-${option.value}`}
            >
              {option.label}
            </label>
          </div>
        ))
      }
    </div>
  )
}

export default WithLabel('radio')(Radio)
