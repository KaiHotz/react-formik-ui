import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const SubmitBtn = ({
  className,
  disabled,
  text,
  value,
  ...rest
}, context) => (
  <button
    className={cx('btn submit-btn', className, { disabled })}
    onClick={context.formik.handleSubmit}
    type="submit"
    value={value}
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
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
}

SubmitBtn.defaultProps = {
  className: null,
  disabled: false,
  value: null,
  text: 'Submit',
}

export default SubmitBtn
