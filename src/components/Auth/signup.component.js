import React, { Component, useState  } from "react";
import axios from "axios";

export default function  SignUp (){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const serverUrl = process.env.REACT_APP_SERVER_URL;


    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.post(serverUrl + "register", {
            name: name,
            email: email,
            password: password
        }, {
            withCredentials: true,
        }).then((response) => {
            if (response.status === 200) {
                console.log("correct pass")
            }
            console.log("incoming response..")
            console.log(response);
        }, (error) => {
            console.log("error " + error)
        });

    }

    return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                <form onSubmit={handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Name</label>

                    <input onChange={(e) => setName(e.target.value)} type="name" value={name} className="form-control" placeholder="Name" />
                </div>
                    <p></p>
                <div className="form-group">
                    <label>Email address</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" value={email} className="form-control" placeholder="Enter email" />
                </div>
                    <p></p>
                <div className="form-group">
                    <label>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" value={password} className="form-control" placeholder="Enter password" />
                </div>
                    <p></p>
                <button type="submit" className="btn btn-primary btn-block" disabled={!validateForm()}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/login">sign in!</a>
                </p>
            </form>
            </div>
        </div>

        );

}