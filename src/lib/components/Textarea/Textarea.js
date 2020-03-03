import React from 'react'
import PropTypes from 'prop-types'
import { useFormikContext, getIn } from 'formik'
import WithLabel from '../WithLabel'

export const Textarea = ({
  disabled,
  id,
  name,
  placeholder,
  onFocus,
  onBlur,
  className,
  style,
  ...rest
}) => {
  const { values, handleChange } = useFormikContext()

  return (
    <textarea
      onChange={handleChange}
      {...rest}
      id={id || name}
      name={name}
      placeholder={placeholder}
      value={getIn(values, name)}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      className={className}
      style={style}
    />
  )
}

Textarea.propTypes = {
  /** Function that is called when entering the focus */
  onFocus: PropTypes.func,
  /** Function that is called when leaving the focus */
  onBlur: PropTypes.func,
  /** Adds a custom class to the textarea element of the Textarea component */
  className: PropTypes.string,
  /** Adds a custom inline styles to the Textarea element */
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
  onFocus: null,
  onBlur: null,
  className: null,
  style: null,
  disabled: false,
  id: null,
  label: null,
  placeholder: null,
  hint: null,
  required: false,
}

export default WithLabel('textarea')(Textarea)
