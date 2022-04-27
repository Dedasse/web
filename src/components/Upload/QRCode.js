import React, { useState } from "react";
import QRCode from 'qrcode.react';
import { jsPDF } from 'jspdf';
import './Upload.css';

const Code = () => {

const [inputText, setInputText] = useState('')
const [qrCodeText, setQRCodeText] = useState('')

//generate QRCode
const generateQRCode = () => {
    setQRCodeText(inputText);
}

// download QRCode
const downloadQRCode = () => {
    const qrCodeURL = document.getElementById('qrCodeEl')
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
        
    // var imgData = `data:image/png;base64,/${qrCodeURL}` // string template
    //var imgData = 'data:image/jpeg;base64,/' + qrCodeURL; // string concatenation
        var imgData = qrCodeURL
            // Defines the pdf
            let pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'mm',
                format: [40, 40]
            })
            
            // Adds the image to the pdf
            pdf.addImage(imgData, 'png', 0, 0, 40, 40)
    
            // Downloads the pdf
            pdf.save('QR.pdf')
        
        
}

return(
    <div className="QRCode">
               <h3 className="py-4">Generate and download QR-code</h3>
               <div className="qr-input">
               <input style={{margin:"20px", width: "80%"}}
                type="text"
                placeholder="Enter link or text here" 
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                />
                <input 
                type="button"
                value="Generate"
                onClick={generateQRCode}
                />
                </div>
               <QRCode 
                id="qrCodeEl"
                size={290}
                level={"H"}
                includeMargin={true}
                value={qrCodeText}
               />
                <br />
               <input
                type="button"
                className="download-btn"
                value="Download"
                onClick={downloadQRCode}
             />

            
    </div>

);
}


export default Code