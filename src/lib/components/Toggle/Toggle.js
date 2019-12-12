import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useFormikContext, getIn } from 'formik'

export const Toggle = ({
  className,
  disabled,
  name,
  style,
  id,
  ...rest
}) => {
  const { values, setFieldValue, setFieldTouched } = useFormikContext()
  const value = getIn(values, name)
  const handleChange = useCallback(() => {
    setFieldValue(name, !value)
    setFieldTouched(name, true)
  }, [value])

  return (
    <div className={cx('form-element', 'toggle-wrapper', className, { isDisabled: disabled })} style={style}>
      <label className={cx('toggle-switch', className)}>
        <input
          onChange={handleChange}
          {...rest}
          name={name}
          id={id || name}
          checked={value}
          disabled={disabled}
          type="checkbox"
        />
        <span className="slider" />
      </label>
    </div>
  )
}

Toggle.propTypes = {
  /** Adds a custom class to the Toggle button */
  className: PropTypes.string,
  /** Adds a custom inline styles to the Toggle wrapper div */
  style: PropTypes.instanceOf(Object),
  /** Disables the Toggle button */
  disabled: PropTypes.bool,
  /** Sets the Name of the Toggle button */
  name: PropTypes.string.isRequired,
  /** Sets an Id for the Toggle button, if not passed, the id will be the name */
  id: PropTypes.string,
}

Toggle.defaultProps = {
  className: null,
  style: null,
  disabled: false,
  id: null,
}

export default Toggle
