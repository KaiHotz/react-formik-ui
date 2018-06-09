import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './styles.css'

const Form = ({
  children,
  className,
  ...rest
}, context) => (
  <form
    className={cx('form-wrapper', className)}
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
  className: PropTypes.string
}

Form.defaultProps = {
  className: null
}

export default Form
