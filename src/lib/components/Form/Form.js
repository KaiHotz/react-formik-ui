import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Form as FormCmp } from 'formik'
import '../../styles/index.scss'

export const Form = ({
  children,
  className,
  mode,
  ...rest
}) => (
  <FormCmp
    {...rest}
    className={cx('react-formik-ui form-wrapper', mode, className)}
  >
    {children}
  </FormCmp>
)

Form.propTypes = {
  /** @ignore */
  children: PropTypes.node.isRequired,
  /** Adds a custom class to the form element */
  className: PropTypes.string,
  /** Sets the styling of The Form Elemnts */
  mode: PropTypes.oneOf(['default', 'structured', 'themed']),
}

Form.defaultProps = {
  className: null,
  mode: 'default',
}

export default memo(Form)
