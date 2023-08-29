import React, { FC, CSSProperties, ChangeEvent, ReactNode } from 'react';
import { useField } from 'formik';

import WithLabel from '../WithLabel';

export interface IFOrmikUiSelectOption {
  label: string;
  value: string | number;
}

export interface IFOrmikUiSelectProps {
  /** Sets the Name of the Select Field */
  name: string;
  /** Array in the shape of [ { value: string or number, label: string } ] */
  options: IFOrmikUiSelectOption[];
  /** Adds a custom class to the select element of the Select component */
  className: string;
  /** Adds a custom inline styles to the select element */
  style?: CSSProperties;
  /** Disables the Select Field */
  disabled?: boolean;
  /** Sets an Id for the Select Field, if not passed, the id will be the name */
  id: string;
  /** Sets the main Label for the Select Field */
  label?: ReactNode;
  /** Sets a Placeholder as the first option with no value */
  placeholder?: string;
  /** Sets a hint text after/below the Select component */
  hint?: ReactNode;
  /** Sets the field as requierd, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema */
  required?: boolean;
  /** Allowes multiple selection */
  multiple?: boolean;
}

export const Select: FC<IFOrmikUiSelectProps> = ({
  disabled,
  id,
  label,
  name,
  options,
  placeholder,
  required,
  className,
  style,
  multiple,
  ...rest
}) => {
  const [{ value, onChange }, , { setValue }] = useField(name);

  const handleMultipleChange = async (event: ChangeEvent<HTMLSelectElement>): Promise<void> => {
    const val = [].slice.call(event.target.selectedOptions).map((option: IFOrmikUiSelectOption) => option.value);
    await setValue(val);
  };

  return (
    <select
      onChange={multiple ? handleMultipleChange : onChange}
      {...rest}
      id={id || name}
      name={name}
      className={className}
      style={style}
      value={value}
      disabled={disabled}
      multiple={multiple}
      data-testid="fui-select"
    >
      {placeholder && (
        <option value="" data-testid="fui-select-option">{`${placeholder}${!label && required ? ' *' : ''}`}</option>
      )}
      {options.map((option) => (
        <option key={option.label} value={option.value} data-testid="fui-select-option">
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default WithLabel('select')(Select);
