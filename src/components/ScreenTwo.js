import React, {Component} from "react";
import axios from "axios";
import VideoPlayer from 'react-video-js-player';
import './Video.css';
import {SizeMe} from "react-sizeme";
var a = 0
class ScreenTwo extends Component {
    player = {}
    state = {
        video: {
            src: null,
            isFullscreen: true,
        }
    }
   
    async loadPDF() {
        const serverUrl = process.env.REACT_APP_SERVER_URL;
        // load video filename
        const res= await axios.get(serverUrl + 'api/loadvideos')
        // set filelist of all videos
        await this.setState({fileList: res.data})
        // set first video in filelist to play
        await this.player.src({
            src: /Files/+this.state.fileList[a].filename
        })
    }

    onPlayerReady(player) {
        this.loadPDF()
        this.player = player;
    }

    onVideoEnd() {
        console.log("Video ended");
        // next video if there is one
        a++
        this.player.src({
                src: /Files/+this.state.fileList[a>this.state.fileList.length-1 ? a=0:a].filename
        })

        this.player.play()
    }
    componentWillUnmount() {
        if(this.player){this.player.dispose}
    }

    render() {
        return (
            <SizeMe>{({size}) =>
                <div style={{ position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)'}}>
                    <VideoPlayer
                        width={size.width}
                        controls={false}
                        autoplay={true}
                       // src={this.state.video.src}
                        poster={this.state.video.poster}
                        onEnd={this.onVideoEnd.bind(this)}
                        onReady={this.onPlayerReady.bind(this)}
                    />
                </div>
            }
            </SizeMe>
        );
    }
}

export default ScreenTwo;