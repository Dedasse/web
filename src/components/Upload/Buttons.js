import React from 'react'
import axios from 'axios';
import Inserver from './Inserver';
import { getMedia, postPosts } from '../../api';
import './Upload.css';

const Buttons = ({files, setFiles,media,setMedia}) => {
 
  const save = () => {
    postPosts(files, setFiles)
    setFiles([])
    /*setMedia([])
    getMedia(media,setMedia)*/
  }
  
 
  

  return (
    <div className='buttonSave'>
      <button onClick={()=>{save()}} >save</button>
    </div>
  )
}

export default Buttons;
