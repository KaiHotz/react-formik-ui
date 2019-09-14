import React from 'react'
import PropTypes from 'prop-types'
import { getIn } from 'formik'
import WithLabel from '../WithLabel'

export const Select = ({
  formik: {
    values, handleChange, setFieldValue,
  },
  disabled,
  id,
  label,
  name,
  options,
  placeholder,
  required,
  className,
  multiple,
  ...rest
}) => {
  const handleMultipleChange = evt => setFieldValue(
    name,
    [].slice
      .call(evt.target.selectedOptions)
      .map(option => option.value),
  )

  return (
    <select
      onChange={multiple ? handleMultipleChange : handleChange}
      {...rest}
      id={id || name}
      name={name}
      className={className}
      value={getIn(values, name)}
      disabled={disabled}
      multiple={multiple}
    >
      {
        placeholder && (
          <option value="">
            {`${placeholder}${!label && required ? ' *' : ''}`}
          </option>
        )
      }
      {
        options.map(option => (
          <option
            key={option.label}
            value={option.value}
          >
            {option.label}
          </option>
        ))
      }
    </select>
  )
}

Select.propTypes = {
  /** @ignore */
  formik: PropTypes.instanceOf(Object).isRequired,
  /** Adds a custom class to the select element of the Select component */
  className: PropTypes.string,
  /** Adds a custom inline styles to the Select wrapper div */
  style: PropTypes.instanceOf(Object),
  /** Disables the Select Field */
  disabled: PropTypes.bool,
  /** Sets an Id for the Select Field, if not passed, the id will be the name */
  id: PropTypes.string,
  /** Sets the main Label for the Select Field */
  label: PropTypes.string,
  /** Sets the Name of the Select Field */
  name: PropTypes.string.isRequired,
  /** Sets a Placeholder as the first option with no value */
  placeholder: PropTypes.string,
  /** Array in the shape of [ { value: string or number, label: string } ] */
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
  })).isRequired,
  /** Sets a hint text after/below the Select component */
  hint: PropTypes.string,
  /** Sets the field as requierd, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema */
  required: PropTypes.bool,
  /** Allowes multiple selection */
  multiple: PropTypes.bool,
}

Select.defaultProps = {
  className: null,
  style: null,
  disabled: false,
  id: null,
  label: null,
  placeholder: null,
  hint: null,
  required: false,
  multiple: false,
}

export default WithLabel('select')(Select)
