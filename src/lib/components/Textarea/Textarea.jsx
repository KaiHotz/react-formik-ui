import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { get } from '../../utils/helper'

const Textarea = ({
  name,
  placeholder,
  disabled,
  required,
  className,
  label,
  hint,
  ...rest
}, context) => {
  const { formik } = context
  const { touched, errors, values } = formik
  const error = get(touched, name) && get(errors, name)

  return (
    <div className={cx('form-element textarea-wrapper', className, { hasError: !!error, disabled })}>
      {label &&
      <label htmlFor={name}>
        {label} {required ? '*' : ''}
      </label>
      }
      <textarea
        id={name}
        name={name}
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

Textarea.contextTypes = {
  formik: PropTypes.shape({}),
}

Textarea.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
}

Textarea.defaultProps = {
  className: null,
  label: null,
  hint: null,
  disabled: false,
  placeholder: null,
  required: false,
}

export default Textarea
