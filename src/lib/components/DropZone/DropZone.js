import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Dropzone from 'react-dropzone'
import { connect, getIn } from 'formik'

import Label from '../Label'
import InfoMsg from '../InfoMsg'
import './styles.scss'

export const DropZone = ({
  formik,
  className,
  disabled,
  hint,
  label,
  name,
  required,
  accept,
  zoneActiveText,
  disabledText,
  placeholder,
  ...rest
}) => {
  const {
    touched, errors, values, setFieldValue, setFieldTouched,
  } = formik
  const error = getIn(errors, name)
  const touch = getIn(touched, name)
  const errorMsg = touch && error ? error : null

  const onDrop = acceptedFiles => {
    if (acceptedFiles.length === 0) { return }
    setFieldValue(name, values[name].concat(acceptedFiles))
    setFieldTouched(name, true)
  }

  return (
    <div className={cx('form-element dropzone-wrapper', className, { hasError: !!errorMsg, isDisabled: disabled })}>
      <Label
        name={name}
        text={label}
        required={required}
      >
        <Dropzone
          className="dropzone"
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
                          height={200}
                          width={200}
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
      </Label>
      {
        !!errorMsg && (<InfoMsg errorMsg={errorMsg} />)
      }
      {
        hint && (<InfoMsg hintMsg={hint} />)
      }
    </div>
  )
}

DropZone.propTypes = {
  formik: PropTypes.object.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hint: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  accept: PropTypes.string,
  zoneActiveText: PropTypes.string,
  disabledText: PropTypes.string,
  placeholder: PropTypes.string,
}

DropZone.defaultProps = {
  className: null,
  disabled: false,
  hint: null,
  id: null,
  label: null,
  required: false,
  accept: 'image/*',
  zoneActiveText: 'Drop file(s) here',
  disabledText: 'File upload disabled',
  placeholder: 'Dropp some files here.',
}

export default connect(DropZone)
