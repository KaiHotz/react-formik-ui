/*eslint-disable */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect, getIn } from 'formik'
import omit from 'lodash.omit'
import InfoMsg from '../InfoMsg'
import './styles.scss'

export const useLabel = (component = 'input') => WrappedComponent => {
  const useLabel = props => {
    const [hideLabel, setHide] = useState(false)

    const handleAutoFill = e => {
      setHide(e.animationName === 'onAutoFillStart')
    }

    const handleFocus = () => {
      setHide(true)
    }

    const handleBlur = () => {
      setHide(false)
    }

    const {
      formik: {
        touched, errors, values,
      },
      name,
      label,
      className,
      hint,
      placeholder,
      type,
      disabled,
      required,
      style,
      format,
    } = props

    const error = getIn(errors, name)
    const touch = getIn(touched, name)
    const value = getIn(values, name)
    const hide = hideLabel || !!value || !!placeholder || !!(disabled && value)
    const hidden = type && type === 'hidden'
    const errorMsg = touch && error ? error : null
    const moveLabel = component === 'phoneInput' && format === 'INTERNATIONAL'
    const passableProps = omit(props, ['className', 'hint', 'label', 'style'])

    return (
      <div className={cx('form-element', `${component}-wrapper`, className, { hidden })} style={style}>
        <label
          htmlFor={name}
          className={cx({ isDisabled: disabled, hasError: !!errorMsg })}
        >
          {
            label && (
              <span className={cx({ hide, moveLabel })}>
                {`${label}${required ? ' *' : ''}`}
              </span>
            )
          }
          <WrappedComponent
            onAnimationStart={handleAutoFill}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...passableProps}
          />
        </label>
        {
          !!errorMsg && (<InfoMsg errorMsg={errorMsg} />)
        }
        {
          hint && (<InfoMsg hintMsg={hint} />)
        }
      </div>
    )
  }

  useLabel.propTypes = {
    formik: PropTypes.instanceOf(Object).isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    className: PropTypes.string,
    hint: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    style: PropTypes.instanceOf(Object),
    format: PropTypes.string,
  }

  useLabel.defaultProps = {
    label: null,
    className: null,
    hint: null,
    placeholder: null,
    type: null,
    disabled: false,
    required: false,
    style: null,
    format: 'INTERNATIONAL'
  }

  return connect(useLabel)
}

export default useLabel
