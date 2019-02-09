import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { getIn } from 'formik'
import useLabel from '../useLabel'
import './styles.scss'

export const Autocomplete = ({
  formik: {
    values, setFieldValue, setFieldTouched,
  },
  name,
  id,
  suggestions,
  ...rest
}) => {
  const [activeSuggestion, setActiveSuggestion] = useState(0)
  const [filteredSuggestions, setFilteredSuggestions] = useState(null)
  const [showSuggestions, setShowSuggestions] = useState(false)

  const handleChange = e => {
    const { value } = e.currentTarget
    const filteredSuggestions = suggestions.filter(
      suggestion => suggestion.toLowerCase().startsWith(value.toLowerCase()),
    )

    setActiveSuggestion(0)
    setFilteredSuggestions(filteredSuggestions)
    setShowSuggestions(true)

    setFieldValue(name, value)
    setFieldTouched(name, true)
  }

  const handleClick = e => {
    setActiveSuggestion(0)
    setFilteredSuggestions(null)
    setShowSuggestions(false)

    setFieldValue(name, e.currentTarget.innerText)
    setFieldTouched(name, true)
  }

  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      e.preventDefault()

      setFilteredSuggestions(0)
      setShowSuggestions(false)

      setFieldValue(name, filteredSuggestions[activeSuggestion])
      setFieldTouched(name, true)
    } else if (e.keyCode === 38) {
      const { length } = filteredSuggestions

      setActiveSuggestion(activeSuggestion === 0 ? (length - 1) : activeSuggestion - 1)
    } else if (e.keyCode === 40) {
      const { length } = filteredSuggestions

      setActiveSuggestion(activeSuggestion === (length - 1) ? 0 : activeSuggestion + 1)
    }
  }

  return (
    <Fragment>
      <input
        {...rest}
        id={id || name}
        name={name}
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
              filteredSuggestions?.map((suggestion, index) => {
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
    </Fragment>
  )
}

Autocomplete.propTypes = {
  /** @ignore */
  formik: PropTypes.instanceOf(Object).isRequired,
  /** Sets the Name of the Autocomplete */
  name: PropTypes.string.isRequired,
  /** Array of suggestions to be searchred in */
  suggestions: PropTypes.instanceOf(Array).isRequired,
  /** Adds a custom class to the Input wrapper div */
  className: PropTypes.string,
  /** Adds a custom inline styles to the Input wrapper div */
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

export default useLabel('autocomplete')(Autocomplete)

