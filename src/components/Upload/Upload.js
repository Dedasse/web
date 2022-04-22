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
            <div className="upper-portion">
                <div className="buttons">
                    <Buttons  />
                </div>
                <div className="savePublish">
                    <Publish style={{width: "200px", height: "200px", border: "2px solid red"}}
                            
                    />
                </div>
            </div>
            <div className="lower-portion">
                <div className="inserver">
                    <Inserver />
                </div>
                <div className="dand">
                    <DaDarea/>
                </div>
            </div>
            <PlusButton/>
        </div>

    )
}

export default Upload
