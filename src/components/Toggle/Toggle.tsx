import React, { FC, CSSProperties } from 'react';
import cx from 'classnames';
import { useField } from 'formik';

export interface IFormikUiToggleProps {
  /** Sets the Name of the Toggle button */
  name: string;
  /** Sets an Id for the Toggle button, if not passed, the id will be the name */
  id?: string;
  /** Adds a custom class to the Toggle button */
  className: string;
  /** Adds a custom inline styles to the Toggle wrapper div */
  style?: CSSProperties;
  /** Disables the Toggle button */
  disabled?: boolean;
}

export const Toggle: FC<IFormikUiToggleProps> = ({ className, disabled, name, style, id, ...rest }) => {
  const [{ value }, , { setValue }] = useField(name);

  const handleChange = (): void => {
    setValue(!value);
  };

  return (
    <div className={cx('form-element', 'toggle-wrapper', className, { isDisabled: disabled })} style={style}>
      <label className={cx('toggle-switch', className)}>
        <input
          {...rest}
          onChange={handleChange}
          name={name}
          id={id || name}
          checked={value}
          disabled={disabled}
          type="checkbox"
        />
        <span className="slider" />
      </label>
    </div>
  );
};

export default Toggle;
