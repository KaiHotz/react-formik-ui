import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { FormikConsumer } from 'formik'
import { get } from '../../utils/helper'

const Checkbox = ({
  className,
  disabled,
  hint,
  id,
  label,
  name,
  required,
  text,
  ...rest
}) => (
  <FormikConsumer>
    {
      formik => {
        const { touched, errors, values } = formik
        const error = get(touched, name) && get(errors, name)

        return (
          <div className={cx('form-element checkbox-wrapper', className, { hasError: !!error, disabled })}>
            {
              label && (
                <label
                  htmlFor={name}
                  className="checkbox-label"
                >
                  {`${label}${required ? ' *' : ''}`}
                </label>
              )
            }
            <div className="checkbox-input-wrapper">
              <input
                id={id || name}
                name={name}
                type="checkbox"
                checked={get(values, name)}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={disabled}
                {...rest}
              />
              <label
                htmlFor={name}
                className="checkbox-text"
              >
                {text}
              </label>
            </div>
            {
              error && (
                <span className="error">
                  {error}
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
  </FormikConsumer>
)

Checkbox.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hint: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
}

Checkbox.defaultProps = {
  className: null,
  disabled: false,
  hint: null,
  id: null,
  label: null,
  required: false,
  text: null,
}

export default Checkbox
