import React from "react";
import { TextField, Typography } from "@mui/material";
import './login.css'
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import UserCommentModal from '../components/UserCommentModal'

const Login = () => {

    return (
        <div className="container">
            <div className="left_side">
                <div className="row">
                    <div className="col-md-6">
                        <div className="col-md-12">
                        </div>
                    </div>
                </div>
            </div>
            <div className="right_side">
                <div className="row">
                    <div className="col-md-6">
                        <div className="col-md-12">
                            <Typography variant="h5">
                                Please Login...
                            </Typography>
                        </div>
                        <div className="col-md-12">
                            <TextField variant="standard" label="Email" type="email" required />
                        </div>
                        <div className="col-md-12" id="textField">
                            <TextField variant="standard" label="Password" required type="password" />
                        </div>
                        <div className="col-md-12" id="loginBtn">
                            <Button variant="contained">Log In</Button>
                        </div>
                        <div className="col-md-12" id="loginBtn">
                            <a href="#" >Create Account</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Login;
