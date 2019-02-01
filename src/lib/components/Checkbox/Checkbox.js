import React from 'react'
import PropTypes from 'prop-types'
import { connect, getIn } from 'formik'
import withLabel from '../withLabel'
import './styles.scss'

export const Checkbox = ({
  formik: {
    values, handleChange, handleBlur,
  },
  disabled,
  id,
  name,
  text,
  ...rest
}) => (
  <div className="checkbox-input-wrapper">
    <input
      id={id || name}
      name={name}
      type="checkbox"
      checked={getIn(values, name)}
      onChange={handleChange}
      onBlur={handleBlur}
      disabled={disabled}
      {...rest}
    />
    <label
      htmlFor={name}
      className="checkbox-text"
    >
      {text}
    </label>
  </div>
)

Checkbox.propTypes = {
  /** @ignore */
  formik: PropTypes.object.isRequired,
  /** Sets an Id for the Checkbox, if not passed, the id will be the name */
  id: PropTypes.string,
  /** Sets the Name of the Checkbox */
  name: PropTypes.string.isRequired,
  /** Adds a custom class to the Checkbox wrapper div */
  className: PropTypes.string,
  /** Sets the main Label for the Checkbox */
  label: PropTypes.string,
  /** Sets a hint text after/below the Checkbox */
  hint: PropTypes.string,
  /** Sets the text shown beside the checkbox */
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Sets the Checkbox as requierd, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema */
  required: PropTypes.bool,
  /** Disables the Checkbox */
  disabled: PropTypes.bool,
}

Checkbox.defaultProps = {
  id: null,
  className: null,
  label: null,
  hint: null,
  text: null,
  required: false,
  disabled: false,
}

export default connect(withLabel('checkbox')(Checkbox))
