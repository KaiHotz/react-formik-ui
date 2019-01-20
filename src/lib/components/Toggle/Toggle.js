import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect, getIn } from 'formik'
import Button from '../Button'
import './styles.css'

export class Toggle extends Component {
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

  handleChange = () => {
    const { name, formik } = this.props
    const { values, setFieldValue, setFieldTouched } = formik

    setFieldValue(name, !getIn(values, name))
    setFieldTouched(name, true)
  }

  render() {
    const {
      formik, className, disabled, name, ...rest
    } = this.props
    const active = getIn(formik.values, name)

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

export default connect(Toggle)
