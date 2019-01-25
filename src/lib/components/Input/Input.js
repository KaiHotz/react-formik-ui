import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect, getIn } from 'formik'
import zxcvbn from 'zxcvbn'

export class Input extends Component {
  static propTypes = {
    formik: PropTypes.object.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    hint: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    withStrengthMeter: PropTypes.bool,
    type: PropTypes.oneOf([
      'text',
      'color',
      'email',
      'hidden',
      'image',
      'number',
      'password',
      'range',
      'search',
      'tel',
      'url',
    ]),
  }

  static defaultProps = {
    className: null,
    disabled: false,
    hint: null,
    id: null,
    label: null,
    placeholder: null,
    required: false,
    withStrengthMeter: false,
    type: 'text',
  }

  state = {
    hide: false,
    focus: false,
  }

  handleAutoFill = e => {
    this.setState({
      hide: e.animationName === 'onAutoFillStart',
    })
  }

  toggleFocus = () => {
    this.setState(prevState => ({
      focus: !prevState.focus,
    }))
  }

  handlePasswordLabel = score => {
    switch (score) {
      case 1:
      case 2:
        return 'Weak'
      case 3:
        return 'Fair'
      case 4:
        return 'Good'
      case 5:
        return 'Strong'
      default:
        return 'Weak'
    }
  }

  render() {
    const {
      formik: {
        touched, errors, values, handleChange,
      },
      className,
      disabled,
      hint,
      id,
      label,
      name,
      placeholder,
      required,
      withStrengthMeter,
      type,
      ...rest
    } = this.props

    const { hide, focus } = this.state

    const error = getIn(errors, name)
    const value = getIn(values, name)
    const touch = getIn(touched, name)
    const errorMsg = touch && error ? error : null
    const score = type === 'password' && (zxcvbn(value).score + 1)
    const showStrengthMeter = value && type === 'password' && withStrengthMeter
    const hidden = hide || focus || value || placeholder || (disabled && value)

    return (
      <div className={cx('form-element input-wrapper', className, { hasError: !!errorMsg, isDisabled: disabled })}>
        <label htmlFor={name} className={cx({ isDisabled: disabled })}>
          {
            label && (
              <span className={cx({ hide: hidden })}>
                {`${label}${required ? ' *' : ''}`}
              </span>
            )
          }
          <input
            id={id || name}
            name={name}
            type={type}
            onAnimationStart={this.handleAutoFill}
            placeholder={placeholder}
            value={getIn(values, name, '')}
            onChange={handleChange}
            onFocus={this.toggleFocus}
            onBlur={this.toggleFocus}
            disabled={disabled}
            {...rest}
          />
        </label>
        {
          errorMsg && (
            <span className="error">
              {errorMsg}
            </span>
          )
        }
        {
          hint && (
            <span className="hint">
              {hint}
            </span>
          )
        }
        {
          showStrengthMeter && (
            <div className="strength-meter">
              <progress
                className={`strength-${this.handlePasswordLabel(score)}`}
                value={score}
                max="5"
              />
              <strong>Password strength: </strong>
              {this.handlePasswordLabel(score)}
            </div>
          )
        }
      </div>
    )
  }
}

export default connect(Input)
