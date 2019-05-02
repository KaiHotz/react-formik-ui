import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect, getIn } from 'formik'

export const Toggle = ({
  formik: {
    values, handleChange,
  },
  className,
  disabled,
  name,
  style,
  id,
  ...rest
}) => (
  <div className={cx('form-element', 'toggle-wrapper', className, { isDisabled: disabled })} style={style}>
    <label className={cx('toggle-switch', className)}>
      <input
        {...rest}
        name={name}
        id={id || name}
        checked={getIn(values, name)}
        onChange={handleChange}
        disabled={disabled}
        type="checkbox"
      />
      <span className="slider" />
    </label>
  </div>
)

Toggle.propTypes = {
/** @ignore */
  formik: PropTypes.instanceOf(Object).isRequired,
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

export default connect(Toggle)
