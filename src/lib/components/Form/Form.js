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
  formik: PropTypes.instanceOf(Object).isRequired,
  /** @ignore */
  children: PropTypes.node.isRequired,
  /** Adds a custom class to the form */
  className: PropTypes.string,
  /** If passed, adds a minimal style that gives some structure to the Form */
  structured: PropTypes.bool,
  /** If passed, the React-Formik-UI theme will be applied to each styled Form element */
  themed: PropTypes.bool,
}

Form.defaultProps = {
  className: null,
  structured: false,
  themed: false,
}

export default connect(Form)
