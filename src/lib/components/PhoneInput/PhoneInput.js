import React from 'react'
import PropTypes from 'prop-types'
import { PhoneInput as PhoneNrInput } from 'react-phonenr-input'
import WithLabel from '../WithLabel'

export const PhoneInput = ({
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
  className,
  withCountryMeta,
  ...rest
}) => {
  const { setFieldValue, setFieldTouched } = formik

  const handleChange = data => {
    setFieldValue(name, data)
    setFieldTouched(name, true)
  }

  return (
    <PhoneNrInput
      onChange={handleChange}
      {...rest}
      id={id || name}
      name={name}
      className={className}
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
      withCountryMeta={withCountryMeta}
    />
  )
}

PhoneInput.propTypes = {
  /** @ignore */
  formik: PropTypes.instanceOf(Object).isRequired,
  /** Adds a custom class to the Phone Input input/select element  */
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
  /** Sets the default country (use iso alpha-2 country code e.g 'us', 'gb', 'fr') */
  defaultCountry: PropTypes.string,
  /** Lets you restrict the country dropdown to a specific list of countries (use iso alpha-2 country code e.g 'us', 'gb', 'fr') */
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
  /**
     changes the retuned value into an Object that contains the phone number and country meta information
     eg.:
     {
       phoneNumber: '+49 176 12345678',
       country: {
         name: 'Germany (Deutschland)',
         iso2: 'de'
       }
     }
    In case of use the Formik initialValue for the PhoneInput needs to be an Object exactly like this:
    {
      phoneNumber: '',
      country: {
        name: '',
        iso2: ''
      }
  } */
  withCountryMeta: PropTypes.bool,
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
  withCountryMeta: false,
}

export default WithLabel('phoneInput')(PhoneInput)
