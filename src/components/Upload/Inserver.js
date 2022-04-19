import React,{useEffect,useState} from 'react';

import axios from 'axios';
import PreView from './PreView';


const baseUrl = "http://localhost:3003/api/loadpdf"
const baseUrl2 = "http://localhost:3003/api/loadvideos"

const Inserver = ({media,setMedia}) => {
  
 
  return (
    <div>

       
        {media.map(file => <PreView key={file.id} file={file} pdfs={media} setPdfs={setMedia} />)  }

       
        
    </div>
     
    
  )
}

export default Inserver;