import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

export const Label = ({
  name, styled, disabled, hide, text, required, children, className,
}) => (
  <label
    htmlFor={name}
    className={cx({ isStyled: styled, isDisabled: disabled })}
  >
    {
      text && (
      <span className={cx({ hide }, className)}>
        {`${text}${required ? ' *' : ''}`}
      </span>
      )
    }
    {children}
  </label>
)

Label.propTypes = {
  name: PropTypes.string.isRequired,
  styled: PropTypes.bool,
  disabled: PropTypes.bool,
  hide: PropTypes.bool,
  text: PropTypes.string,
  required: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Label.defaultProps = {
  styled: false,
  disabled: false,
  hide: false,
  text: null,
  required: false,
  className: null,
}

export default Label
