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
  /** @ignore */
  formik: PropTypes.object.isRequired,
  /** Adds a custom class to the DropZone wrapper div */
  className: PropTypes.string,
  /** Disables the DropZone Field */
  disabled: PropTypes.bool,
  id: PropTypes.string,
  /** Sets the Name of the DropZone Field */
  name: PropTypes.string.isRequired,
  /** Allow specific types of files. See [attr-accept](https://github.com/okonet/attr-accept) for more information. */
  accept: PropTypes.string,
  /** Sets the main Label for the DropZone Field */
  label: PropTypes.string,
  /** Sets the text to be shown when draging files over the drop zone */
  zoneActiveText: PropTypes.string,
  /** text shown as placeholder if DropZone is disabled  */
  disabledText: PropTypes.string,
  /** Sets the Placeholder text */
  placeholder: PropTypes.string,
  /** Sets a hint text after/below the DropZone Field */
  hint: PropTypes.string,
  /** Sets the field as requierd, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema */
  required: PropTypes.bool,
}

DropZone.defaultProps = {
  className: null,
  disabled: false,
  id: null,
  accept: 'image/*',
  label: null,
  zoneActiveText: 'Drop file(s) here',
  disabledText: 'File upload disabled',
  placeholder: 'Dropp some files here.',
  hint: null,
  required: false,
}

export default connect(withLabel('dropzone')(DropZone))
