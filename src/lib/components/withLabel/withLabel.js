import React, { PureComponent } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { getIn } from 'formik'

import InfoMsg from '../InfoMsg'

const withLabel = (component = 'input') => (
  WrappedComponent => class WithLabel extends PureComponent {
    static propTypes = {
      formik: PropTypes.object.isRequired,
      name: PropTypes.string.isRequired,
      label: PropTypes.string,
      className: PropTypes.string,
      hint: PropTypes.string,
      placeholder: PropTypes.string,
      disabled: PropTypes.bool,
      required: PropTypes.bool,
    }

    static defaultProps = {
      label: null,
      className: null,
      hint: null,
      placeholder: null,
      disabled: false,
      required: false,
    }

    state = {
      hide: false,
    }

    handleAutoFill = e => {
      this.setState({
        hide: e.animationName === 'onAutoFillStart',
      })
    }

    handleFocus = () => {
      this.setState({
        hide: true,
      })
    }

    handleBlur = () => {
      this.setState({
        hide: false,
      })
    }

    render() {
      const {
        formik: {
          touched, errors, values,
        },
        name,
        label,
        className,
        hint,
        placeholder,
        disabled,
        required,
      } = this.props
      const { hide } = this.state
      const error = getIn(errors, name)
      const touch = getIn(touched, name)
      const value = getIn(values, name)
      const hidden = hide || !!value || !!placeholder || !!(disabled && value)
      const errorMsg = touch && error ? error : null

      return (
        <div className={cx('form-element', `${component}-wrapper`, className)}>
          <label
            htmlFor={name}
            className={cx({ isDisabled: disabled, hasError: !!errorMsg })}
          >
            {
              label && (
                <span className={cx({ hidden })}>
                  {`${label}${required ? ' *' : ''}`}
                </span>
              )
            }
            <WrappedComponent
              onAnimationStart={this.handleAutoFill}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              {...this.props}
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
  }
)

export default withLabel
