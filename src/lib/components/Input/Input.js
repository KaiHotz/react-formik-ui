import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect, getIn } from 'formik'

export const Input = ({
  formik,
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
}) => {
  const {
    touched, errors, values, handleChange, handleBlur,
  } = formik
  const error = getIn(errors, name)
  const touch = getIn(touched, name)
  const errorMsg = touch && error ? error : null

  return (
    <div className={cx('form-element input-wrapper', className, { hasError: !!error, disabled })}>
      {
        label && (
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
        value={getIn(values, name, '')}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={disabled}
        {...rest}
      />
      {
        errorMsg && (
          <span className="error">
            {errorMsg}
          </span>
        )
      }
      {
        hint && (
          <span className="hint">
            {hint}
          </span>
        )
      }
    </div>
  )
}

Input.propTypes = {
  formik: PropTypes.object.isRequired,
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
    'url',
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

export default connect(Input)
