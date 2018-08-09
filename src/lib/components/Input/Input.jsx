import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'formik'
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
  formik,
  ...rest
}) => {
  const {
    touched, errors, values, handleChange, handleBlur,
  } = formik
  const error = get(touched, name) && get(errors, name)

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
        value={get(values, name, '')}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={disabled}
        {...rest}
      />
      {
        error && (
          <span className="error">
            {error}
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
  type: PropTypes.string,
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
