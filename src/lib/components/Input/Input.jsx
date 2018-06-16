import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { get } from '../../utils/helper'

const Input = ({
  name,
  type,
  label,
  className,
  placeholder,
  required,
  disabled,
  hint,
  ...rest
}, context) => {
  const { formik } = context
  const { touched, errors, values } = formik
  const error = get(touched, name) && get(errors, name)

  return (
    <div className={cx('form-element input-wrapper', className, { hasError: !!error, disabled })}>
      {
        label &&
          <label htmlFor={name}>
            {`${label}${required ? ' *' : ''}`}
          </label>
      }
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={get(values, name, '')}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        disabled={disabled}
        {...rest}
      />
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

Input.contextTypes = {
  formik: PropTypes.shape({}),
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  hint: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
  label: null,
  className: null,
  placeholder: null,
  required: false,
  disabled: false,
  hint: null,
}

export default Input
