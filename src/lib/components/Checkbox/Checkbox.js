import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect, getIn } from 'formik'

import Label from '../Label'
import './styles.scss'

export const Checkbox = ({
  formik,
  className,
  disabled,
  hint,
  id,
  label,
  name,
  required,
  text,
  ...rest
}) => {
  const {
    values, handleChange, handleBlur,
  } = formik

  return (
    <div className={cx('form-element checkbox-wrapper', className, { isDisabled: disabled })}>
      <Label
        name={name}
        disabled={disabled}
        text={label}
        required={required}
        className="checkbox-label"
        hint={hint}
      >
        <div className="checkbox-input-wrapper">
          <input
            id={id || name}
            name={name}
            type="checkbox"
            checked={getIn(values, name)}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={disabled}
            {...rest}
          />
          <label
            htmlFor={name}
            className="checkbox-text"
          >
            {text}
          </label>
        </div>
      </Label>
    </div>
  )
}

Checkbox.propTypes = {
  formik: PropTypes.object.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hint: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
}

Checkbox.defaultProps = {
  className: null,
  disabled: false,
  hint: null,
  id: null,
  label: null,
  required: false,
  text: null,
}

export default connect(Checkbox)
