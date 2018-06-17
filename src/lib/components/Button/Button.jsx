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
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
}

Button.defaultProps = {
  type: 'button',
  className: null,
  disabled: false,
  children: null,
}

export default Button
