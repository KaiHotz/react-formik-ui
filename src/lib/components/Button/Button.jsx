import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Button = ({
  type,
  className,
  disabled,
  onClick,
  children,
  ...rest
}) => (
  <button
    className={cx('form-element btn', className, { disabled })}
    onClick={onClick}
    type={type}
    disabled={disabled}
    {...rest}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
}

Button.defaultProps = {
  children: null,
  className: null,
  disabled: false,
  type: 'button',
}

export default Button
