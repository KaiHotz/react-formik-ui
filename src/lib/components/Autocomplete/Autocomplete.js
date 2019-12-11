import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useFormikContext, getIn } from 'formik'
import { useAutocomplete } from './useAutocomplete'
import WithLabel from '../WithLabel'

export const Autocomplete = ({
  name,
  id,
  suggestions,
  className,
  style,
  ...rest
}) => {
  const { values } = useFormikContext()
  const [
    activeSuggestion,
    filteredSuggestions,
    showSuggestions,
    handleChange,
    handleClick,
    handleKeyDown,
  ] = useAutocomplete(name, suggestions)

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
        value={getIn(values, name)}
        type="text"
        tabIndex="0"
      />
      {
        showSuggestions && !!getIn(values, name) && (
          <ul className="suggestions">
            {
              filteredSuggestions ?.map((suggestion, index) => {
                const sugetionItem = (
                  <li
                    className={cx({ 'suggestion-active': index === activeSuggestion })}
                    key={suggestion}
                    onClick={handleClick}
                    onKeyPress={handleClick}
                  >
                    {suggestion}
                  </li>
                )

                return sugetionItem
              })
            }
          </ul>
        )
      }
    </>
  )
}

Autocomplete.propTypes = {
  /** Sets the Name of the Autocomplete */
  name: PropTypes.string.isRequired,
  /** Array of suggestions to be searchred in */
  suggestions: PropTypes.instanceOf(Array).isRequired,
  /** Adds a custom class to the Autocomplete input element */
  className: PropTypes.string,
  /** Adds a custom inline styles to the input element */
  style: PropTypes.instanceOf(Object),
  /** Sets an Id for the Input Field, if not passed, the id will be the name */
  id: PropTypes.string,
  /** Sets the main Label for the Input Field */
  label: PropTypes.string,
  /** Sets the Placeholder text */
  placeholder: PropTypes.string,
  /** Disables the Input Field */
  disabled: PropTypes.bool,
  /** Sets a hint text after/below the Input Field */
  hint: PropTypes.string,
  /** Sets the field as requierd, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema */
  required: PropTypes.bool,
}

Autocomplete.defaultProps = {
  className: null,
  style: null,
  disabled: false,
  id: null,
  label: null,
  placeholder: null,
  hint: null,
  required: false,
}

export default WithLabel('autocomplete')(Autocomplete)
