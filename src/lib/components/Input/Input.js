import React from 'react'
import PropTypes from 'prop-types'
import { useFormikContext, getIn } from 'formik'
import WithLabel from '../WithLabel'

export const Input = ({
  disabled,
  id,
  name,
  placeholder,
  type,
  onAnimationStart,
  onFocus,
  onBlur,
  className,
  style,
  ...rest
}) => {
  const { values, handleChange } = useFormikContext()

  return (
    <input
      value={getIn(values, name)}
      onChange={handleChange}
      onFocus={onFocus}
      onBlur={onBlur}
      {...rest}
      id={id || name}
      name={name}
      className={className}
      style={style}
      type={type}
      onAnimationStart={onAnimationStart}
      placeholder={placeholder}
      disabled={disabled}
    />
  )
}

Input.propTypes = {
  /** @ignore */
  onAnimationStart: PropTypes.func.isRequired,
  /** Function that is called when entering the focus */
  onFocus: PropTypes.func,
  /** Function that is called when leaving the focus */
  onBlur: PropTypes.func,
  /** Adds a custom class to the input element of the Input component */
  className: PropTypes.string,
  /** Adds a custom inline styles to the input element */
  style: PropTypes.instanceOf(Object),
  /** Sets an Id for the Input Field, if not passed, the id will be the name */
  id: PropTypes.string,
  /** Sets the Name of the Input Field */
  name: PropTypes.string.isRequired,
  /** Sets the main Label for the Input Field */
  label: PropTypes.string,
  /** Sets the Placeholder text */
  placeholder: PropTypes.string,
  /** Defines the type of the Input Filed */
  type: PropTypes.oneOf([
    'text',
    'color',
    'email',
    'hidden',
    'image',
    'number',
    'password',
    'range',
    'search',
    'tel',
    'url',
  ]),
  /** Disables the Input Field */
  disabled: PropTypes.bool,
  /** Sets a hint text after/below the Input Field */
  hint: PropTypes.string,
  /** Sets the field as requierd, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema */
  required: PropTypes.bool,
}

Input.defaultProps = {
  onFocus: null,
  onBlur: null,
  className: null,
  style: null,
  disabled: false,
  id: null,
  label: null,
  placeholder: null,
  type: 'text',
  hint: null,
  required: false,
}

export default WithLabel('input')(Input)
