import React, { FC, CSSProperties, ReactNode } from 'react';
import cx from 'clsx';
import { useField } from 'formik';

import { useAutocomplete } from './useAutocomplete';
import { Suggestions } from './types';
import WithLabel from '../WithLabel';

export interface IFormikUiAutocompleteProps {
  /** Sets the Name of the Autocomplete */
  name: string;
  /** Array of suggestions to be searchred in */
  suggestions: Suggestions;
  /** Adds a custom class to the Autocomplete input element */
  className?: string;
  /** Adds a custom inline styles to the input element */
  style?: CSSProperties;
  /** Sets an Id for the Input Field, if not passed, the id will be the name */
  id?: string;
  /** Sets the main Label for the Input Field */
  label?: ReactNode;
  /** Sets the Placeholder text */
  placeholder?: string;
  /** Disables the Input Field */
  disabled?: boolean;
  /** Sets a hint text after/below the Input Field */
  hint?: string;
  /** Sets the field as requierd, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema */
  required?: boolean;
}

export const Autocomplete: FC<IFormikUiAutocompleteProps> = ({ name, id, suggestions, className, style, ...rest }) => {
  const [{ value }] = useField(name);
  const [activeSuggestion, filteredSuggestions, showSuggestions, handleChange, handleClick, handleKeyDown] =
    useAutocomplete(name, suggestions);

  return (
    <>
      <input
        {...rest}
        id={id || name}
        name={name}
        className={className}
        style={style}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={value as string | number}
        type="text"
        tabIndex={0}
        data-testid="fui-autocomplete"
      />
      {showSuggestions && !!value && (
        <ul className="suggestions">
          {filteredSuggestions?.map((suggestion: string, index: number) => {
            const sugetionItem = (
              <li
                className={cx({ 'suggestion-active': index === activeSuggestion })}
                key={suggestion}
                onClick={handleClick}
                role="presentation"
              >
                {suggestion}
              </li>
            );

            return sugetionItem;
          })}
        </ul>
      )}
    </>
  );
};

export default WithLabel('autocomplete')(Autocomplete);
