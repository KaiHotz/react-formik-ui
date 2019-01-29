import React from 'react'
import PropTypes from 'prop-types'
import { connect, getIn } from 'formik'

import withLabel from '../withLabel'
import './styles.scss'

export const Input = ({
  formik: {
    values, handleChange,
  },
  disabled,
  id,
  name,
  placeholder,
  type,
  onAnimationStart,
  onFocus,
  onBlur,
  ...rest
}) => (
  <input
    id={id || name}
    name={name}
    type={type}
    onAnimationStart={onAnimationStart}
    placeholder={placeholder}
    value={getIn(values, name, '')}
    onChange={handleChange}
    onFocus={onFocus}
    onBlur={onBlur}
    disabled={disabled}
    {...rest}
  />
)

Input.propTypes = {
  formik: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onAnimationStart: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  type: PropTypes.oneOf([
    'text',
    'color',
    'email',
    'hidden',
    'image',
    'number',
    'password',
    'range',
    'search',
    'tel',
    'url',
  ]),
}

Input.defaultProps = {
  disabled: false,
  id: null,
  placeholder: null,
  type: 'text',
}

export default connect(withLabel('input')(Input))
