import {
  useState, MouseEvent, ChangeEvent, KeyboardEvent,
} from 'react'
import { useFormikContext } from 'formik'
import { Suggestions } from './Autocomplete'

export const useAutocomplete = (name: string, suggestions: Suggestions): [
  activeSuggestion: string | number,
  filteredSuggestions: Suggestions,
  showSuggestions: boolean,
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
  handleClick: (event: MouseEvent<HTMLLIElement>) => void,
  handleKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void,
] => {
  const {
    setFieldValue, setFieldTouched,
  } = useFormikContext()
  const [activeSuggestion, setActiveSuggestion] = useState(0)
  const [filteredSuggestions, setFilteredSuggestions] = useState<Suggestions>(null)
  const [showSuggestions, setShowSuggestions] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget
    const filteredSuggestions = suggestions?.filter(
      (suggestion: string) => suggestion.toLowerCase().startsWith(value.toLowerCase()),
    )

    setActiveSuggestion(0)
    if (filteredSuggestions) {
      setFilteredSuggestions(filteredSuggestions)
    }
    setShowSuggestions(true)

    setFieldValue(name, value)
    setFieldTouched(name, true)
  }

  const handleClick = (event: MouseEvent<HTMLLIElement>): void => {
    setActiveSuggestion(0)
    setFilteredSuggestions(null)
    setShowSuggestions(false)

    setFieldValue(name, event.currentTarget.innerText)
    setFieldTouched(name, true)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter' && filteredSuggestions) {
      event.preventDefault()
      if (event?.currentTarget?.value === '') return

      setShowSuggestions(false)
      setFieldValue(name, filteredSuggestions[activeSuggestion])
      setFieldTouched(name, true)
    } else if (event.key === 'ArrowUp' && filteredSuggestions) {
      const { length } = filteredSuggestions
      setActiveSuggestion(activeSuggestion === 0 ? (length - 1) : activeSuggestion - 1)
    } else if (event.key === 'ArrowDown' && filteredSuggestions) {
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
