import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const SubmitBtn = ({
  className,
  disabled,
  text,
  type,
  ...rest
}, context) => (
  <button
    className={cx('btn submit-btn', className, { disabled })}
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
  className: PropTypes.string,
  disabled: PropTypes.bool,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  type: PropTypes.string,
}

SubmitBtn.defaultProps = {
  className: null,
  disabled: false,
  text: 'Submit',
  type: 'submit',
}

export default SubmitBtn
