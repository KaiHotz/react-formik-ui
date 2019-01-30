import React from 'react'
import PropTypes from 'prop-types'
import { connect, getIn } from 'formik'

import withLabel from '../withLabel'
import './styles.scss'

export const Checkbox = ({
  formik: {
    values, handleChange, handleBlur,
  },
  disabled,
  id,
  name,
  text,
  ...rest
}) => (
  <div className="checkbox-input-wrapper">
    <input
      id={id || name}
      name={name}
      type="checkbox"
      checked={getIn(values, name)}
      onChange={handleChange}
      onBlur={handleBlur}
      disabled={disabled}
      {...rest}
    />
    <label
      htmlFor={name}
      className="checkbox-text"
    >
      {text}
    </label>
  </div>
)

Checkbox.propTypes = {
  /** @ignore */
  formik: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
}

Checkbox.defaultProps = {
  disabled: false,
  id: null,
  text: null,
}

export default connect(withLabel('checkbox')(Checkbox))
