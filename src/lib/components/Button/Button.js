import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Button = ({
  children,
  className,
  disabled,
  onClick,
  type,
  ...rest
}) => (
  <button
    className={cx('btn', className, { disabled })}
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
  type: PropTypes.oneOf(['button', 'reset']),
}

Button.defaultProps = {
  children: null,
  className: null,
  disabled: false,
  type: 'button',
}

export default Button
