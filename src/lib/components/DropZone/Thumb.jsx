import React from 'react'
import PropTypes from 'prop-types'

class Thumb extends React.Component {
  static propTypes = {
    file: PropTypes.shape().isRequired,
  }

  state = {
    loading: false,
    thumb: undefined,
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.file) { return }

    this.setState({ loading: true }, () => {
      const reader = new FileReader()

      reader.onloadend = () => {
        this.setState({ loading: false, thumb: reader.result })
      }

      reader.readAsDataURL(nextProps.file)
    })
  }

  render() {
    const { file } = this.props
    const { loading, thumb } = this.state

    if (!file || loading) { return <p>loading...</p> }

    if (file.type.includes('image')) {
      return (
        <img
          src={thumb}
          alt={file.name}
          className="img-thumbnail"
          height={200}
          width={200}
        />
      )
    }

    return (
      <p>
        {file.name}
      </p>
    )
  }
}

export default Thumb
