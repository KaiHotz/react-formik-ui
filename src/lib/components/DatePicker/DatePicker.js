import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DatePickerCmp from 'react-datepicker'
import cx from 'classnames'
import { connect, getIn } from 'formik'
import { format } from 'date-fns'
import 'react-datepicker/dist/react-datepicker.css'
import '../Input/styles.scss'

export class Datepicker extends Component {
  static propTypes = {
    formik: PropTypes.object.isRequired,
    className: PropTypes.string,
    dateFormat: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    disabled: PropTypes.bool,
    hint: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
  }

  static defaultProps = {
    className: null,
    dateFormat: [
      'MM/dd/yyyy',
      'M/d/yyyy',
      'dd.MM.yyyy',
      'd.M.yyyy',
    ],
    disabled: false,
    hint: null,
    label: null,
    placeholder: null,
    required: false,
  }

  state = {
    focus: false,
  }

  handleChangeRaw = e => {
    const { formik } = this.props
    const { name, value } = e.target
    const validChars = /^\d{0,2}[./]{0,1}\d{0,2}[./]{0,1}\d{0,4}$/
    if (!validChars.test(value)) {
      e.preventDefault()

      return
    }

    formik.setFieldValue(name, value)
    formik.setFieldTouched(name, true)
  }

  handleChange = date => {
    const { formik, name } = this.props

    formik.setFieldValue(name, format(date, 'yyyy-MM-dd'))
    formik.setFieldTouched(name, true)
  }

  handleFocus = () => {
    this.setState({
      focus: true,
    })
  }

  handleBlur = () => {
    this.setState({
      focus: false,
    })
  }

  render() {
    const {
      formik,
      className,
      dateFormat,
      disabled,
      hint,
      label,
      name,
      placeholder,
      required,
      ...rest
    } = this.props

    const { touched, errors, values } = formik
    const { focus } = this.state

    const selectedDate = getIn(values, name) ? new Date(getIn(values, name)) : null
    const value = getIn(values, name)
    const error = getIn(errors, name)
    const touch = getIn(touched, name)
    const errorMsg = touch && error ? error : null
    const hidden = focus || value || placeholder || (disabled && value)

    return (
      <div className={cx('form-element datePicker-wrapper', className, { hasError: !!errorMsg, isDisabled: disabled })}>
        <label
          htmlFor={name}
          className={cx('isStyled', { isDisabled: disabled })}
          role="row"
        >
          {
            label && (
              <span className={cx({ hide: hidden })}>
                {`${label}${required ? ' *' : ''}`}
              </span>
            )
          }
          <DatePickerCmp
            id={name}
            name={name}
            selected={selectedDate}
            placeholderText={placeholder}
            dateFormat={dateFormat}
            disabledKeyboardNavigation
            onChangeRaw={this.handleChangeRaw}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            disabled={disabled}
            {...rest}
          />
        </label>

        {
          !!errorMsg && (
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
}

export default connect(Datepicker)
