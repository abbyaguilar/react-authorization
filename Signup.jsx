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
        <div className="SignUp-alignment">
            <div className="SignUp-Box">
                <h2>Sign Up</h2>
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
                    <button type="submit" className="success-button">
                        Sign Up
                    </button>
                    <div className="line-break"></div> {/* Add this line */}
                    <p>Already Have an Account</p>
                    <Link to="/login" className="button-border">
                        <button>Login</button>
                    </Link>
                </form>
            </div>
        </div>
    );

}



export default Signup;