import React, { Fragment } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { connect, getIn } from 'formik'

import InfoMsg from '../InfoMsg'

export const Label = ({
  name,
  styled,
  disabled,
  hide,
  text,
  required,
  children,
  className,
  hint,
  formik: {
    touched, errors,
  },

}) => {
  const error = getIn(errors, name)

  const touch = getIn(touched, name)

  const errorMsg = touch && error ? error : null

  return (
    <Fragment>
      <label
        htmlFor={name}
        className={cx({ isStyled: styled, isDisabled: disabled })}
      >
        {
          text && (
            <span className={cx({ hide }, className)}>
              {`${text}${required ? ' *' : ''}`}
            </span>
          )
        }
        {children}
      </label>
      {
        !!errorMsg && (<InfoMsg errorMsg={errorMsg} />)
      }
      {
        hint && (<InfoMsg hintMsg={hint} />)
      }
    </Fragment>
  )
}

Label.propTypes = {
  formik: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  styled: PropTypes.bool,
  disabled: PropTypes.bool,
  hide: PropTypes.bool,
  text: PropTypes.string,
  required: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hint: PropTypes.string,
}

Label.defaultProps = {
  styled: false,
  disabled: false,
  hide: false,
  text: null,
  required: false,
  className: null,
  hint: null,
}

export default connect(Label)
