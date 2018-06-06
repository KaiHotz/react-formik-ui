import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const SubmitBtn = ({
  type,
  className,
  text,
  disabled,
  children,
  ...rest
}, context) => (
  <button
    className={cx('submit-btn', className)}
    onClick={context.formik.handleSubmit}
    type={type}
    disabled={disabled}
    {...rest}
  >
    {text}
    {children}
  </button>
)

SubmitBtn.contextTypes = {
  formik: PropTypes.shape({})
}

SubmitBtn.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ])
}

SubmitBtn.defaultProps = {
  type: 'button',
  className: null,
  text: 'Submit',
  disabled: false,
  children: null
}

export default SubmitBtn
