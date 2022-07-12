import React, {useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'
import {dispatchLogin} from '../../../redux/actions/authAction'
import {useDispatch} from 'react-redux'
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

import './auth.css';

const initialState = {
    email: '',
    password: '',
    err: '',
    success: ''
}


function Login() {

    useEffect(() => {
        function start() {
        gapi.client.init({
        clientId:"681065330696-lcbrpd6survo7em2v2d6n3t5teljceev.apps.googleusercontent.com",
        scope: 'email',
          });
           }
          gapi.load('client:auth2', start);
        }, 
    [])
    
    const [user, setUser] = useState(initialState)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    

    const {email, password, err, success} = user

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }


    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post('/user/login', {email, password})
            setUser({...user, err: '', success: res.data.msg})

            localStorage.setItem('firstLogin', true)

            dispatch(dispatchLogin())
            navigate("/")
        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }

    const responseGoogle = async (response) => {
        try {
            const res = await axios.post('/user/google_login', {tokenId: response.tokenId})

            setUser({...user, error:'', success: res.data.msg})
            localStorage.setItem('firstLogin', true)

            dispatch(dispatchLogin())
            navigate("/")
        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }

    return (
        <div >
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
            <div className="login_page">
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="text" placeholder="Enter email address" id="email"
                    value={email} name="email"  onChange={handleChangeInput}/>
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter password" id="password"
                    value={password} name="password" onChange={handleChangeInput}/>
                </div>
            
                <button type="submit">Login</button>
                <Link to="/forgot_password" className="fp">Forgot your password?</Link>
            </form>

            <div style={{color: "rgb(242, 242, 242)"}}>OR</div>

            <div className="google_login">
           
                <GoogleLogin
                clientId="681065330696-lcbrpd6survo7em2v2d6n3t5teljceev.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                />
            </div> 

            <p>New to our Site? <Link to="/register">Register</Link></p> 
            </div>
        </div>
    )
}

export default Login