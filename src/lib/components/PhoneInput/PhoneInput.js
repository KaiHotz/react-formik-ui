import React from 'react'
import PropTypes from 'prop-types'
import { PhoneInput as PhoneNrInput } from 'react-phonenr-input'
import useLabel from '../useLabel'
import './styles.scss'

const PhoneInput = ({
  formik,
  id,
  name,
  placeholder,
  disabled,
  hint,
  required,
  format,
  defaultCountry,
  preferredCountries,
  regions,
  buttonFlagStyles,
  listFlagStyles,
  ...rest
}) => {
  const { setFieldValue, setFieldTouched } = formik

  const handleChange = phoneNr => {
    setFieldValue(name, phoneNr)
    setFieldTouched(name, true)
  }

  return (
    <PhoneNrInput
      {...rest}
      id={id || name}
      name={name}
      onChange={handleChange}
      placeholder={placeholder}
      disabled={disabled}
      hint={hint}
      required={required}
      format={format}
      defaultCountry={defaultCountry}
      preferredCountries={preferredCountries}
      regions={regions}
      buttonFlagStyles={buttonFlagStyles}
      listFlagStyles={listFlagStyles}
    />
  )
}

PhoneInput.propTypes = {
  /** @ignore */
  formik: PropTypes.instanceOf(Object).isRequired,
  /** Adds a custom class to the Input wrapper div */
  className: PropTypes.string,
  /** Adds a custom inline styles to the Input wrapper div */
  style: PropTypes.instanceOf(Object),
  /** Sets an Id for the Input Field, if not passed, the id will be the name */
  id: PropTypes.string,
  /** Sets the Name of the Input Field */
  name: PropTypes.string.isRequired,
  /** Sets the main Label for the Input Field */
  label: PropTypes.string,
  /** Sets the Placeholder text */
  placeholder: PropTypes.string,
  /** Sets the default country */
  defaultCountry: PropTypes.string,
  /** Lets you restrict the country dropdown to a specific list of countries */
  preferredCountries: PropTypes.arrayOf(PropTypes.string),
  /** Lets you restrict the country dropdown to a list of countries in the specified regions */
  regions: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  /** Sets the format of the entered  phone number, in case of 'NATIONAL' the defaultCountry must be set */
  format: PropTypes.oneOf(['INTERNATIONAL', 'NATIONAL']),
  /** Style object that overrides the styles of the Flag shown in the button */
  buttonFlagStyles: PropTypes.instanceOf(Object),
  /** Style object that overrides the styles of the Flag shown in the country dropdown */
  listFlagStyles: PropTypes.instanceOf(Object),
  /** Disables the Input Field */
  disabled: PropTypes.bool,
  /** Sets a hint text after/below the Input Field */
  hint: PropTypes.string,
  /** Sets the field as requierd, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema */
  required: PropTypes.bool,
}

PhoneInput.defaultProps = {
  className: null,
  style: null,
  id: null,
  label: null,
  placeholder: null,
  defaultCountry: null,
  preferredCountries: [],
  regions: null,
  format: 'INTERNATIONAL',
  buttonFlagStyles: null,
  listFlagStyles: null,
  disabled: false,
  hint: null,
  required: false,
}

export default useLabel('phoneInput')(PhoneInput)
