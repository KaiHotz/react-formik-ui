import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect, getIn } from 'formik'
import './styles.scss'

export class Toggle extends Component {
  static propTypes = {
    /** @ignore */
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
      formik, className, disabled, name,
    } = this.props
    const checked = getIn(formik.values, name)

    return (
      <label className={cx('toggle-switch', className, { isDisabled: disabled })}>
        <input
          name={name}
          type="checkbox"
          checked={checked}
          onChange={this.handleChange}
          disabled={disabled}
        />
        <span className="slider" />
      </label>
    )
  }
}

export default connect(Toggle)
