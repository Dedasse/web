import React, { useCallback} from 'react'
import {useDropzone} from 'react-dropzone';
import { useDataContext } from '../../context/DataContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const DaDarea = () => {
  const {setFiles} = useDataContext()
  const onDrop = useCallback((acceptedFiles, rejectedfile) => {
    
    acceptedFiles.forEach(file => {
      
      const reader = Object.assign(file, {preview: URL.createObjectURL(file)});
      setFiles(prevState => [...prevState, file]) 
    })
    
  },[] )
  const {getRootProps, getInputProps, isDragActive} = useDropzone({accept: ['application/pdf','video/mp4'],onDrop})
  const newLocal = <div className='faArrowDown'><FontAwesomeIcon icon={faArrowDown} /></div>;
  return (
    <div>
      <div
        className="dnd-container"  {...getRootProps()}>
          {newLocal}
          <input {...getInputProps()} />

        {isDragActive ? <p>Drag Active</p> : <p>Drag & Drop to Upload File</p>}
      </div>
    </div>
  )
}

export default DaDarea;