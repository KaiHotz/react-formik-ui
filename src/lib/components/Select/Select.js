import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { get } from '../../utils/helper'

const Select = ({
  label,
  name,
  placeholder,
  hint,
  options,
  required,
  disabled,
  className
}, context) => {
  const { formik } = context
  const { touched, errors, values } = formik
  const error = get(touched, name) && get(errors, name)

  return (
    <div className={cx('form-element select-wrapper', className, { 'hasError': !!error })} >
      {
        label &&
        <label htmlFor={name}>
          {`${label}${required ? ' *' : ''}`}
        </label>
      }
      <select
        id={name}
        name={name}
        value={get(values, name)}
        disabled={disabled}
        onChange={formik.handleChange}
      >
        {
          placeholder &&
            <option value=''>
              {placeholder}
            </option>
        }
        {
          options.map(opt => {
            return (
              <option
                key={opt.label}
                value={opt.value}
              >
                {opt.label}
              </option>
            )
          })
        }
      </select>
      {
        error &&
          <span className='error'>
            {error}
          </span>
      }
      {
        hint &&
          <span className='hint'>
            {hint}
          </span>
      }
    </div>
  )
}

Select.contextTypes = {
  formik: PropTypes.shape({})
}

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  hint: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired
  })).isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string
}

Select.defaultProps = {
  label: null,
  placeholder: null,
  hint: null,
  required: false,
  disabled: false,
  className: null
}

export default Select
