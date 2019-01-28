import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect, getIn } from 'formik'

import './styles.scss'

export const Select = ({
  formik,
  className,
  disabled,
  hint,
  id,
  label,
  name,
  options,
  placeholder,
  required,
}) => {
  const {
    touched, errors, values, handleChange,
  } = formik
  const error = getIn(errors, name)
  const touch = getIn(touched, name)
  const errorMsg = touch && error ? error : null

  return (
    <div className={cx('form-element select-wrapper', className, { hasError: !!errorMsg, isDisabled: disabled })}>
      {
        label && (
        <label htmlFor={name}>
          {`${label}${required ? ' *' : ''}`}
        </label>
        )
      }
      <div className="select-container">
        <select
          id={id || name}
          name={name}
          value={getIn(values, name)}
          disabled={disabled}
          onChange={handleChange}
        >
          {
            placeholder && (
              <option value="">
                {`${placeholder}${!label && required ? ' *' : ''}`}
              </option>
            )
          }
          {
            options.map(option => (
              <option
                key={option.label}
                value={option.value}
              >
                {option.label}
              </option>
            ))
          }
        </select>
      </div>
      {
        !!errorMsg && (
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

Select.propTypes = {
  formik: PropTypes.object.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hint: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
  })).isRequired,
  required: PropTypes.bool,
}

Select.defaultProps = {
  className: null,
  disabled: false,
  hint: null,
  id: null,
  label: null,
  placeholder: null,
  required: false,
}

export default connect(Select)
