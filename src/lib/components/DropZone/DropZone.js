import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Dropzone from 'react-dropzone'
import { connect } from 'formik'

import withLabel from '../withLabel'
import './styles.scss'

export const DropZone = ({
  formik,
  disabled,
  name,
  accept,
  zoneActiveText,
  disabledText,
  placeholder,
  ...rest
}) => {
  const {
    values, setFieldValue, setFieldTouched,
  } = formik

  const onDrop = acceptedFiles => {
    if (acceptedFiles.length === 0) { return }
    setFieldValue(name, values[name].concat(acceptedFiles))
    setFieldTouched(name, true)
  }

  return (
    <Dropzone
      accept={accept}
      disabled={disabled}
      onDrop={onDrop}
      {...rest}
    >
      {
        ({ isDragActive, acceptedFiles, rejectedFiles }) => {
          if (disabled) { return disabledText }
          if (isDragActive) { return zoneActiveText }

          return acceptedFiles.length || rejectedFiles.length
            ? (
              <Fragment>
                {
                  values[name].map(file => (
                    <img
                      key={file.name}
                      src={URL.createObjectURL(file)}
                      className="img-thumbnail"
                      alt={file.name}
                    />
                  ))
                }
                <div className="fileInfo">
                  {`Accepted ${acceptedFiles.length}, rejected ${rejectedFiles.length} files`}
                </div>
              </Fragment>
            ) : placeholder
        }
      }
    </Dropzone>
  )
}

DropZone.propTypes = {
  formik: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  accept: PropTypes.string,
  zoneActiveText: PropTypes.string,
  disabledText: PropTypes.string,
  placeholder: PropTypes.string,
}

DropZone.defaultProps = {
  disabled: false,
  id: null,
  accept: 'image/*',
  zoneActiveText: 'Drop file(s) here',
  disabledText: 'File upload disabled',
  placeholder: 'Dropp some files here.',
}

export default connect(withLabel('dropzone')(DropZone))
