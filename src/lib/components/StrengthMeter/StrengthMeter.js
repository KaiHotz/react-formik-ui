import React from 'react'
import PropTypes from 'prop-types'
import zxcvbn from 'zxcvbn'
import './styles.scss'

const score = value => zxcvbn(value).score + 1

const handleStregthLabel = score => {
  switch (score) {
    case 1:
    case 2:
      return 'Weak'
    case 3:
      return 'Fair'
    case 4:
      return 'Good'
    case 5:
      return 'Strong'
    default:
      return 'Weak'
  }
}

export const StrengthMeter = ({ value }) => (
  <div className="strength-meter">
    <progress
      className={`strength-${handleStregthLabel(score(value))}`}
      value={score(value)}
      max="5"
    />
    <strong>Password strength: </strong>
    {handleStregthLabel(score(value))}
  </div>
)

StrengthMeter.propTypes = {
  value: PropTypes.string.isRequired,
}

export default StrengthMeter
