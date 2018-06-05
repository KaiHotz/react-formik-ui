import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { get } from '../../utils/helper'

const Radio = ({
  disabled,
  name,
  label,
  options,
  hint,
  required,
  className,
  ...rest
}, context) => {
  const { formik } = context
  const { touched, errors, values } = formik
  const error = get(touched, name) && get(errors, name)

  return (
    <div className={cx('form-element radio-wrapper', className, { 'hasError': !!error })}>
      {
        label &&
          <label htmlFor={name}>
            {`${label}${required ? ' *' : ''}`}
          </label>
      }
      {options.map((option, i) => (
        <div key={option.label} className='radio-options'>
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
        hint &&
            <span className='hint'>
              {hint}
            </span>
      }
      {
        error &&
            <span className='error'>
              {error}
            </span>
      }
    </div>
  )
}

Radio.contextTypes = {
  formik: PropTypes.shape({})
}

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
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
  required: PropTypes.bool
}

Radio.defaultProps = {
  label: null,
  hint: null,
  className: null,
  disabled: false,
  required: false
}

export default Radio
