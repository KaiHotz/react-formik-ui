import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'formik'
import './styles.css'

const Form = ({
  children,
  className,
  styled,
  formik,
  ...rest
}) => (
  <form
    className={cx('react-formik-ui form-wrapper', { styled }, className)}
    onSubmit={formik.handleSubmit}
    {...rest}
  >
    {children}
  </form>
)

Form.propTypes = {
  formik: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  styled: PropTypes.bool,
}

Form.defaultProps = {
  className: null,
  styled: false,
}

export default connect(Form)
