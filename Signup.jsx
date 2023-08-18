import { useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import "./components/css/Intro.css"
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function Signup() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/signup', { name, email, password })
            .then(result => {
                console.log(result)
                navigate('/login')
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='hello'>
            <center>
                <div className="line-break"></div> {/* Add this line */}
                <h1><strong>not available</strong></h1>
                <h3>the app that rewards you for going <strong>offline</strong></h3>
            </center>
            <div className="line-break"></div> {/* Add this line */}
            <div className="SignUp-alignment">
                <div className="SignUp-Box">
                    <center><h2>Sign Up</h2></center>
                    <form onSubmit={handleSubmit}>
                        <div className="SignUpForm">
                            <label htmlFor="email">
                                <strong>Name</strong>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                autoComplete='off'
                                name="email"
                                className='form-control'
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
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
                        <center><button type="submit" className="success-button">
                            Sign Up
                        </button></center>
                        <div className="line-break"></div> {/* Add this line */}
                        <Link to="/login" className="button-border">
                            Already Have an Account?
                        </Link>
                    </form>
                </div>
            </div>
        </div >
    );

}



export default Signup;