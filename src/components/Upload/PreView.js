import React, {useState} from 'react';
import {pdfjs} from "react-pdf";
import {deleteFile, updateFile} from '../../api';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import './Upload.css';
import button from "bootstrap/js/src/button";
import Row from 'react-bootstrap/Row'

const PreView = ({file, pdfs, setPdfs}) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [time, setTime] = useState(file.showTime)
    const [date, setDate] = useState(file.expireTime)
    const withCredentials = true;

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }

    const deletee = (data) => {
        deleteFile(withCredentials, data).then((res) => res === 200 ? setPdfs(pdfs.filter(id => id.id != file.id)) : null)


    }

    const image = (

        <>
            {file.type === "document/pdf" || file.type === "application/pdf" ?

                <div className="col-sm-12" style={{flexGrow: 1, justifyItems: "baseline", justifyContent: "row",}}>

                    <div className="card shadow-sm"
                         style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                        <div className="card-header">File name: {file.name}</div>
                        <div className="card-body">
                            <p>type: {file.type} uploadedBy: {file.uploadedBy} </p>filename: {file.filename}
                            <p> showTime: <input type="number" value={time / 1000}
                                                 onChange={(e) => setTime(e.target.value * 1000)}/>
                                <p></p>.sexpireDate: <input type="datetime" value={date}
                                                            onChange={(e) => setDate(e.target.value)}/></p>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <button className="btn btn-outline-primary" style={{width: "18rem", margin: "5px",}}
                                    onClick={() => {
                                        const data = {file}
                                        data.file.showTime = time
                                        data.file.expireTime = date
                                        updateFile(data)
                                    }}>Update
                            </button>

                            <button className="btn btn-outline-dark" style={{width: "18rem", margin: "5px"}}
                                    onClick={() => {
                                        const data = {mediaId: file.id, name: file.filename}
                                        deletee(data)
                                    }}>Delete
                            </button>
                        </div>
                    </div>
                </div> : file.type === "video/mp4" ?
                    <div className="card" style={{width: "400px"}}>
                        <div className="card-header">
                            File name: {file.name} </div>
                        <p>type: {file.type}
                            <p> uploadedBy: {file.uploadedBy} </p>filename:{file.filename} <p></p> expireDate: <input
                                type="datetime" value={date} onChange={(e) => setTime(e.target.value)}/></p>
                        <div className="d-flex align-items-center">
                            <button className="btn btn-outline-primary" style={{width: "18rem", margin: "5px",}}
                                    onClick={() => {
                                        const data = {file}
                                        data.file.showTime = time
                                        data.file.expireTime = date
                                        updateFile(data)
                                    }}>Update
                            </button>
                            <button className="btn btn-outline-dark" style={{width: "18rem", margin: "5px",}}
                                    onClick={() => {
                                        const data = {mediaId: file.id, name: file.filename}
                                        deletee(data)
                                    }}>Delete
                            </button>
                        </div>
                    </div> : console.log("wrong media")
            }
        </>
    )

    return (

        <div>{image}</div>
    )
}

export default PreView;