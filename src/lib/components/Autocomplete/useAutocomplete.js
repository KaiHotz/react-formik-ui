import { useState } from 'react'

export const useAutocomplete = (setFieldValue, setFieldTouched, name, suggestions) => {
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
      if (e.currentTarget.value === '') return

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

  return [
    activeSuggestion,
    filteredSuggestions,
    showSuggestions,
    handleChange,
    handleClick,
    handleKeyDown,
  ]
}
