import React, {useState} from 'react';
import {pdfjs} from "react-pdf";
import {deleteFile,updateFile} from '../../api';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import { useDataContext } from '../../context/DataContext';


const PreView = ({file}) => {
  const {media,setMedia} = useDataContext();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [time, setTime] = useState(file.showTime)
  const [date,setDate]= useState(file.expireTime)
  const withCredentials = true;
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const deletee = (data) => {
    deleteFile(withCredentials, data).then((res) => res === 200 ?setMedia(media.filter(id => id.id != file.id)):null)
    getUpdate()
   
  }
 
  const image =  (
    
    <>
      
      {file.type === "document/pdf" || file.type === "application/pdf" ?
        <div style={{width: "100%", height: "100px"}}>
          <p>showTime: <input type="number" value={time / 1000} onChange={(e) => setTime(e.target.value * 1000)} />.s  name: {file.name} type: {file.type}  uploadedBy: {file.uploadedBy} filename:{file.filename}  expireDate: <input type="datetime" value={date} onChange={(e) => setDate(e.target.value)} /></p>
          <button onClick={() => {
            const data = {file}
            data.file.showTime = time
            data.file.expireTime = date
            updateFile(data)
            }}>Update</button>
          <button onClick={() => {
            const data = {mediaId: file.id, name: file.filename}
            deletee(data)
            }}>Delete</button>
        </div> : file.type === "video/mp4" ?
          <div>
            <p>
              name: {file.name} type: {file.type}  uploadedBy: {file.uploadedBy} filename:{file.filename}  expireDate: <input type="datetime" value={date} onChange={(e) => setTime(e.target.value)} /> </p>
              <button onClick={() => {
            const data = {file}
            data.file.showTime = time
            data.file.expireTime = date
            updateFile(data)
            }}>Update</button>
            <button onClick={() => {
              const data = {mediaId: file.id, name: file.filename}
              deletee(data)
            }}>Delete</button>
          </div> : console.log("wrong media")
}
      
            </>
  )
 
  return (
    
    <div style={{display: "flex" , flexDirection: "column"}}>{image}</div>
  )
}

export default PreView;