import useAppearance from '@/commons/appearance/useAppearance'
import React, { forwardRef, useState } from 'react'
import { INPUT_CLASSNAMES } from './variants'
import convertByteArrayToBlobUrl from '@/commons/utils/byteArrayToBlobUrl'

const FileInputField = forwardRef(function FileInputField(props, ref) {
  const { label, className = '', kit, defaultValue, fieldState, ...rest } = props
  const interfaceKit = useAppearance()
  const inputStyle = (kit ?? interfaceKit).input
  const inputVariant = INPUT_CLASSNAMES[inputStyle]
  const [selectedFile, setSelectedFile] = useState(null)


  const getFileURL = file => {
    if (file instanceof File) {
      return URL.createObjectURL(file)
    } else {
      return file
    }
  }

  const checkIsPdf = content => {
    if (content instanceof File) {
      return content.type === 'application/pdf'
    }
    if (!content) return false

    if (typeof content === 'string') {
      return content.toLowerCase().endsWith('.pdf') || content.startsWith('data:application/pdf')
    }

    return false
  }

  if (rest.defaultValue) {
    delete rest.defaultValue
  }

  if (rest.value) {
    delete rest.value
  }

  const handleFileChange = e => {
    props.onChange(e.target.files[0])
    setSelectedFile(e.target.files[0])
  }

  return (
    <div className="form-control break-inside-avoid">
      {label && (
        <label className="label label-text justify-start">
          {label} {props.isRequired && <font className='ml-1' color='red'>*</font>}
        </label>
      )}
      {selectedFile && checkIsPdf(selectedFile) ? (
        <embed
          src={getFileURL(selectedFile)}
          type="application/pdf"
          className="w-full h-96 rounded-btn overflow-hidden"
        />
      ) : !selectedFile && defaultValue && (
        <embed
          src={convertByteArrayToBlobUrl(defaultValue)}
          type="application/pdf"
          className="w-full h-96 rounded-btn overflow-hidden"
        />
      )
      }
      <input
        className={`file-input w-full ${inputVariant} ${fieldState?.error && "input-error"} ${className}`}
        ref={ref}
        type="file"
        accept="application/pdf"
        {...rest}
        onChange={handleFileChange}
      />
      {fieldState?.error && (
        <label className="label label-text text-error">{fieldState.error.message}</label>
      )}
    </div>
  )
})

export default FileInputField
