import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'formik'

export const SubmitBtn = ({
  formik,
  className,
  disabled,
  children,
  ...rest
}) => (
  <button
    className={cx('form-element btn submit-btn', className, { isDisabled: disabled })}
    onClick={formik.handleSubmit}
    type="submit"
    disabled={disabled}
    {...rest}
  >
    {children}
  </button>
)

SubmitBtn.propTypes = {
  /** @ignore */
  formik: PropTypes.object.isRequired,
  /** Adds a custom class to the SubmitBtn */
  className: PropTypes.string,
  /** Disables the SubmitBtn */
  disabled: PropTypes.bool,
  /** Renders the children passed to the button */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
}

SubmitBtn.defaultProps = {
  className: null,
  disabled: false,
  children: 'Submit',
}

export default connect(SubmitBtn)
