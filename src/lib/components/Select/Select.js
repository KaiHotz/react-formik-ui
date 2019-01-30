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
}) => (
  <select
    id={id || name}
    name={name}
    value={getIn(values, name)}
    disabled={disabled}
    onChange={handleChange}
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
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
  })).isRequired,
  required: PropTypes.bool,
}

Select.defaultProps = {
  disabled: false,
  id: null,
  label: null,
  placeholder: null,
  required: false,
}

export default connect(withLabel('select')(Select))
