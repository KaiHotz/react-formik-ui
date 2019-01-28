import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect, getIn } from 'formik'
import './styles.scss'

export class Textarea extends Component {
  state = {
    focus: false,
  }

  toggleFocus = () => {
    this.setState(prevState => ({
      focus: !prevState.focus,
    }))
  }

  render() {
    const {
      formik,
      className,
      disabled,
      hint,
      id,
      label,
      name,
      placeholder,
      required,
      ...rest
    } = this.props
    const {
      touched, errors, values, handleChange,
    } = formik

    const { focus } = this.state

    const error = getIn(errors, name)
    const value = getIn(values, name)
    const touch = getIn(touched, name)
    const errorMsg = touch && error ? error : null
    const hidden = focus || value || placeholder || (disabled && value)

    return (
      <div className={cx('form-element textarea-wrapper', className, { hasError: !!errorMsg, isDisabled: disabled })}>
        <label htmlFor={name}>
          {
            label && (
              <span className={cx({ hide: hidden })}>
                {`${label}${required ? ' *' : ''}`}
              </span>
            )

          }
          <textarea
            id={id || name}
            name={name}
            placeholder={placeholder}
            value={getIn(values, name)}
            onChange={handleChange}
            onFocus={this.toggleFocus}
            onBlur={this.toggleFocus}
            disabled={disabled}
            {...rest}
          />
        </label>

        {
          !!errorMsg && (
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
      </div>
    )
  }
}

Textarea.propTypes = {
  formik: PropTypes.object.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hint: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
}

Textarea.defaultProps = {
  className: null,
  disabled: false,
  hint: null,
  id: null,
  label: null,
  placeholder: null,
  required: false,
}

export default connect(Textarea)
