import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import {CookiesProvider} from "react-cookie";
import Handsfree from "./handsfree";
import "handsfree/build/lib/assets/handsfree.css";
import Layout from './components/Layout';

window.handsfree = new Handsfree({
    showDebug: true,
    hands: {
        enabled: true,
        maxNumHands: 1,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5
    },
    assetsPath: "/assets"
});


ReactDOM.render(
    
    <CookiesProvider>
        <BrowserRouter>
        <Layout>
            <App />
          </Layout>,  
        </BrowserRouter>,
    </CookiesProvider>,
    
    document.getElementById("root")
);

serviceWorker.unregister();