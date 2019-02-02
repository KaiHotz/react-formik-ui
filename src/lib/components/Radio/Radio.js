import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect, getIn } from 'formik'

import withLabel from '../withLabel'
import './styles.scss'

export const Radio = ({
  formik: {
    values, handleChange, handleBlur,
  },
  disabled,
  name,
  options,
  ...rest
}) => (
  <Fragment>
    {
      options.map(option => (
        <div key={option.label} className="radio-option">
          <input
            checked={getIn(values, name) === option.value}
            id={`${name}-id-${option.value}`}
            value={option.value}
            onChange={handleChange}
            onBlur={handleBlur}
            name={name}
            disabled={disabled}
            {...rest}
            type="radio"
          />
          <label
            htmlFor={`${name}-id-${option.value}`}
          >
            {option.label}
          </label>
        </div>
      ))
    }
  </Fragment>
)

Radio.propTypes = {
  /** @ignore */
  formik: PropTypes.object.isRequired,
  /** Adds a custom class to the Radio wrapper div */
  className: PropTypes.string,
  /** Disables the Radio Fields */
  disabled: PropTypes.bool,
  /** Sets the Name of the Radio Fields */
  name: PropTypes.string.isRequired,
  /** Sets the main Label for the Radio Fields */
  label: PropTypes.string,
  /** Array in the shape of [ { value: string or number, label: string } ] */
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
  })).isRequired,
  /** Sets a hint text after/below the Radio component */
  hint: PropTypes.string,
  /** Sets the field as requierd, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema */
  required: PropTypes.bool,
}

Radio.defaultProps = {
  className: null,
  label: null,
  disabled: false,
  hint: null,
  required: false,
}

export default connect(withLabel('radio')(Radio))
