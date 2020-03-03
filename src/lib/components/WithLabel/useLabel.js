import { useState } from 'react'
import { useFormikContext, getIn } from 'formik'

const useLabel = (name, placeholder, disabled = false, onFocus, onBlur) => {
  const { values } = useFormikContext()
  const [hideLabel, setHide] = useState(false)

  const handleAutoFill = e => {
    setHide(e.animationName === 'onAutoFillStart')
  }

  const handleFocus = () => {
    if (onFocus) {
      onFocus()
    }
    setHide(true)
  }

  const handleBlur = () => {
    if (onBlur) {
      onBlur()
    }
    setHide(false)
  }

  const value = getIn(values, name)
  const hide = hideLabel || !!value || !!placeholder || !!(disabled && value)

  return [hide, handleAutoFill, handleFocus, handleBlur]
}

export default useLabel
