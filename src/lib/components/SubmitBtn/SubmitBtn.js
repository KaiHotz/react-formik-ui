import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'formik'

export const SubmitBtn = ({
  formik,
  className,
  disabled,
  value,
  children,
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
    {children}
  </button>
)

SubmitBtn.propTypes = {
  /** @ignore */
  formik: PropTypes.object.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
}

SubmitBtn.defaultProps = {
  className: null,
  disabled: false,
  value: null,
  children: 'Submit',
}

export default connect(SubmitBtn)
