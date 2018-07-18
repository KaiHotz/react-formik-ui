import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { FormikConsumer } from 'formik'
import './styles.css'

const Form = ({
  children,
  className,
  styled,
  ...rest
}) => (
  <FormikConsumer>
    {
      formik => (
        <form
          className={cx('react-formik-ui form-wrapper', { styled }, className)}
          onSubmit={formik.handleSubmit}
          {...rest}
        >
          {children}
        </form>
      )
    }
  </FormikConsumer>
)

Form.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  styled: PropTypes.bool,
}

Form.defaultProps = {
  className: null,
  styled: false,
}

export default Form
