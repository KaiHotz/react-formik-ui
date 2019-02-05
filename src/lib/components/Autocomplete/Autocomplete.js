import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect, getIn } from 'formik'
import withLabel from '../withLabel'
import './styles.scss'

export class Autocomplete extends Component {
  static propTypes = {
    /** @ignore */
    formik: PropTypes.instanceOf(Object).isRequired,
    /** Sets the Name of the Autocomplete */
    name: PropTypes.string.isRequired,
    /** Array of suggestions to be searchred in */
    suggestions: PropTypes.instanceOf(Array).isRequired,
  }

  state = {
    activeSuggestion: 0,
    filteredSuggestions: null,
    showSuggestions: false,
  }

  handleChange = e => {
    const { formik: { setFieldValue, setFieldTouched }, name, suggestions } = this.props
    const { value } = e.currentTarget

    const filteredSuggestions = suggestions.filter(
      suggestion => suggestion.toLowerCase().startsWith(value.toLowerCase()),
    )

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
    })

    setFieldValue(name, value)
    setFieldTouched(name, true)
  };

  handleClick = e => {
    const { formik: { setFieldValue, setFieldTouched }, name } = this.props
    const { innerText } = e.currentTarget

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: null,
      showSuggestions: false,
    })

    setFieldValue(name, innerText)
    setFieldTouched(name, true)
  };

  handleKeyDown = e => {
    const { formik: { setFieldValue, setFieldTouched }, name } = this.props
    const { activeSuggestion, filteredSuggestions } = this.state
    if (e.keyCode === 13) {
      e.preventDefault()

      setFieldValue(name, filteredSuggestions[activeSuggestion])
      setFieldTouched(name, true)

      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
      })
    } else if (e.keyCode === 38) {
      const { length } = filteredSuggestions

      this.setState(state => ({
        activeSuggestion: state.activeSuggestion === 0 ? (length - 1) : state.activeSuggestion - 1,
      }))
    } else if (e.keyCode === 40) {
      const { length } = filteredSuggestions

      this.setState(state => ({
        activeSuggestion: state.activeSuggestion === (length - 1) ? 0 : state.activeSuggestion + 1,
      }))
    }
  }

  render() {
    const {
      formik: {
        values,
      },
      name,
      ...rest
    } = this.props
    const {
      activeSuggestion,
      filteredSuggestions,
      showSuggestions,
    } = this.state
    const value = getIn(values, name)

    return (
      <Fragment>
        <input
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          {...rest}
          value={value}
          type="text"
          tabIndex="0"
        />
        {
          showSuggestions && !!value && (
            <ul className="suggestions">
              {
                filteredSuggestions ?.map((suggestion, index) => (
                  <li
                    className={cx({ 'suggestion-active': index === activeSuggestion })}
                    key={suggestion}
                    onClick={this.handleClick}
                    onKeyPress={this.handleClick}
                  >
                    {suggestion}
                  </li>
                ))
              }
            </ul>
          )
        }
      </Fragment>
    )
  }
}

export default connect(withLabel('autocomplete')(Autocomplete))

