import React from 'react'
import PropTypes from 'prop-types'
import { getIn } from 'formik'
import useLabel from '../useLabel'

export const Textarea = ({
  formik: {
    values, handleChange,
  },
  disabled,
  id,
  name,
  placeholder,
  onFocus,
  onBlur,
  className,
  ...rest
}) => (
  <textarea
    id={id || name}
    name={name}
    placeholder={placeholder}
    value={getIn(values, name)}
    onChange={handleChange}
    onFocus={onFocus}
    onBlur={onBlur}
    disabled={disabled}
    className={className}
    {...rest}
  />
)

Textarea.propTypes = {
  /** @ignore */
  formik: PropTypes.instanceOf(Object).isRequired,
  /** @ignore */
  onFocus: PropTypes.func.isRequired,
  /** @ignore */
  onBlur: PropTypes.func.isRequired,
  /** Adds a custom class to the Textarea component */
  className: PropTypes.string,
  /** Adds a custom inline styles to the Textarea wrapper div */
  style: PropTypes.instanceOf(Object),
  /** Disables the Textarea */
  disabled: PropTypes.bool,
  /** Sets an Id for the Textarea, if not passed, the id will be the name */
  id: PropTypes.string,
  /** Sets the main Label for the Textarea */
  label: PropTypes.string,
  /** Sets the Name of the Textarea */
  name: PropTypes.string.isRequired,
  /** Sets the Placeholder text */
  placeholder: PropTypes.string,
  /** Sets a hint text after/below the Textarea */
  hint: PropTypes.string,
  /** Sets the field as requierd, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema */
  required: PropTypes.bool,
}

Textarea.defaultProps = {
  className: null,
  style: null,
  disabled: false,
  id: null,
  label: null,
  placeholder: null,
  hint: null,
  required: false,
}

export default useLabel('textarea')(Textarea)
