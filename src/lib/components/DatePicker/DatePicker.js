import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DatePickerCmp from 'react-datepicker'
import { connect, getIn } from 'formik'
import { format, isValid } from 'date-fns'
import 'react-datepicker/dist/react-datepicker.css'
import withLabel from '../withLabel'
import '../Input/styles.scss'

export class Datepicker extends Component {
  static propTypes = {
    /** @ignore */
    formik: PropTypes.object.isRequired,
    /** @ignore */
    onFocus: PropTypes.func.isRequired,
    /** @ignore */
    onBlur: PropTypes.func.isRequired,
    /** Sets the Name of the Datepicker Field */
    name: PropTypes.string.isRequired,
    /** Adds a custom class to the Datepicker wrapper div */
    className: PropTypes.string,
    /** Sets the main Label for the Datepicker */
    label: PropTypes.string,
    /** Sets a hint text after/below the Datepicker */
    hint: PropTypes.string,
    /**  Sets the desired date format */
    dateFormat: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    /** Sets the Placeholder text */
    placeholder: PropTypes.string,
    /** Sets the Datepicker as requierd, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema */
    required: PropTypes.bool,
    /** Disables the Datepicker Field */
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    className: null,
    label: null,
    hint: null,
    dateFormat: 'dd.MM.yyyy',
    placeholder: null,
    required: false,
    disabled: false,
  }

  handleChangeRaw = e => {
    const { setFieldValue, setFieldTouched } = this.props.formik
    const { name, value } = e.target
    const validChars = /^\d{0,2}[./]{0,1}\d{0,2}[./]{0,1}\d{0,4}$/
    if (validChars.test(value) && isValid(new Date(value))) {
      setFieldValue(name, value)
      setFieldTouched(name, true)
    }
  }

  handleChange = date => {
    const { formik: { setFieldValue, setFieldTouched }, name } = this.props

    setFieldValue(name, format(date, 'yyyy-MM-dd hh:mm a'))
    setFieldTouched(name, true)
  }

  render() {
    const {
      formik: {
        values,
      },
      dateFormat,
      disabled,
      name,
      placeholder,
      onFocus,
      onBlur,
      ...rest
    } = this.props
    const selectedDate = getIn(values, name) ? new Date(getIn(values, name)) : null

    return (
      <DatePickerCmp
        id={name}
        name={name}
        selected={selectedDate}
        placeholderText={placeholder}
        dateFormat={dateFormat}
        disabledKeyboardNavigation
        onChangeRaw={this.handleChangeRaw}
        onChange={this.handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        {...rest}
      />
    )
  }
}
export default connect(withLabel('datePicker')(Datepicker))
