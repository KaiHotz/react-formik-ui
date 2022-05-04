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
  const [{ value }, , { setValue }] = useField(name);

  const handleChangeRaw = (event: FocusEvent<HTMLInputElement>): void => {
    const validChars = /^\d{0,2}[./]{0,1}\d{0,2}[./]{0,1}\d{0,4}$/;
    if (!validChars.test(event.target.value)) {
      event.preventDefault();
    }

    if (isValid(new Date(value as string | number | Date))) {
      setValue(value);
    }
  };

  const handleChange: ReactDatePickerProps['onChange'] = (date) => {
    if (date && isValid(date)) {
      setValue(date);
    } else {
      setValue('');
    }
  };

  return (
    // @ts-ignore
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
