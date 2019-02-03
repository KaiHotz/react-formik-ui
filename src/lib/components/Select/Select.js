import React from 'react'
import PropTypes from 'prop-types'
import { connect, getIn } from 'formik'
import withLabel from '../withLabel'
import './styles.scss'

export const Select = ({
  formik: {
    values, handleChange,
  },
  disabled,
  id,
  label,
  name,
  options,
  placeholder,
  required,
  ...rest
}) => (
  <select
    id={id || name}
    name={name}
    value={getIn(values, name)}
    disabled={disabled}
    onChange={handleChange}
    {...rest}
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

Select.propTypes = {
  /** @ignore */
  formik: PropTypes.object.isRequired,
  /** Adds a custom class to the Select wrapper div */
  className: PropTypes.string,
  /** Adds a custom inline styles to the Select wrapper div */
  style: PropTypes.object,
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
}

export default connect(withLabel('select')(Select))
