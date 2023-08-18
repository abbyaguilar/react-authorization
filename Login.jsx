import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./components/css/Intro.css"
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function Login() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', { name, email, password })
            .then(result => {
                console.log(result)
                if (result.data == "Success") {
                    navigate('/home')
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="SignUp-alignment">
            <div className="SignUp-Box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="SignUpForm">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="SignUpForm">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="line-break"></div> {/* Add this line */}
                    <button type="submit" className="success-button">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );

}



export default Login;