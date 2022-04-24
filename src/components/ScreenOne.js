import React, {Component,} from "react";
import {Document, Page, pdfjs} from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import axios from "axios";

import { SizeMe } from 'react-sizeme'
var a=0
var b = 0
var interval;
export default class ScreenOne extends Component {

    state = {
        pageNumber: 1,
        currentFile: null,
        numPages: 0
    }
    
    componentDidMount() {
        const serverUrl = process.env.REACT_APP_SERVER_URL;
        // load pdf filename
        axios.get(serverUrl + 'api/loadpdf').then(res => {
            this.setState({fileList: res.data})
            b = this.state.fileList.length
            
            this.setState({showTime: this.state.fileList[a].showTime})
            console.log("asd", this.state.showTime)
            this.setState({
                currentFile: this.state.fileList[a].filename
            })
            interval = setInterval(() => {
                if (this.state.pageNumber < this.state.numPages) {
                    this.setState({pageNumber: this.state.pageNumber + 1})
                } else {
                    this.setState({pageNumber: 1})
                    a++
                    this.setState({currentFile: this.state.fileList[a > b - 1 ? a = 0 : a].filename})
                    this.setState({showTime: this.state.fileList[a].showTime})
                    console.log("1", this.state.showTime)
                    console.log("shit")
                    this.doStart()
                }
            }, this.state.showTime)
        })

    }
    doStart() {
        clearInterval(interval)
        interval = setInterval(() => {
            if (this.state.pageNumber < this.state.numPages) {
                this.setState({pageNumber: this.state.pageNumber + 1})
            } else {
                this.setState({pageNumber: 1})
                a++
                this.setState({currentFile: this.state.fileList[a > b - 1 ? a = 0 : a].filename})
                this.setState({showTime: this.state.fileList[a].showTime})
                console.log("1", this.state.showTime)
                console.log("shit")
                this.doStart()
            }
        }, this.state.showTime)
    }


    componentWillUnmount() {
        console.log("sad")
        clearInterval(interval)
    }

    onDocumentLoadSuccess = ({numPages}) => {
        
        this.setState({numPages});
    }
  

    render() {

        const {pageNumber} = this.state;

        return (
            <SizeMe>{({ size }) =>

                <Document
                    file={"Files/" + this.state.currentFile}
                    onLoadSuccess={this.onDocumentLoadSuccess}>
                    <Page
                        renderTextLayer = {false}
                        width={size.width}
                        pageNumber={pageNumber}/>
                </Document>
            }
            </SizeMe>
        )
    }
}
