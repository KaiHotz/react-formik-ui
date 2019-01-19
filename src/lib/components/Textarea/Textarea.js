import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect, getIn } from 'formik'

export const Textarea = ({
  formik,
  className,
  disabled,
  hint,
  id,
  label,
  name,
  placeholder,
  required,
  ...rest
}) => {
  const { touched, errors, values } = formik
  const error = getIn(errors, name)
  const touch = getIn(touched, name)
  const errorMsg = touch && error ? error : null

  return (
    <div className={cx('form-element textarea-wrapper', className, { hasError: !!error, disabled })}>
      {label
      && (
      <label htmlFor={name}>
        {label}
        {' '}
        {required ? '*' : ''}
      </label>
      )
      }
      <textarea
        id={id || name}
        name={name}
        placeholder={placeholder}
        value={getIn(values, name)}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        disabled={disabled}
        {...rest}
      />
      {
        errorMsg
          && (
          <span className="error">
            {errorMsg}
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

Textarea.propTypes = {
  formik: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hint: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
}

Textarea.defaultProps = {
  className: null,
  disabled: false,
  hint: null,
  id: null,
  label: null,
  placeholder: null,
  required: false,
}

export default connect(Textarea)
