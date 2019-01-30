import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'formik'
import './styles.scss'

export const Form = ({
  formik,
  children,
  className,
  themed,
  structured,
  ...rest
}) => (
  <form
    className={cx('react-formik-ui form-wrapper', { 'with-theme': themed, 'with-structure': structured }, className)}
    onSubmit={formik.handleSubmit}
    {...rest}
  >
    {children}
  </form>
)

Form.propTypes = {
  /** @ignore */
  formik: PropTypes.object.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  themed: PropTypes.bool,
  structured: PropTypes.bool,
}

Form.defaultProps = {
  className: null,
  themed: false,
  structured: false,
  children: null,
}

export default connect(Form)
