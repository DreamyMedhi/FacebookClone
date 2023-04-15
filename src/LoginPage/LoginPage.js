import React from "react";
import "./LoginPage.css";
// import {Link } from "react-router-dom";
import Header from "../Header/Header";
import {Link, Route, Routes, Switch} from 'react-router-dom';




function LoginPage(){
    return(
        <div className="Login">
        <div className="facebook">
            <div className="facebookText">
                facebook
            </div>
            <div className="title">
                Facebook helps you connect and share<br></br> with the people in your life
            </div>
            </div>
            <div className="loginContainer">
                <div className="logindetail">
                    <input type="email" placeholder="Email address or phone number"></input>
                    <br></br>
                    <input type="password" placeholder="Password"></input>
                    <br></br>
                    <div>
                        <button className="btn">
                    <Link to="/Header">Login</Link>
                    </button>

                    {/* <Switch>
                    <Route path="/Header" element={<Header />} />
                   </Switch> */}
    
                    </div>
                    
                    

                    <div className="forgot">
                    <a href="forgot">Forgot Password</a>
                    <br></br>
                </div>
                </div>
                
                <div className="create">
                    <br></br>
                    <button className="btns">
                        Create New Account
                    </button>
            </div>
            
                <p></p>

                <div className="page">
                <a href="createpage">Create a Page </a> for a celebrity, band or business.
                </div>
                </div>
            
    </div>
        

    )
}

export default LoginPage