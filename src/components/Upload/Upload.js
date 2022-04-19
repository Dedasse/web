import React, {useEffect, useState} from 'react';
import './Upload.css';
import Buttons from './Buttons';
import Publish from './Publish';
import Inserver from './Inserver';
import DaDarea from './DaDarea';
import { getMedia } from '../../api';
import PlusButton from "./CircleMenu";

const Upload = () => {
    const [files, setFiles] = useState([]);
    const [media, setMedia] = useState([])
    
    useEffect(() => {
        getMedia(media, setMedia)
    }, [])
    

    return (
        <div className="main-container">
            <div className="upper-portion">
                <div className="buttons">
                    <Buttons files={files} setFiles={setFiles}
                        media={media}
                        setMedia={setMedia} />
                </div>
                <div className="savePublish">
                    <Publish style={{width: "200px", height: "200px", border: "2px solid red"}}
                             files={files}
                             setFiles={setFiles}
                    />
                </div>
            </div>
            <div className="lower-portion">
                <div className="inserver">
                    <Inserver media={media} setMedia={setMedia}  />
                </div>
                <div className="dand">
                    <DaDarea
                        files={files}
                        setFiles={setFiles}
                    />
                </div>
            </div>
            <PlusButton/>
        </div>

    )
}

export default Upload
