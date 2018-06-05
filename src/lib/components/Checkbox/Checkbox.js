import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { get } from '../../utils/helper'

const Checkbox = ({
  hint,
  className,
  required,
  disabled,
  label,
  name,
  text,
  ...rest
}, context) => {
  const { formik } = context
  const { touched, errors, values } = formik
  const error = get(touched, name) && get(errors, name)

  return (
    <div className={cx('form-element checkbox-wrapper', className, { 'hasError': !!error })}>
      {
        label &&
          <label
            htmlFor={name}
            className='checkbox-label'
          >
            {`${label}${required ? ' *' : ''}`}
          </label>
      }
      <div className='checkbox-input-wrapper'>
        <input
          id={name}
          name={name}
          type="checkbox"
          checked={get(values, name)}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={disabled}
          {...rest}
        />
        <label
          htmlFor={name}
          className='checkbox-text'
        >
          {text}
        </label>
      </div>
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

Checkbox.contextTypes = {
  formik: PropTypes.shape({})
}

Checkbox.propTypes = {
  hint: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
}

Checkbox.defaultProps = {
  hint: null,
  className: null,
  required: false,
  disabled: false,
  label: null,
  text: null
}

export default Checkbox
