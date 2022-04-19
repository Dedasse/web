import React, {Component, useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {ReactNotifications, Store} from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'


export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const history = useHistory();


    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        console.log("axios")
        console.log(email)
        console.log(password)
        event.preventDefault();
        axios.post(serverUrl + "login", {
            email: email,
            password: password
        }, {
            withCredentials: true,
        }).then((response) => {
            if (response.status === 200) {
                console.log("correct pass")
                history.push("/console");

            }
            console.log("incoming response..")
            console.log(response);
        }, (error) => {
            console.log("error " + error)
            Store.addNotification({
                message: error.toString(),
                type: "danger",
                insert: "top",
                container: "bottom-center",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });
        });

    }

        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
            <form onSubmit={handleSubmit}>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" value={email} className="form-control" placeholder="Enter email" />
                </div>
                <p></p>
                <div className="form-group">
                    <label>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" value={password} className="form-control" placeholder="Enter password"
                    />
                </div>
                <p></p>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <p></p>
                <button type="submit" className="btn btn-primary btn-block btn-dark" disabled={!validateForm()}>Submit</button>
                <p className="forgot-password text-right">
                    Do you need registration? <a href="/register">sign up?</a>
                </p>
            </form>
                </div>
            </div>
        );

}
