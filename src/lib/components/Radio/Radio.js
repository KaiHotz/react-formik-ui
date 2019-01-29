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
            type="radio"
            checked={getIn(values, name) === option.value}
            id={`${name}-id-${option.value}`}
            value={option.value}
            onChange={handleChange}
            onBlur={handleBlur}
            name={name}
            disabled={disabled}
            {...rest}
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
  formik: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
  })).isRequired,
}

Radio.defaultProps = {
  disabled: false,
}

export default connect(withLabel('radio')(Radio))
