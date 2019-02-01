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
}) => (
  <label className={cx('toggle-switch', className, { isDisabled: disabled })}>
    <input
      name={name}
      type="checkbox"
      checked={getIn(values, name)}
      onChange={handleChange}
      disabled={disabled}
    />
    <span className="slider" />
  </label>
)

Toggle.propTypes = {
/** @ignore */
  formik: PropTypes.object.isRequired,
  /** Adds a custom class to the Toggle button */
  className: PropTypes.string,
  /** Disables the Toggle button */
  disabled: PropTypes.bool,
  /** Sets the Name of the Toggle button */
  name: PropTypes.string.isRequired,
}

Toggle.defaultProps = {
  className: null,
  disabled: false,
}

export default connect(Toggle)
