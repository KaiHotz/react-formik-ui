/*eslint-disable*/
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { get } from '../../utils/helper'

const Input = ({
  className,
  disabled,
  hint,
  id,
  label,
  name,
  placeholder,
  required,
  type,
  ...rest
}, context) => {
  const { formik } = context
  const { touched, errors, values } = formik
  const error = get(touched, name) && get(errors, name)

  return (
    <div className={cx('form-element input-wrapper', className, { hasError: !!error, disabled })}>
      {
        label
          && (
          <label htmlFor={name}>
            {`${label}${required ? ' *' : ''}`}
          </label>
          )
      }
      <input
        id={id || name}
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
        error
          && (
          <span className="error">
            {error}
          </span>
          )
      }
      {
        hint
          && (
          <span className="hint">
            {hint}
          </span>
          )
      }
    </div>
  )
}

Input.contextTypes = {
  formik: PropTypes.shape({}),
}

Input.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hint: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.oneOf([
    'text',
    'color',
    'email',
    'hidden',
    'image',
    'number',
    'password',
    'range',
    'search',
    'tel',
    'url'
  ]),
}

Input.defaultProps = {
  className: null,
  disabled: false,
  hint: null,
  id: null,
  label: null,
  placeholder: null,
  required: false,
  type: 'text',
}

export default Input
