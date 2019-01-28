import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect, getIn } from 'formik'

import Label from '../Label'
import InfoMsg from '../InfoMsg'
import './styles.scss'

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
    const hidden = hide || focus || value || placeholder || (disabled && value)
    const styled = ['text', 'email', 'number', 'password', 'search', 'tel', 'url'].includes(type)

    return (
      <div className={cx('form-element input-wrapper', className, `${type}-input`, { hasError: !!errorMsg, isDisabled: disabled })}>
        <Label
          name={name}
          styled={styled}
          disabled={disabled}
          hide={hidden}
          text={label}
          required={required}
        >
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
        </Label>
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

export default connect(Input)
