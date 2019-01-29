import React, { Component } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { connect, getIn } from 'formik'

import InfoMsg from '../InfoMsg'

const withLabel = (component, labelClass = null, animated = false) => WrappedComponent => class WithLabel extends Component {
  static propTypes = {
    formik: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    required: PropTypes.bool,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    hint: PropTypes.string,
  }

  static defaultProps = {
    disabled: false,
    label: null,
    required: false,
    className: null,
    hint: null,
    placeholder: null,
  }

  state = {
    hide: false,
  }

  handleAutoFill = e => {
    this.setState({
      hide: e.animationName === 'onAutoFillStart',
    })
  }

  toggleFocus = () => {
    this.setState(prevState => ({
      hide: !prevState.hide,
    }))
  }

  render() {
    const {
      formik: {
        touched, errors, values,
      },
      name,
      label,
      required,
      disabled,
      hint,
      className,
      placeholder,
    } = this.props
    const { hide } = this.state
    const error = getIn(errors, name)
    const touch = getIn(touched, name)
    const value = getIn(values, name)
    const hidden = hide || value || placeholder || (disabled && value)
    const errorMsg = touch && error ? error : null

    return (
      <div className={cx('form-element', `${component}-wrapper`, className, { isDisabled: disabled })}>
        <label
          htmlFor={name}
          className={cx({ isStyled: animated, isDisabled: disabled, hasError: !!errorMsg })}
        >
          {
            label && (
              <span className={cx({ hidden }, labelClass)}>
                {`${label}${required ? ' *' : ''}`}
              </span>
            )
          }
          <WrappedComponent {...this.props} handleAutoFill={this.handleAutoFill} toggleFocus={this.toggleFocus} />
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
}

export default connect(withLabel)
