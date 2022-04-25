import React,{useState} from 'react'
import PreViews from './PreViews'
import { useDataContext } from '../../context/DataContext'
import './Upload.css';

const Publish = () => {
  const {files} =useDataContext()
  return (
    <div className="publish">
     
      {files.length ? <PreViews />: "preview : no images"}
    </div>
  )
}

export default Publish;