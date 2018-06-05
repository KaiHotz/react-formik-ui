import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const SubmitBtn = ({
  type,
  className,
  text,
  disabled,
  imgSrc,
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
    {
      imgSrc &&
      <img
        src={imgSrc}
        alt='btn icon'
      />
    }
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
  imgSrc: PropTypes.string
}

SubmitBtn.defaultProps = {
  type: 'button',
  className: null,
  text: 'Submit',
  disabled: false,
  imgSrc: null
}

export default SubmitBtn
