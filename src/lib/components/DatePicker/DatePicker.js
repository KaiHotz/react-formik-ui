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
    dateFormat: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ]),
    minDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    maxDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }

  static defaultProps = {
    minDate: null,
    maxDate: null,
    label: null,
    placeholder: null,
    disabled: false,
    required: false,
    dateFormat: [
      'DD.MM.YYYY',
      'D.M.YYYY',
      'MM/DD/YYYY',
      'M/D/YYYY'
    ],
    className: null
  }

  handleChangeRaw = (e) => {
    const { formik } = this.context;
    const { name, value } = e.target;

    const validChars = /^\d{0,2}[.]{0,1}\d{0,2}[.]{0,1}\d{0,4}$/;
    if (!validChars.test(value)) {
      e.preventDefault();
      return;
    }

    const momentDate = moment(
      value,
      this.props.dateFormat,
      true
    );

    const updatedValue = momentDate.isValid() ? momentDate.format('YYYY-MM-DD') : '';

    formik.setFieldValue(name, updatedValue)
    formik.setFieldTouched(name, true)
  }

  handleChange = momentDate => {
    const { formik } = this.context
    const { name } = this.props
    const value = momentDate ? momentDate.format('YYYY-MM-DD') : ''

    formik.setFieldValue(name, value)
    formik.setFieldTouched(name, true)
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
          onBlur={formik.handleBlur}
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
