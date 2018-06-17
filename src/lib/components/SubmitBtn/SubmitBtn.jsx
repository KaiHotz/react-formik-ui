import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const SubmitBtn = ({
  type,
  className,
  disabled,
  text,
  ...rest
}, context) => (
  <button
    className={cx('form-element submit-btn', className, { disabled })}
    onClick={context.formik.handleSubmit}
    type={type}
    disabled={disabled}
    {...rest}
  >
    {text}
  </button>
)

SubmitBtn.contextTypes = {
  formik: PropTypes.shape({}),
}

SubmitBtn.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
}

SubmitBtn.defaultProps = {
  type: 'submit',
  className: null,
  disabled: false,
  text: 'Submit',
}

export default SubmitBtn
