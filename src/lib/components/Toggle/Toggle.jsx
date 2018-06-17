import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../Button'
import { get } from '../../utils/helper'
import './styles.css'

class Toggle extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
  }
  static contextTypes = {
    formik: PropTypes.shape({}),
  }
  static defaultProps = {
    disabled: false,
    className: null,
  }

  handleChange = () => {
    const { formik } = this.context
    const { values } = formik
    const { name } = this.props

    formik.setFieldValue(name, !get(values, name))
    formik.setFieldTouched(name, true)
  }

  render() {
    const {
      className, disabled, name, ...rest
    } = this.props
    const { formik } = this.context
    const { values } = formik
    const active = get(values, name)

    return (
      <Button
        className={cx('toggle-btn', { 'toggle-btn--active': active }, className)}
        onClick={this.handleChange}
        disabled={disabled}
        role="switch"
        {...rest}
        aria-label="toggle"
        aria-checked={active}
      >
        <span className="toggle-btn__toggle" />
      </Button>
    )
  }
}

export default Toggle
