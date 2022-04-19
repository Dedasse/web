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
            src: "/Files/1649612787620-vid1.mp4",
            isFullscreen: true,
        }
    }
    componentDidMount() {
        const serverUrl = process.env.REACT_APP_SERVER_URL;
        // load pdf filename
        axios.get(serverUrl + 'api/loadvideos').then(res => {
            console.log("res " + res.data)
            this.setState({fileList: res.data})
            console.log('/Files/' + this.state.fileList[a].filename)
            this.player.src({
                src: /Files/+this.state.fileList[a].filename
        })
              this.setState({
                  video: {
                      src: /Files/+this.state.fileList[a].filename, //this.state.fileList[a].filename
                      isFullscreen: true,
                    }
              })
            console.log("asd",this.state.video.src)
        })
    }

    onPlayerReady(player) {
        this.player = player;
    }

    onVideoEnd() {
        console.log("Video ended");
        a++
        this.player.src({
                src: /Files/+this.state.fileList[a>this.state.fileList.length-1 ? a=0:a].filename
        })

        this.player.play()
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
                        src={this.state.video.src}
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