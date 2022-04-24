import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DataContextProvider from './context/DataContext'
import {BrowserRouter as Router, Switch, Route, useHistory} from "react-router-dom";
import Login from "./components/Auth/login.component";
import SignUp from "./components/Auth/signup.component";
import Console from "./components/Upload/Upload"
import Tabs from "./components/Tabs";
import PrivateRoute from "./components/Auth/PrivateRoute";
import {ReactNotifications, Store} from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import {useEffect} from "react";



function App() {
    let history = useHistory();


    window.handsfree.enablePlugins('browser')

    function startHandsfree() {
        window.handsfree.start()
        handsfree.plugin.palmPointers.enable()
        handsfree.hideDebugger()



        handsfree.on('finger-pinched-1-3', async () => {
            if (handsfree.data.hands.pinchState[1][3] === "released") {
                console.log("state released")
                const hands = await handsfree.data.hands.pointer
                console.log(handsfree.data.hands.pointer)
                document.elementFromPoint(
                    handsfree.data.hands.pointer[1].x,
                    handsfree.data.hands.pointer[1].y
                ).click()
            }
        })
    }

    useEffect(() => {
        startHandsfree()
    });

    return (
        <DataContextProvider>
        <Router>
                <div className="App">
                    <ReactNotifications />
                    <Switch>
                        <Route exact path='/' component={Tabs}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={SignUp}/>
                        <PrivateRoute path="/console" component={Console}/>
                    </Switch>
                </div>

            </Router>
            </DataContextProvider>
    );
}

export default App;