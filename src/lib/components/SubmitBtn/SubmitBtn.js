import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const SubmitBtn = ({
  type,
  className,
  content,
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
    {content}
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
  content: PropTypes.string,
  disabled: PropTypes.bool,
  imgSrc: PropTypes.string
}

SubmitBtn.defaultProps = {
  type: 'button',
  className: null,
  content: null,
  disabled: false,
  imgSrc: null
}

export default SubmitBtn
