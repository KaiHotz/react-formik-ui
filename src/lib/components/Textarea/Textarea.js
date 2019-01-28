import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect, getIn } from 'formik'

import Label from '../Label'
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
      formik: {
        values, handleChange,
      },
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
    const { focus } = this.state
    const value = getIn(values, name)
    const hidden = focus || value || placeholder || (disabled && value)

    return (
      <div className={cx('form-element textarea-wrapper', className, { isDisabled: disabled })}>
        <Label
          name={name}
          disabled={disabled}
          hide={hidden}
          text={label}
          required={required}
          hint={hint}
        >
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
        </Label>
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
