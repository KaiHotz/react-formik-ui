import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useFormikContext, getIn } from 'formik'
import omit from 'lodash.omit'
import InfoMsg from '../InfoMsg'
import useLabel from './useLabel'

export const WithLabel = (component = 'input') => WrappedComponent => {
  const Label = props => {
    const {
      name,
      label,
      hint,
      placeholder,
      type,
      disabled,
      required,
      style,
      format,
    } = props

    const [hide, handleAutoFill, handleFocus, handleBlur] = useLabel(name, placeholder, disabled)
    const { errors, touched } = useFormikContext()
    const error = getIn(errors, name)
    const touch = getIn(touched, name)
    const hidden = type && type === 'hidden'
    const errorMsg = touch && error ? error : null
    const moveLabel = component === 'phoneInput' && format === 'INTERNATIONAL'
    const passableProps = omit(props, ['hint', 'label'])

    return (
      <div className={cx('form-element', component, { hasError: !!errorMsg, hidden })}>
        <div
          className={cx(`${component}-wrapper`, { isDisabled: disabled })}
        >
          {
            label && (
              <span className={cx('label', { hide, moveLabel })}>
                {`${label}${required ? ' *' : ''}`}
              </span>
            )
          }
          <WrappedComponent
            onAnimationStart={handleAutoFill}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={style}
            {...passableProps}
          />
        </div>
        {!!errorMsg && (<InfoMsg errorMsg={errorMsg} />)}
        {!!hint && (<InfoMsg hintMsg={hint} />)}
      </div>
    )
  }

  Label.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    hint: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    style: PropTypes.instanceOf(Object),
    format: PropTypes.string,
  }

  Label.defaultProps = {
    label: null,
    hint: null,
    placeholder: null,
    type: null,
    disabled: false,
    required: false,
    style: null,
    format: 'INTERNATIONAL',
  }

  return Label
}

export default WithLabel
