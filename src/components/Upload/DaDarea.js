import React, { useState, useEffect,useCallback} from 'react'
import {useDropzone} from 'react-dropzone';


const DaDarea = ({files,setFiles}) => {
 
  const onDrop = useCallback((acceptedFiles, rejectedfile) => {
    
    acceptedFiles.forEach(file => {
      
      const reader = Object.assign(file, {preview: URL.createObjectURL(file)});
      setFiles(prevState => [...prevState, file]) 
    })
    
  },[] )
  const {getRootProps, getInputProps, isDragActive} = useDropzone({accept: ['application/pdf','video/mp4'],onDrop})
  
  return (
    <div>
      <div
        className="dnd-container"  {...getRootProps()}>
          <input {...getInputProps()} />
        {isDragActive ? <p>Drag Active</p> : <p>Drag & Drop to Upload File</p>}
      </div>
    </div>
  )
}

export default DaDarea;