import React,{useState} from 'react'
import PreViews from './PreViews'


const Publish = ({files,setFiles}) => {
  
  
 
  return (
    <div className="publish">
     
      {files.length ? <PreViews files={files} setFiles={setFiles}/>: "no images"}
    </div>
  )
}

export default Publish;