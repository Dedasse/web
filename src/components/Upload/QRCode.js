import React, { useState } from "react";
import QRCode from 'qrcode.react';
import { jsPDF } from 'jspdf';
import './Upload.css';

const Code = () => {

const [inputText, setInputText] = useState('')
const [qrCodeText, setQRCodeText] = useState('')
const [inputTitle, setInputTitle] = useState('')

//generate QRCode
const generateQRCode = () => {
    setQRCodeText(inputText);
}

//QRCodeTitle
const setQRTitle = () => {
    setInputTitle(inputTitle);
    console.log(inputTitle)
}

// download QRCode
const downloadQRCode = () => {
    const qrCodeURL = document.getElementById('qrCodeEl')
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
    
        var imgData = qrCodeURL
            // Defines the pdf
            let pdf = new jsPDF({
                orientation: '',
                unit: 'mm',
                //format: [50, 50]
            })
            
            // Adds the image to the pdf
            pdf.addImage(imgData, 'png', 30, 75, 150, 150)
            pdf.setFontSize(24)
            setQRTitle()
            pdf.text(25, 35, inputTitle) 
                          
            // Downloads the pdf
            pdf.save('QR.pdf')
        
        
}

return(
    <div className="QRCode">
               <h3 className="py-4">Generate and download QR-code</h3>
               <div className="qrTitle">
               <input style={{margin:"20px", width: "80%"}}
                type="text"
                placeholder="Enter your QR-Code title" 
                value={inputTitle}
                onChange={e => setInputTitle(e.target.value)}
                />
               <div className="qr-input">
               <input style={{margin:"20px", width: "80%"}}
                type="text"
                placeholder="Enter link or text here" 
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                />
                <input 
                type="button"
                className="btn btn-outline-primary" style={{width: "18rem", margin:"5px", }}
                value="Generate"
                onClick={generateQRCode}
                />
                </div></div>
               <QRCode 
                id="qrCodeEl"
                size={250}
                level={"H"}
                includeMargin={true}
                value={qrCodeText}
               />
                <br />
               <input
                type="button"
                className="btn btn-outline-primary" style={{width: "18rem", margin:"5px", }}
                value="Download"
                onClick={downloadQRCode}
             />
           
    </div>

);
}


export default Code