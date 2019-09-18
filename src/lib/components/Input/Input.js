import React from 'react'
import PropTypes from 'prop-types'
import { getIn } from 'formik'
import WithLabel from '../WithLabel'

export const Input = ({
  formik: {
    values, handleChange,
  },
  disabled,
  id,
  name,
  placeholder,
  type,
  onAnimationStart,
  onFocus,
  onBlur,
  className,
  ...rest
}) => (
  <input
    value={getIn(values, name)}
    onChange={handleChange}
    {...rest}
    id={id || name}
    name={name}
    className={className}
    type={type}
    onAnimationStart={onAnimationStart}
    placeholder={placeholder}
    onFocus={onFocus}
    onBlur={onBlur}
    disabled={disabled}
  />
)

Input.propTypes = {
  /** @ignore */
  formik: PropTypes.instanceOf(Object).isRequired,
  /** @ignore */
  onAnimationStart: PropTypes.func.isRequired,
  /** @ignore */
  onFocus: PropTypes.func.isRequired,
  /** @ignore */
  onBlur: PropTypes.func.isRequired,
  /** Adds a custom class to the input element of the Input component */
  className: PropTypes.string,
  /** Adds a custom inline styles to the Input wrapper div */
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
