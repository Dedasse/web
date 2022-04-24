import React,{useState} from 'react'
import PreViews from './PreViews'
import { useDataContext } from '../../context/DataContext'

const Publish = () => {
  const {files} =useDataContext()
  return (
    <div className="publish">
     
      {files.length ? <PreViews />: "no images"}
    </div>
  )
}

export default Publish;