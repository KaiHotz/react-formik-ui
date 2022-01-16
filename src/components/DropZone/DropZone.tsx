/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { FC, CSSProperties, ReactNode } from 'react';
import cx from 'classnames';
import { useField, useFormikContext } from 'formik';
import { useDropzone, DropzoneProps, DropzoneOptions, DropzoneState } from 'react-dropzone';
import WithLabel from '../WithLabel';

type DropZoneOptionsState = DropzoneOptions & DropzoneState;

export interface IFormikUiDropZoneProps extends DropZoneOptionsState {
  /** Sets the Name of the DropZone Field */
  name: string;
  /** Adds a custom class to the React-Dropzone component */
  className?: string;
  /** Adds a custom inline styles to the DropZone wrapper div  */
  style?: CSSProperties;
  /** Disables the DropZone Field */
  disabled?: boolean;
  /** Sets an Id for the Dropzone, if not passed, the id will be the name */
  id?: string;
  /** Set accepted file types. See [https://github.com/okonet/attr-accept](https://github.com/okonet/attr-accept) for more information. Keep in mind that mime type determination is not reliable across platforms. CSV files, for example, are reported as text/plain under macOS but as application/vnd.ms-excel under Windows. In some cases there might not be a mime type set at all. See: [https://github.com/react-dropzone/react-dropzone/issues/276](https://github.com/react-dropzone/react-dropzone/issues/276) */
  accept?: string;
  /** Sets the main Label for the DropZone Field */
  label?: ReactNode;
  /** Sets the text to be shown when draging files over the drop zone */
  zoneActiveText?: string;
  /** Shows the number of accepted and rejected files after each drop */
  fileInfo?: boolean;
  /** text shown as placeholder if DropZone is disabled  */
  disabledText?: string;
  /** Sets the Placeholder text */
  placeholder?: string;
  /** Sets a hint text after/below the DropZone Field */
  hint?: ReactNode;
  /** Sets the field as requierd, if label is passed, an * is added to the end of the main label. Validation will only work if you pass the required() method in the yup validation schema */
  required?: boolean;
  /** Enables a Clear button below the Dropbox, that enables you to clear out all the files you added to the Dropbox */
  withClearButton?: string;
  /** Sets the text to be shown on the Clear Button */
  clearButtonText?: string;
  /** Allow drag 'n' drop (or selection from the file dialog) of multiple files. Set to false to enable Single file upload */
  multiple?: boolean;
}

export const DropZone: FC<IFormikUiDropZoneProps> = ({
  disabled,
  id,
  name,
  accept,
  zoneActiveText = 'Drop file(s) here',
  fileInfo,
  disabledText = 'File upload disabled',
  placeholder = 'Try dropping some files here, or click to select files to upload.',
  className,
  withClearButton,
  clearButtonText = 'Clear Files',
  multiple = true,
  ...rest
}) => {
  const { handleReset } = useFormikContext();
  const [{ value }, , { setValue }] = useField(name);

  const onDrop: DropzoneProps['onDrop'] = (dropedFiles) => {
    const files = multiple ? value.concat(dropedFiles) : dropedFiles;

    setValue(files);
  };

  const { getRootProps, getInputProps, isDragActive, acceptedFiles, fileRejections } = useDropzone({
    accept,
    onDrop,
    disabled,
    multiple,
    ...rest,
  });

  return (
    <>
      <section>
        <div
          {...getRootProps()}
          className={cx('dropzone', className, {
            'dropzone--active': isDragActive,
            'dropzone--disabled': disabled,
          })}
        >
          {disabled ? (
            <p className="text">{disabledText}</p>
          ) : (
            <>
              <input {...getInputProps()} id={id || name} name={name} />
              {(acceptedFiles.length && value.length) || fileRejections.length ? (
                value.map((file: File) => {
                  if (file.type.includes('image')) {
                    return <img key={file.name} src={URL.createObjectURL(file)} className="img-thumbnail" alt={file.name} />;
                  }

                  return (
                    <div key={file.name} className="icon-wrapper">
                      <div className="icon">
                        <i title={file.name.split('.').pop()} />
                      </div>
                      <p>{file.name.split('.').shift()}</p>
                    </div>
                  );
                })
              ) : isDragActive ? (
                <p className="text">{zoneActiveText}</p>
              ) : (
                <p className="text">{placeholder}</p>
              )}
              {fileInfo && <div className="file-info">{`Accepted ${acceptedFiles.length}, rejected ${fileRejections.length} files`}</div>}
            </>
          )}
        </div>
      </section>
      {withClearButton && !disabled && (
        <button className="clear-button" type="button" onClick={handleReset}>
          {clearButtonText}
        </button>
      )}
    </>
  );
};

export default WithLabel('dropzone')(DropZone);
