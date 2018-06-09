import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './styles.css'

const Form = ({
  children,
  className,
  styled,
  ...rest
}, context) => (
  <form
    className={cx('form-wrapper', {styled}, className)}
    onSubmit={context.formik.handleSubmit}
    {...rest}
  >
    {children}
  </form>
)

Form.contextTypes = {
  formik: PropTypes.shape({})
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  styled: PropTypes.bool
}

Form.defaultProps = {
  className: null,
  styled: false
}

export default Form
