import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useFormikContext } from 'formik'

export const SubmitBtn = ({
  className,
  disabled,
  children,
  ...rest
}) => {
  const { handleSubmit } = useFormikContext()

  return (
    <button
      className={cx('form-element btn submit-btn', className, { isDisabled: disabled })}
      onClick={handleSubmit}
      type="submit"
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}

SubmitBtn.propTypes = {
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

export default SubmitBtn
