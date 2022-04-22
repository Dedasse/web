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



function App() {
    let history = useHistory();

    window.handsfree.enablePlugins('browser')

    function startHandsfree() {
        window.handsfree.start()
        handsfree.plugin.palmPointers.enable()
        handsfree.plugin.pinchScroll.disable()

        handsfree.on('finger-pinched-1-0', async () => {
            if (handsfree.data.hands.pinchState[1][0] === "released") {
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

    return (
        <DataContextProvider>
        <Router>
           

                <div className="App">
                    <ReactNotifications />
                    <div className="mouseButton">
                    <button onClick={startHandsfree}>Dönt click</button>
                    </div>
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