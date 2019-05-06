import React from 'react'
import PropTypes from 'prop-types'
import DatePickerCmp from 'react-datepicker'
import { getIn } from 'formik'
import 'react-datepicker/dist/react-datepicker.css'
import { useDatepicker } from './useDatepicker'
import useLabel from '../useLabel'

export const Datepicker = ({
  formik: {
    values, setFieldValue, setFieldTouched,
  },
  dateFormat,
  disabled,
  name,
  id,
  placeholder,
  onFocus,
  onBlur,
  className,
  ...rest
}) => {
  const [handleChangeRaw, handleChange] = useDatepicker(setFieldValue, setFieldTouched, name)

  return (
    <DatePickerCmp
      {...rest}
      id={id || name}
      name={name}
      className={className}
      selected={getIn(values, name) ? new Date(getIn(values, name)) : null}
      placeholderText={placeholder}
      dateFormat={dateFormat}
      disabledKeyboardNavigation
      autoComplete="off"
      onChangeRaw={handleChangeRaw}
      onChange={handleChange}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
    />
  )
}

Datepicker.propTypes = {
  /** @ignore */
  formik: PropTypes.instanceOf(Object).isRequired,
  /** @ignore */
  onFocus: PropTypes.func.isRequired,
  /** @ignore */
  onBlur: PropTypes.func.isRequired,
  /** Sets the Name of the Datepicker Field */
  name: PropTypes.string.isRequired,
  /** Sets an Id for the Datepicker, if not passed, the id will be the name */
  id: PropTypes.string,
  /** Adds a custom class to the React-Datepicker component */
  className: PropTypes.string,
  /** Adds a custom inline styles to the Datepicker wrapper div */
  style: PropTypes.instanceOf(Object),
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

Datepicker.defaultProps = {
  id: null,
  className: null,
  style: null,
  label: null,
  hint: null,
  dateFormat: 'dd/MM/yyyy',
  placeholder: null,
  required: false,
  disabled: false,
}
export default useLabel('datePicker')(Datepicker)
