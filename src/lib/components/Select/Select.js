import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect, getIn } from 'formik'

import Label from '../Label'
import './styles.scss'

export const Select = ({
  formik: {
    values, handleChange,
  },
  className,
  disabled,
  hint,
  id,
  label,
  name,
  options,
  placeholder,
  required,
}) => (
  <div className={cx('form-element select-wrapper', className, { isDisabled: disabled })}>
    <Label
      name={name}
      disabled={disabled}
      text={label}
      required={required}
      hint={hint}
    >
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
    </Label>
  </div>
)

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
