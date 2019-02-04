
/*eslint-disable*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect, getIn } from 'formik'
import withLabel from '../withLabel'
import './styles.scss'

export class Autocomplete extends Component {
  static propTypes = {
    formik: PropTypes.object.isRequired,
  }

  state = {
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: '',
  }

  render() {
    return (
      <div />
    )
  }
}

export default connect(withLabel('autocomplete')(Autocomplete))

