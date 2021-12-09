import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router';
import './Login.css'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setdata] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    let history = useHistory();
    function Login() {
        // history.push('/');

        if (email.includes('@') & password.length > 8) {
            const allEntry = { email: email, password: password };
            setdata(allEntry);
            console.log(allEntry);
            setEmailError('');
            setPasswordError('');
            setLoggedIn(true);
            history.push('/');
        } else {
            setEmailError('Invalid EmailId');
            setPasswordError('Invalid password');
        }

    }

    return (
        <div style={{width:'300px'}}>

            <div className="container">
                <div className="sign-in-card">
                    
                        <h2 className="signin-heading">Login</h2>
                        <div className="mb-2">
                            <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Username" />
                        </div>
                        <p style={{ color: 'red', fontSize: '10pt' }}>{emailError}</p>
                        <div className="mb-2">
                            <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
                        </div>
                        <p style={{ color: 'red', fontSize: '10pt' }}>{passwordError}</p>
                        <div className="mb-2">
                            <button className="btn btn-success" type="button" onClick={Login}>Login</button>
                        </div>
                        <label>
                            <input type="checkbox" checked="checked" name="remember" />
                            Remember me
                        </label>
                        <div className="separtor">or</div>
                        <div className="social-media-icons">
                            <a href=""><i class="fab fa-facebook-f"></i></a>
                            <a href=""><i class="fab fa-google"></i></a>
                            <a href=""><i class="fab fa-twitter"></i></a>
                            <a href=""><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <div class="signup-text">
                            <p>Not a member? <a href="#">Sign up now</a></p>
                        </div>
                    </div>
                </div>
            </div>
    

    )
}
