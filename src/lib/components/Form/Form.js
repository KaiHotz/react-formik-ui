import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'formik'
import '../../styles/index.scss'

export const Form = ({
  formik,
  children,
  className,
  mode,
  ...rest
}) => (
  <form
    {...rest}
    className={cx('react-formik-ui form-wrapper', mode, className)}
    onSubmit={formik.handleSubmit}
  >
    {children}
  </form>
)

Form.propTypes = {
  /** @ignore */
  formik: PropTypes.instanceOf(Object).isRequired,
  /** @ignore */
  children: PropTypes.node.isRequired,
  /** Adds a custom class to the form */
  className: PropTypes.string,
  /** Sets the styling of The Form Elemnts */
  mode: PropTypes.oneOf(['default', 'structured', 'themed']),
}

Form.defaultProps = {
  className: null,
  mode: 'default',
}

export default connect(Form)
