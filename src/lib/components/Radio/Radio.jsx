import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { get } from '../../utils/helper'

const Radio = ({
  className,
  disabled,
  hint,
  label,
  name,
  options,
  required,
  ...rest
}, context) => {
  const { formik } = context
  const { touched, errors, values } = formik
  const error = get(touched, name) && get(errors, name)

  return (
    <div className={cx('form-element radio-wrapper', className, { hasError: !!error, disabled })}>
      {
        label &&
          <label htmlFor={name}>
            {`${label}${required ? ' *' : ''}`}
          </label>
      }
      {options.map(option => (
        <div key={option.label} className="radio-options">
          <input
            type="radio"
            checked={get(values, name) === option.value}
            id={`${name}-id-${option.value}`}
            value={option.value}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name={name}
            disabled={disabled}
            {...rest}
          />
          <label
            htmlFor={`${name}-id-${option.value}`}
          >
            {option.label}
          </label>
        </div>
      ))}
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

Radio.contextTypes = {
  formik: PropTypes.shape({}),
}

Radio.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hint: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
  })).isRequired,
  required: PropTypes.bool,
}

Radio.defaultProps = {
  className: null,
  disabled: false,
  hint: null,
  label: null,
  required: false,
}

export default Radio
