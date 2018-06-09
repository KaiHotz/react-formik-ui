import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../Button'
import { get } from '../../utils/helper'
import './styles.css'

class Toggle extends Component {
  static contextTypes = {
    formik: PropTypes.shape({})
  }

  static propTypes = {
    disabled: PropTypes.bool,
    className: PropTypes.string,
    name: PropTypes.string
  }

  static defaultProps = {
    disabled: false,
    className: null,
    name: null
  }

  onChange = () => {
    const { formik } = this.context
    const { values } = formik
    const { name } = this.props

    formik.setFieldValue(name, !get(values, name))
    formik.setFieldTouched(name, true)
  }

  render () {
    const { className, disabled, name, ...rest } = this.props
    const { formik } = this.context
    const { values } = formik
    const active = get(values, name)

    return (
      <Button
        className={cx('toggle', { 'toggle--active': active }, className)}
        onClick={this.onChange}
        disabled={disabled}
        role="switch"
        {...rest}
        aria-label="toggle"
        aria-checked={active}
      >
        <span className={`toggle__toggle`} />
      </Button>
    )
  }
}

export default Toggle
