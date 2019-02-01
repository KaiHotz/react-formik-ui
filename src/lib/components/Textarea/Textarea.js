import React from 'react'
import PropTypes from 'prop-types'
import { connect, getIn } from 'formik'
import withLabel from '../withLabel'
import './styles.scss'

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
    {...rest}
  />
)

Textarea.propTypes = {
  /** @ignore */
  formik: PropTypes.object.isRequired,
  /** @ignore */
  onFocus: PropTypes.func.isRequired,
  /** @ignore */
  onBlur: PropTypes.func.isRequired,
  /** Adds a custom class to the Textarea wrapper div */
  className: PropTypes.string,
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
  disabled: false,
  id: null,
  label: null,
  placeholder: null,
  hint: null,
  required: false,
}

export default connect(withLabel('textarea')(Textarea))
