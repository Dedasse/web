import React from 'react';
import { useDataContext } from '../../context/DataContext';
import PreView from './PreView';




const Inserver = () => {
  const {media} = useDataContext()
 
  return (
    <div>

       
        {media.map(file => <PreView key={file.id} file={file} />)  }

       
        
    </div>
     
    
  )
}

export default Inserver;