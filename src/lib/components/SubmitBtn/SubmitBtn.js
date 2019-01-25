import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'formik'

export const SubmitBtn = ({
  formik,
  className,
  disabled,
  text,
  value,
  ...rest
}) => (
  <button
    className={cx('btn submit-btn', className, { isDisabled: disabled })}
    onClick={formik.handleSubmit}
    type="submit"
    value={value}
    disabled={disabled}
    {...rest}
  >
    {text}
  </button>
)

SubmitBtn.propTypes = {
  formik: PropTypes.object.isRequired,
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

export default connect(SubmitBtn)
