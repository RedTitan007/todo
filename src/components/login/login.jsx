import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './login.css';
import { loginindata } from '../../redux/user/user-actions'

const Login = (props) => {
    const [userData, setuserData] = useState({ username: "", password: "" });
    const [errorData, seterrorData] = useState({ username: "", password: "" });
    const { username, password } = userData;
    const dispatch = useDispatch();

    useEffect(()=>{
        if (username !== ""){
            errorData.username = userData.username !== "" ? "" : "Please enter username"
            seterrorData({...errorData});
        }
        if (password!== ""){
            errorData.password = userData.password !== "" ? "" : "Password required"
            seterrorData({...errorData});
        }
    },[userData])

    const setLogindata = (e) => {
        userData[e.target.id] = e.target.value
        setuserData({ ...userData });
    }

    const showtodo = () => {
        if (username !== "" && password !== "") {
            dispatch(loginindata(userData));
            props.history.push("/todo");
        }
        else {
            errorData.username = userData.username !== "" ? "" : "Please enter username"
            errorData.password = userData.password !== "" ? "" : "Password required"
            seterrorData({...errorData});
        }
    }
    return (
        <div className="login-container">
            <h2>Welcome to AsvaLabs Todo App</h2>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="Username"><b>Username</b></label>&nbsp;
                    <input id="username" type="text" value={username} name="Username" placeholder="Username"
                        onChange={setLogindata}
                    />
                    {
                        <div className="error-msg">
                            {errorData.username}
                        </div>
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="Password"><b>Password</b></label>&nbsp;
                    <input id="password" type="password" value={password} name="Password" placeholder="Password"
                        onChange={setLogindata}
                    />
                    <div className="error-msg">
                        {errorData.password}
                    </div>
                </div>
                <button type="submit" onClick={showtodo}>Login</button>
            </div>
        </div>
    )
}

export default Login
