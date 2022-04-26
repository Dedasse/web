import React, {useEffect, useState} from 'react';
import './Upload.css';
import Buttons from './Buttons';
import Publish from './Publish';
import Inserver from './Inserver';
import DaDarea from './DaDarea';
import PlusButton from "./CircleMenu";
import QRCode from 'react-qr-code';


const Upload = () => {
    const [inputValue, setInputValue] = React.useState('')

    return (
        <div className="main-container">
             <header>Admin Panel</header>
             <div className="float-left">
             <PlusButton/>
             <div className="dand">
                    <DaDarea/>
                </div>
                
                <div className="savePublish">
                    <Publish style={{width: "200px", height: "200px", border: "2px solid red"}}
                            
                    />
                  <div className="buttons">
                    <Buttons  />
                </div>  
                </div>
                
            </div>
            <div className="lower-portion">
                <div className="inserver">
                    <Inserver />
                </div>
                
            </div>
           <div className="container mx-auto w-2/4" style={{display: "flex", justifyContent:"center", flexDirection:"column", }}>
               <h1 className="py-4">QR-code</h1>
               <input style={{marginBottom:"20px"}}
               onChange={e => setInputValue(e.target.value)}
               type="text" 
               placeholder="Enter link or text for QR-Code generation"
               className="border border-gray-388 w-full h-8 p-4 font-light text-sm focus: outline-none"/>

               <QRCode
                className="mx-auto mt-20"
                value={inputValue}
               />
           </div>
        </div>

    )
}

export default Upload
