import React, {useEffect, useState} from 'react';
import './Upload.css';
import Buttons from './Buttons';
import Publish from './Publish';
import Inserver from './Inserver';
import DaDarea from './DaDarea';
import PlusButton from "./CircleMenu";
import QRCode from './QRCode';
import { Checkbox } from '@material-ui/core';
import { fa2 } from '@fortawesome/free-solid-svg-icons';

const Upload = () => {
  

    return (
        <div className="main-container">
             
             <header>Admin Panel
                <div className='checkbox'>
                    <Checkbox 
                    label="Switch"
                name="theme"
                onChange={() => {
                  if(window.localStorage.getItem('theme') === 'dark'){
                    window.localStorage.setItem('theme', 'light')
                  } else {
                    window.localStorage.setItem('theme', 'dark')
                  }
                  window.location.reload()

                }}
                checked={window.localStorage.getItem('theme') === 'dark'}
                text={'darkmode'}
                >
                    
                </Checkbox>  
                </div>

           
             </header>
            
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
           <div className='QRCodeAdmin' >
               <QRCode />
           </div>
          
        </div>

    )
}

export default Upload
