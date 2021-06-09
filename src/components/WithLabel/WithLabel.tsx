/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useState, ReactNode, FocusEvent, CSSProperties, memo, ComponentType } from 'react';
import cx from 'classnames';
import { useField, ErrorMessage } from 'formik';
import omit from 'lodash.omit';

export interface IFormikUiLabelProps {
  name: string;
  label?: ReactNode;
  hint?: ReactNode;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  style?: CSSProperties;
  format?: string;
  onFocus?: (event: FocusEvent<unknown>) => void;
  onBlur?: (event: FocusEvent<unknown>) => void;
}

export const WithLabel =
  (component = 'input') =>
  (WrappedComponent: ComponentType<any>): ReactNode => {
    const Label: FC<IFormikUiLabelProps> = (props) => {
      const { name, label, hint, placeholder, type, disabled, required, style, format, onFocus, onBlur } = props;
      const [hideLabel, setHide] = useState<boolean>(false);
      const [field, { error }] = useField(name);
      const hidden = type && type === 'hidden';
      const moveLabel = component === 'phoneInput' && format !== 'NATIONAL';
      const passableProps = omit(props, ['hint', 'label', 'onFocus', 'onBlur', 'required']);

      const handleAutoFill = (e: AnimationEvent): void => {
        setHide(e.animationName === 'onAutoFillStart');
      };

      const handleFocus = (event: FocusEvent<unknown>): void => {
        if (onFocus) {
          onFocus(event);
        }
        setHide(true);
      };

      const handleBlur = (event: FocusEvent<unknown>): void => {
        if (onBlur) {
          onBlur(event);
        }
        field.onBlur(name);
        setHide(false);
      };

      const hide = hideLabel || !!field.value || !!placeholder || !!(disabled && field.value);

      return (
        <div className={cx('form-element', component, { 'has-error': !!error, hidden })}>
          <div className={cx(`${component}-wrapper`, { disabled })}>
            {label && (
              <span className={cx('label', { hide, 'move-label': moveLabel })}>{`${label}${
                required ? ' *' : ''
              }`}</span>
            )}
            <WrappedComponent
              onAnimationStart={handleAutoFill}
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={style}
              {...passableProps}
            />
          </div>
          <span className="rfui-error">
            <ErrorMessage name={name} />
          </span>
          {!!hint && <span className="hint">{hint}</span>}
        </div>
      );
    };

    return memo(Label);
  };

export default WithLabel;
