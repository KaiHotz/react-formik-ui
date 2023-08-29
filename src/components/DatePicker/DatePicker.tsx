import React, { FC, FocusEvent, ReactNode } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { isValid } from 'date-fns';
import { useField } from 'formik';

import 'react-datepicker/dist/react-datepicker.css';
import WithLabel from '../WithLabel';

export interface IFormikUiDatepickerProps extends ReactDatePickerProps {
  /** Sets the Name of the Datepicker Field */
  name: string;
  /** Sets an Id for the Datepicker, if not passed, the id will be the name */
  id?: string;
  /** Sets the main Label for the Datepicker */
  label?: ReactNode;
  /** Sets a hint text after/below the Datepicker */
  hint?: ReactNode;
  /** Sets the Placeholder text */
  placeholder?: string;
  /** Sets the Datepicker as requierd, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema */
  required?: boolean;
}

export const DatePicker: FC<IFormikUiDatepickerProps> = ({
  dateFormat = 'dd/MM/yyyy',
  disabled,
  name,
  id,
  placeholder,
  onFocus,
  onBlur,
  className,
  autoComplete = 'off',
  ...rest
}) => {
  const [{ value }, , { setValue, setError }] = useField(name);

  const handleChangeRaw = async (event: FocusEvent<HTMLInputElement>): Promise<void> => {
    const validChars = /^\d{0,2}[./]{0,1}\d{0,2}[./]{0,1}\d{0,4}$/;
    if (!validChars.test(event.target.value)) {
      event.preventDefault();
    }

    if (isValid(new Date(value as string | number | Date))) {
      await setValue(value);
    }
  };

  const handleChange: ReactDatePickerProps['onChange'] = (date) => {
    try {
      if (date && isValid(date)) {
        void setValue(date);
      } else {
        void setValue('');
      }
    } catch (e: unknown) {
      setError('Ups something went wrong');
    }
  };

  return (
    <ReactDatePicker
      {...rest}
      disabledKeyboardNavigation
      autoComplete={autoComplete}
      id={id || name}
      name={name}
      className={className}
      selected={value && new Date(value as string | number | Date)}
      placeholderText={placeholder}
      dateFormat={dateFormat}
      onChangeRaw={handleChangeRaw}
      onChange={handleChange}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      data-testid="fui-datePicker"
    />
  );
};
export default WithLabel('datePicker')(DatePicker);
