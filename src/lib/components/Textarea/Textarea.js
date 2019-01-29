import React from 'react'
import PropTypes from 'prop-types'
import { connect, getIn } from 'formik'

import withLabel from '../withLabel'
import './styles.scss'

export const Textarea = ({
  formik: {
    values, handleChange,
  },
  className,
  disabled,
  hint,
  id,
  label,
  name,
  placeholder,
  required,
  onFocus,
  onBlur,
  ...rest
}) => (
  <textarea
    id={id || name}
    name={name}
    placeholder={placeholder}
    value={getIn(values, name)}
    onChange={handleChange}
    onFocus={onFocus}
    onBlur={onBlur}
    disabled={disabled}
    {...rest}
  />
)

Textarea.propTypes = {
  formik: PropTypes.object.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hint: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,

}

Textarea.defaultProps = {
  className: null,
  disabled: false,
  hint: null,
  id: null,
  label: null,
  placeholder: null,
  required: false,
}

export default connect(withLabel('textarea')(Textarea))
