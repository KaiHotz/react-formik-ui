import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import DatePickerCmp from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import cx from 'classnames'
import { FormikConsumer } from 'formik'
import { get } from '../../utils/helper'

class Datepicker extends Component {
  static propTypes = {
    className: PropTypes.string,
    dateFormat: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    disabled: PropTypes.bool,
    hint: PropTypes.string,
    label: PropTypes.string,
    maxDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    minDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
  }

  static defaultProps = {
    className: null,
    dateFormat: [
      'DD.MM.YYYY',
      'D.M.YYYY',
      'MM/DD/YYYY',
      'M/D/YYYY',
    ],
    disabled: false,
    hint: null,
    label: null,
    maxDate: null,
    minDate: null,
    placeholder: null,
    required: false,
  }

  handleChangeRaw = formik => event => {
    const { name, value } = event.target

    const validChars = /^\d{0,2}[.]{0,1}\d{0,2}[.]{0,1}\d{0,4}$/
    if (!validChars.test(value)) {
      event.preventDefault()

      return
    }

    const momentDate = moment(
      value,
      this.props.dateFormat,
      true,
    )

    const updatedValue = momentDate.isValid() ? momentDate.format('YYYY-MM-DD') : ''

    formik.setFieldValue(name, updatedValue)
    formik.setFieldTouched(name, true)
  }

  handleChange = formik => momentDate => {
    const { name } = this.props
    const value = momentDate ? momentDate.format('YYYY-MM-DD') : ''

    formik.setFieldValue(name, value)
    formik.setFieldTouched(name, true)
  }

  handleFocus = name => () => {
    document.getElementById(name).focus()
  }

  render() {
    const {
      className,
      dateFormat,
      disabled,
      hint,
      label,
      maxDate,
      minDate,
      name,
      placeholder,
      required,
      ...rest
    } = this.props

    return (
      <FormikConsumer>
        {
          formik => {
            const { touched, errors, values } = formik
            const momentDate = moment(get(values, name))
            const error = get(touched, name) && get(errors, name)

            return (
              <div className={cx('form-element datePicker-wrapper', className, { hasError: !!error, disabled })}>
                {
                  label && (
                    <label
                      htmlFor={name}
                      onClick={this.handleFocus(name)}
                      onKeyPress={this.handleFocus(name)}
                      role="none"
                    >
                      {`${label}${required ? ' *' : ''}`}
                    </label>
                  )
                }
                <DatePickerCmp
                  id={name}
                  name={name}
                  selected={momentDate.isValid() ? momentDate : null}
                  minDate={moment(minDate)}
                  maxDate={moment(maxDate)}
                  placeholderText={placeholder}
                  dateFormat={dateFormat}
                  disabledKeyboardNavigation
                  onChangeRaw={this.handleChangeRaw(formik)}
                  onChange={this.handleChange(formik)}
                  onBlur={formik.handleBlur}
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
                      { hint}
                    </span>
                  )
                }
              </div>
            )
          }
        }
      </FormikConsumer>
    )
  }
}

export default Datepicker
