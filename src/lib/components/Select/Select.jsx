import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { get } from '../../utils/helper'

const Select = ({
  className,
  disabled,
  hint,
  id,
  label,
  name,
  options,
  placeholder,
  required,
}, context) => {
  const { formik } = context
  const { touched, errors, values } = formik
  const error = get(touched, name) && get(errors, name)

  return (
    <div className={cx('form-element select-wrapper', className, { hasError: !!error, disabled })} >
      {
        label &&
        <label htmlFor={name}>
          {`${label}${required ? ' *' : ''}`}
        </label>
      }
      <select
        id={id || name}
        name={name}
        value={get(values, name)}
        disabled={disabled}
        onChange={formik.handleChange}
      >
        {
          placeholder &&
            <option value="">
              {placeholder}
            </option>
        }
        {
          options.map(opt => (
            <option
              key={opt.label}
              value={opt.value}
            >
              {opt.label}
            </option>
            ))
        }
      </select>
      {
        error &&
          <span className="error">
            {error}
          </span>
      }
      {
        hint &&
          <span className="hint">
            {hint}
          </span>
      }
    </div>
  )
}

Select.contextTypes = {
  formik: PropTypes.shape({}),
}

Select.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hint: PropTypes.string,
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
  className: null,
  disabled: false,
  hint: null,
  id: null,
  label: null,
  placeholder: null,
  required: false,
}

export default Select
