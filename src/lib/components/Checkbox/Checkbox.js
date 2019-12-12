import React from 'react'
import PropTypes from 'prop-types'
import { useFormikContext, getIn } from 'formik'
import WithLabel from '../WithLabel'

export const Checkbox = ({
  disabled,
  id,
  name,
  text,
  className,
  style,
  ...rest
}) => {
  const { values, setFieldValue, setFieldTouched } = useFormikContext()
  const handleChange = () => {
    setFieldValue(name, !getIn(values, name))
    setFieldTouched(name, true)
  }

  return (
    <div className="checkbox-input-wrapper">
      <input
        onChange={handleChange}
        {...rest}
        id={id || name}
        name={name}
        checked={getIn(values, name)}
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

Checkbox.propTypes = {
  /** Sets the Name of the Checkbox */
  name: PropTypes.string.isRequired,
  /** Sets an Id for the Checkbox, if not passed, the id will be the name */
  id: PropTypes.string,
  /** Adds a custom class to the Checkbox input element */
  className: PropTypes.string,
  /** Adds a custom inline styles to the Checkbox input element */
  style: PropTypes.instanceOf(Object),
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
  style: null,
  label: null,
  hint: null,
  text: null,
  required: false,
  disabled: false,
}

export default WithLabel('checkbox')(Checkbox)
