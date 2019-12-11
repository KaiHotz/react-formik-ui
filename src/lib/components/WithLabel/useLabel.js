import { useState } from 'react'
import { useFormikContext, getIn } from 'formik'

const useLabel = (name, placeholder, disabled = false) => {
  const { values } = useFormikContext()
  const [hideLabel, setHide] = useState(false)

  const handleAutoFill = e => {
    setHide(e.animationName === 'onAutoFillStart')
  }

  const handleFocus = () => {
    setHide(true)
  }

  const handleBlur = () => {
    setHide(false)
  }

  const value = getIn(values, name)
  const hide = hideLabel || !!value || !!placeholder || !!(disabled && value)

  return [hide, handleAutoFill, handleFocus, handleBlur]
}

export default useLabel
