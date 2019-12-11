import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useFormikContext } from 'formik'
import '../../styles/index.scss'

export const Form = ({
  children,
  className,
  mode,
  ...rest
}) => {
  const { submitForm } = useFormikContext()

  return (
    <form
      {...rest}
      className={cx('react-formik-ui form-wrapper', mode, className)}
      onSubmit={submitForm}
    >
      {children}
    </form>
  )
}

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

export default Form
