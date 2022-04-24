import React,{useState,useContext,createContext,useEffect} from 'react'
import {getMedia} from '../api/index';

const DataContext = createContext()
export const useDataContext = () => useContext(DataContext)
const DataContextProvider = ({children}) => {
  const [files, setFiles] = useState([]);
  const [media, setMedia] = useState([]);
  useEffect(() => {
    console.log("well well")
    getMedia(media, setMedia)
}, [])
  
  
  const value = {
    files,setFiles,media,setMedia
  }
  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider;