import { isValid } from 'date-fns'

export const useDatepicker = (setFieldValue, setFieldTouched, name) => {
  const handleChangeRaw = e => {
    const { name, value } = e.target
    const validChars = /^\d{0,2}[./]{0,1}\d{0,2}[./]{0,1}\d{0,4}$/
    if (!validChars.test(value)) {
      e.preventDefault()
    }

    if (isValid(new Date(value))) {
      setFieldValue(name, value)
      setFieldTouched(name, true)
    }
  }

  const handleChange = date => {
    const dateInstance = new Date(date)

    if (date && isValid(dateInstance)) {
      setFieldValue(name, dateInstance)
    } else {
      setFieldValue(name, '')
    }

    setFieldTouched(name, true)
  }

  return [
    handleChangeRaw,
    handleChange,
  ]
}
