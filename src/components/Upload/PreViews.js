import React, {useState} from 'react'
import { Document, Page, pdfjs   } from "react-pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import { useDataContext } from '../../context/DataContext';


const PreViews = () => {
  const {files, setFiles} = useDataContext();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
 
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function dropFromArrray(name) {
    const aas = files.filter(file => file.name !== name)
    setFiles(aas)
  }
 
console.log("HEll",files)
 
  const images = files.map((file) => (
    <div key={file.name} style={{border: "2px solid black", position: "relative"  }} >
      
      {file.type === "application/pdf" ?
        <>
          <div style={{margin: "2px", width: 160,height: 200}}>  
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
              <div >
                <Page height={220} pageNumber={pageNumber} />
        
              </div>
            </Document>
            <button style={{position: "absolute", top: "12px", right: "12px"}} onClick={()=>{dropFromArrray(file.name)}}>2</button>
          </div>   
        )
      
        </> : file.type === "video/mp4" ?
          <div  >
         <video width="200" height="200" controls >
              <source src={file.preview} type="video/mp4" />
              
            </video>
            <button style={{position: "absolute", top: "12px", right: "12px"}} onClick={()=>{dropFromArrray(file.name)}}>2</button>
            </div>
            : 
          <><img src={file.preview} style={{width: "200px", height: "200px", margin: "2px"}}
            alt="preview" />
            {console.log("asda",file)}
            <button style={{position: "absolute", top: "12px", right: "12px"}} onClick={()=>{dropFromArrray(file.name)}}>2</button></>
          
      }
    
    </div>
    
  ))
 
  return (
      <div style={{display:"flex" ,flexDirection: "row", margin:"5px" }}>{images}</div>

  )
}

export default PreViews;