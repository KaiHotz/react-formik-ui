import React, { FC, ReactNode } from 'react';
import { useFormikContext } from 'formik';
import { PhoneInput as PhoneNrInput, IPhoneInputProps, PhoneNumber } from 'react-phonenr-input';

import WithLabel from '../WithLabel';

export interface IFormikUiPhoneInputProps extends Omit<IPhoneInputProps, 'onChange'> {
  /** Sets the Name of the Input Field */
  name: string;
  /** Sets the main Label for the Input Field */
  label?: ReactNode;
  /** Sets the field as requierd, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema */
  required?: boolean;
}

export const PhoneInput: FC<IFormikUiPhoneInputProps> = ({
  name,
  placeholder,
  disabled,
  required,
  format = 'INTERNATIONAL',
  defaultCountry,
  preferredCountries,
  regions,
  className,
  withCountryMeta,
  ...rest
}) => {
  const { setFieldValue } = useFormikContext();

  const handleChange = async (data: PhoneNumber): Promise<void> => {
    await setFieldValue(name, data);
  };

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
      required={required}
    />
  );
};

export default WithLabel('phoneInput')(PhoneInput);
