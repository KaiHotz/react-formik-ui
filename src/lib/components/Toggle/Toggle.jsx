import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'formik'
import Button from '../Button'
import { get } from '../../utils/helper'
import './styles.css'

class Toggle extends Component {
  static propTypes = {
    formik: PropTypes.object.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string.isRequired,
  }

  static defaultProps = {
    className: null,
    disabled: false,
  }

  handleChange = formik => () => {
    const { name } = this.props

    formik.setFieldValue(name, !get(formik.values, name))
    formik.setFieldTouched(name, true)
  }

  render() {
    const {
      className,
      disabled,
      name,
      formik,
      ...rest
    } = this.props

    const active = get(formik.values, name)

    return (
      <Button
        className={cx('toggle-btn', { 'toggle-btn--active': active }, className)}
        onClick={this.handleChange(formik)}
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

export default connect(Toggle)
