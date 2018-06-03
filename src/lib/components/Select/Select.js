import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { get } from '../../utils/helper'

class Select extends Component {
  static contextTypes = {
    formik: PropTypes.shape({})
  }

  static propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired
    })).isRequired,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string
  }

  static defaultProps = {
    label: null,
    placeholder: null,
    required: false,
    disabled: false,
    className: null
  }

  onChange = event => {
    const { formik } = this.context
    const { name, value } = event.target

    formik.setFieldValue(name, value)
    formik.setFieldTouched(name, true)
  }

  render () {
    const {
      label,
      name,
      placeholder,
      options,
      required,
      disabled,
      className
    } = this.props
    const { formik } = this.context
    const { touched, errors, values } = formik
    const error = get(errors, name)

    return (
      <div className={cx('select-wrapper', className, { 'hasError': error })} >
        {
          label &&
          <label htmlFor={name}>
            {`${label}${required ? ' *' : ''}`}
          </label>
        }
        <select
          id={name}
          name={name}
          value={get(values, name)}
          disabled={disabled}
          onChange={this.onChange}
        >
          {
            placeholder &&
            <option value=''>
              {placeholder}
            </option>
          }
          {
            options.map(opt => {
              return (
                <option
                  key={opt.label}
                  value={opt.value}
                >
                  {opt.label}
                </option>
              )
            })
          }
        </select>
        {
          error &&
          <span className='error'>
            {get(touched, name) && error}
          </span>
        }
      </div>
    )
  }
}

export default Select
