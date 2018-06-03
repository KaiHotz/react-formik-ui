import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

/**
 * Component is described here.
 *
 */
const Form = ({
  children,
  className,
  ...rest
}, context) => (
  <form
    onSubmit={context.formik.handleSubmit}
    className={cx('form-wrapper', className)}
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
