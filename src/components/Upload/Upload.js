import React, {useEffect, useState} from 'react';
import './Upload.css';
import Buttons from './Buttons';
import Publish from './Publish';
import Inserver from './Inserver';
import DaDarea from './DaDarea';
import PlusButton from "./CircleMenu";


const Upload = () => {
    

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
           
        </div>

    )
}

export default Upload
