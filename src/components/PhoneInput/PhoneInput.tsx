import React, { FC } from 'react'
import { useFormikContext } from 'formik'
import { PhoneInput as PhoneNrInput, IPhoneInputProps, PhoneNumber } from 'react-phonenr-input'
import WithLabel from '../WithLabel'

export interface IFormikUiPhoneInputProps extends Omit<IPhoneInputProps, 'onChange'>{
  /** Sets the Name of the Input Field */
  name: string;
  /** Sets an Id for the Input Field, if not passed, the id will be the name */
  id?: string;
  /** Sets the main Label for the Input Field */
  label?: string;
  /** Sets a hint text after/below the Input Field */
  hint?: string;
  /** Sets the field as requierd, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema */
  required?: boolean;
}

export const PhoneInput: FC<IFormikUiPhoneInputProps> = ({
  id,
  name,
  placeholder,
  disabled,
  hint,
  required,
  format = 'INTERNATIONAL',
  defaultCountry,
  preferredCountries,
  regions,
  className,
  withCountryMeta,
  ...rest
}) => {
  const { setFieldValue } = useFormikContext()

  const handleChange = (data: PhoneNumber): void => {
    setFieldValue(name, data)
  }

  return (
    <PhoneNrInput
      {...rest}
      onChange={handleChange}
      className={className}
      placeholder={placeholder}
      disabled={disabled}
      format={format}
      defaultCountry={defaultCountry}
      preferredCountries={preferredCountries}
      regions={regions}
      withCountryMeta={withCountryMeta}
    />
  )
}

export default WithLabel('phoneInput')(PhoneInput)
