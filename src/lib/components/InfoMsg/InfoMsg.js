import React from 'react'
import PropTapes from 'prop-types'
import cx from 'classnames'

const InfoMsg = ({ hintMsg, errorMsg }) => (
  <span className={cx({ hint: !!hintMsg, error: !!errorMsg })}>
    {errorMsg || hintMsg}
  </span>
)

InfoMsg.propTypes = {
  hintMsg: PropTapes.string,
  errorMsg: PropTapes.string,
}

InfoMsg.defaultProps = {
  hintMsg: null,
  errorMsg: null,
}

export default InfoMsg
