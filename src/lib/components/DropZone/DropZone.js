import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Dropzone from 'react-dropzone'
import Button from '../Button'
import useLabel from '../useLabel'

export const DropZone = ({
  formik: {
    values, setFieldValue, setFieldTouched,
  },
  disabled,
  id,
  name,
  accept,
  zoneActiveText,
  fileInfo,
  disabledText,
  placeholder,
  className,
  withClearButton,
  clearButtonText,
  multiple,
  ...rest
}) => {
  const onDrop = acceptedFiles => {
    const files = multiple ? values[name].concat(acceptedFiles) : acceptedFiles

    setFieldValue(name, files)
    setFieldTouched(name, true)
  }

  const clearFiles = () => {
    setFieldValue(name, [])
    setFieldTouched(name, false)
  }

  return (
    <Fragment>
      <Dropzone
        {...rest}
        id={id || name}
        name={name}
        accept={accept}
        disabled={disabled}
        onDrop={onDrop}
        multiple={multiple}
      >
        {({
          getRootProps, getInputProps, isDragActive, acceptedFiles, rejectedFiles,
        }) => (
          <div
            {...getRootProps()}
            className={cx(className, 'dropzone', { 'dropzone--isActive': isDragActive, 'dropzone--isDisabled': disabled })}
          >
            {
              disabled && (<p className="disabledText">{disabledText}</p>)
            }
            <input {...getInputProps()} />
            {
              ((acceptedFiles.length && values[name].length) || rejectedFiles.length)
                ? (
                  values[name].map(file => {
                    if (file.type.includes('image')) {
                      return (
                        <img
                          key={file.name}
                          src={URL.createObjectURL(file)}
                          className="img-thumbnail"
                          alt={file.name}
                        />
                      )
                    }

                    return (
                      <div key={file.name} className="icon-wrapper">
                        <div className="icon">
                          <i title={file.name.split('.').pop()} />
                        </div>
                        <p>{file.name.split('.').shift()}</p>
                      </div>
                    )
                  })
                ) : isDragActive
                  ? <p className="zoneActiveText">{zoneActiveText}</p>
                  : <p className="placeholder">{placeholder}</p>
            }
            {
              fileInfo && (
                <div className="fileInfo">
                  {`Accepted ${acceptedFiles.length}, rejected ${rejectedFiles.length} files`}
                </div>
              )
            }
          </div>
        )}
      </Dropzone>
      {
        withClearButton && !disabled && (
          <Button className="clear-button" onClick={clearFiles}>{clearButtonText}</Button>
        )
      }
    </Fragment>
  )
}

DropZone.propTypes = {
  /** @ignore */
  formik: PropTypes.instanceOf(Object).isRequired,
  /** Adds a custom class to the React-Dropzone component */
  className: PropTypes.string,
  /** Adds a custom inline styles to the DropZone wrapper div  */
  style: PropTypes.instanceOf(Object),
  /** Disables the DropZone Field */
  disabled: PropTypes.bool,
  /** Sets an Id for the Dropzone, if not passed, the id will be the name */
  id: PropTypes.string,
  /** Sets the Name of the DropZone Field */
  name: PropTypes.string.isRequired,
  /** Allow specific types of files. See [attr-accept](https://github.com/okonet/attr-accept) for more information. */
  accept: PropTypes.string,
  /** Sets the main Label for the DropZone Field */
  label: PropTypes.string,
  /** Sets the text to be shown when draging files over the drop zone */
  zoneActiveText: PropTypes.string,
  /** Shows the number of accepted and rejected files after each drop */
  fileInfo: PropTypes.bool,
  /** text shown as placeholder if DropZone is disabled  */
  disabledText: PropTypes.string,
  /** Sets the Placeholder text */
  placeholder: PropTypes.string,
  /** Sets a hint text after/below the DropZone Field */
  hint: PropTypes.string,
  /** Sets the field as requierd, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema */
  required: PropTypes.bool,
  /** Enables a Clear button below the Dropbox, that enables you to clear out all the files you added to the Dropbox */
  withClearButton: PropTypes.bool,
  /** Sets the text to be shown on the Clear Button */
  clearButtonText: PropTypes.string,
  /** Allow drag 'n' drop (or selection from the file dialog) of multiple files. Set to false to enable Single file upload */
  multiple: PropTypes.bool,
}

DropZone.defaultProps = {
  className: null,
  style: null,
  disabled: false,
  id: null,
  accept: null,
  label: null,
  zoneActiveText: 'Drop file(s) here',
  fileInfo: false,
  disabledText: 'File upload disabled',
  placeholder: 'Dropp some files here.',
  hint: null,
  required: false,
  withClearButton: false,
  clearButtonText: 'Clear Files',
  multiple: true,
}

export default useLabel('dropzone')(DropZone)
