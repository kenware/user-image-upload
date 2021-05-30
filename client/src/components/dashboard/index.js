// import { Link } from 'react-router-dom'
import React, { useEffect, useMemo, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
// import moment from 'moment-timezone'
import { useDispatch, useSelector } from 'react-redux'
import { getImages, saveImage } from '../../store/dashboard/actions'
import { baseStyle, acceptStyle, rejectStyle, activeStyle } from './style'

import './index.scss'

const Dashboard = () => {
  const dispatch = useDispatch()
  const { image, images } = useSelector(state => state.image)

  useEffect(() => {
    dispatch(getImages())
  }, [image])

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const formData = new FormData()
      formData.append('image', file)
      dispatch(saveImage(formData))
    })
  })

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({ onDrop, accept: 'image/*' })

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ])

  return (
   <div className="dashboard">
    <h5 className="center header">Image Upload Dashboard</h5>
    <div className="dashboard-wrapper center">
      <div className="file-drop" {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Drag and drop some files here, or click to select files</p>
      </div>
    </div>
    <div className="card-container">
    <div className="row">
    {images.map((image, i) => (
    <div key={i} className="col s12 m3 l2">
      <div className="card">
        <div className="card-image">
          <a href={image.fileName}><img src={image.fileName}/></a>
          <span className="card-title">My Image</span>
        </div>
      </div>
    </div>
    ))}
  </div>
  </div>
  </div>
  )
}

export default Dashboard
