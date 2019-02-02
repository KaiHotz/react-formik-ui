import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect, getIn } from 'formik'
import './styles.scss'

export const Toggle = ({
  formik: {
    values, handleChange,
  },
  className,
  disabled,
  name,
  style,
  ...rest
}) => (
  <div className={cx('form-element', 'toggle-wrapper', className, { isDisabled: disabled })} style={style}>
    <label className={cx('toggle-switch', className)}>
      <input
        name={name}
        checked={getIn(values, name)}
        onChange={handleChange}
        disabled={disabled}
        {...rest}
        type="checkbox"
      />
      <span className="slider" />
    </label>
  </div>
)

Toggle.propTypes = {
/** @ignore */
  formik: PropTypes.object.isRequired,
  /** Adds a custom class to the Toggle button */
  className: PropTypes.string,
  /** Adds a custom inline styles to the Toggle wrapper div */
  style: PropTypes.object,
  /** Disables the Toggle button */
  disabled: PropTypes.bool,
  /** Sets the Name of the Toggle button */
  name: PropTypes.string.isRequired,
}

Toggle.defaultProps = {
  className: null,
  style: null,
  disabled: false,
}

export default connect(Toggle)
