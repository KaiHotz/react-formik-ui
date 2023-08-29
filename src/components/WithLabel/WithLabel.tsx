/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useState, ReactNode, FocusEvent, CSSProperties, ComponentType, ElementType, memo } from 'react';
import cx from 'clsx';
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
  onAnimationStart?: (e: AnimationEvent) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

export const WithLabel =
  (component: string = 'input') =>
  (WrappedComponent: ComponentType<any>): ElementType => {
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

      const handleFocus = (event: FocusEvent<HTMLInputElement>): void => {
        if (onFocus) {
          onFocus(event);
        }
        setHide(true);
      };

      const handleBlur = (event: FocusEvent<HTMLInputElement>): void => {
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
              <span className={cx('label', { hide, 'move-label': moveLabel })}>{`${label as string}${
                required ? ' *' : ''
              }`}</span>
            )}
            {WrappedComponent && (
              <WrappedComponent
                onAnimationStart={handleAutoFill}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={style}
                {...passableProps}
              />
            )}
          </div>
          <span className="rfui-error">
            <ErrorMessage name={name} />
          </span>
          {!!hint && (
            <span className="hint" data-testid="fui-hint">
              {hint}
            </span>
          )}
        </div>
      );
    };

    return memo(Label);
  };

export default WithLabel;
