import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DatePickerCmp from 'react-datepicker'
import moment from 'moment'
import cx from 'classnames'
import { get } from '../../utils/helper'
import 'react-datepicker/dist/react-datepicker.css'

class Datepicker extends Component {
  static contextTypes = {
    formik: PropTypes.shape({})
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    dateFormat: PropTypes.arrayOf(PropTypes.string),
    minDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    maxDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }

  static defaultProps = {
    minDate: null,
    maxDate: null,
    label: null,
    placeholder: 'DD.MM.YYYY',
    disabled: false,
    required: false,
    dateFormat: ['DD.MM.YYYY', 'D.M.YYYY'],
    className: null
  }

  handleUpdate = (args, event) => {
    // eslint-disable-next-line
    const validChars = /^\d{0,2}[.\/]{0,1}\d{0,2}[.\/]{0,1}\d{0,4}$/
    const { value } = args.target
    if (!validChars.test(value)) {
      args.preventDefault()
      return
    }

    const momentDate = moment(
      value,
      ['DD.MM.YYYY', 'MM/DD/YYYY', 'D.M.YYYY', 'M/D/YYYY'],
      true
    )

    event({
      target: {
        name: this.props.name,
        value: momentDate.isValid() ? momentDate.format('YYYY-MM-DD') : ''
      }
    })
  }

  handleChange = event => {
    const { formik } = this.context
    const { name, value } = event.target

    formik.setFieldValue(name, value)
    formik.setFieldTouched(name, true)
  }

  handleChangeRaw = event => {
    this.handleUpdate(event, this.handleChange)
  }

  handleFocus = name => {
    document.getElementById(name).focus()
  }

  render () {
    const {
      disabled,
      label,
      placeholder,
      dateFormat,
      name,
      minDate,
      maxDate,
      required,
      className,
      ...rest
    } = this.props

    const { formik } = this.context
    const { touched, errors, values } = formik
    const momentDate = moment(get(values, name))
    const error = get(errors, name)

    return (
      <div className={cx('datePicker-wrapper', className, { 'hasError': error })}>
        {
          label &&
            <label
              htmlFor={name}
              onClick={() => this.handleFocus(name)}
            >
              {`${label}${required ? ' *' : ''}`}
            </label>
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
          onChangeRaw={this.handleChangeRaw}
          onChange={this.handleChange}
          onBlur={this.handleChangeRaw}
          disabled={disabled}
          {...rest}
        />
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

export default Datepicker
