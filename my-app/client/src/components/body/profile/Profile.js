import React, {useState} from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {isLength, isMatch} from '../../utils/validation/Validation'
import {showSuccessMsg, showErrMsg} from '../../utils/notification/Notification'
import * as FaIcons from "react-icons/fa";
import './profile.css';

const initialState = {
    name: '',
    password: '',
    cf_password: '',
    err: '',
    success: ''
}

function Profile() {
    const auth = useSelector(state => state.auth)
    const token = useSelector(state => state.token)

    const {user} = auth
    const [data, setData] = useState(initialState)
    const {name, password, cf_password, err, success} = data

    const [avatar, setAvatar] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = e => {
        const {name, value} = e.target
        setData({...data, [name]:value, err:'', success: ''})
    }

    const changeAvatar = async(e) => {
        e.preventDefault()
        try {
            const file = e.target.files[0]

            if(!file) return setData({...data, err: "No files were uploaded." , success: ''})

            if(file.size > 1024 * 1024)
                return setData({...data, err: "Size is too large." , success: ''})

            if(file.type !== 'image/jpeg' && file.type !== 'image/png')
                return setData({...data, err: "Upload jpeg or png file." , success: ''})

            let formData =  new FormData()
            formData.append('file', file)

            setLoading(true)
            const res = await axios.post('/api/upload_avatar', formData, {
                headers: {'content-type': 'multipart/form-data', Authorization: token}
            })

            setLoading(false)
            setAvatar(res.data.url)
            
        } catch (err) {
            setData({...data, err: err.response.data.msg , success: ''})
        }
    }

    const updateInfor = () => {
        try {
            axios.patch('/user/update', {
                name: name ? name : user.name,
                avatar: avatar ? avatar : user.avatar
            },{
                headers: {Authorization: token}
            })

            setData({...data, err: '' , success: "Details Updated!"})
        } catch (err) {
            setData({...data, err: err.response.data.msg , success: ''})
        }
    }

    const updatePassword = () => {
        if(isLength(password))
            return setData({...data, err: "Password must be at least 8 characters.", success: ''})

        if(!isMatch(password, cf_password))
            return setData({...data, err: "Password did not match.", success: ''})

        try {
            axios.post('/user/reset', {password},{
                headers: {Authorization: token}
            })

            setData({...data, err: '' , success: "Password Updated!"})
        } catch (err) {
            setData({...data, err: err.response.data.msg , success: ''})
        }
    }

    const handleUpdate = () => {
        if(name || avatar) updateInfor()
        if(password) updatePassword()
    }

    return (
        <div>
            <div>
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}
                {loading && <h3>Loading.....</h3>}
            </div>
            <div className="profile_page">
                <div className = "info">
                    <h2>My Profile</h2>

                    <div className="avatar">
                        <img src={avatar ? avatar : user.avatar} alt=""/>
                        <span>
                            <FaIcons.FaCamera/>
                            <p>Change</p>
                            <input type="file" name="file" id="file_up" onChange={changeAvatar} />
                        </span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" defaultValue={user.name}
                        placeholder="Your name" onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" defaultValue={user.email}
                        placeholder="Your email address" disabled />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">New Password</label>
                        <input type="password" name="password" id="password"
                        placeholder="Your password" value={password} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="cf_password">Confirm New Password</label>
                        <input type="password" name="cf_password" id="cf_password"
                        placeholder="Confirm password" value={cf_password} onChange={handleChange} />
                    </div>

                    <div>
                        <em className="em-msg"> 
                        *If you update your password here, <br/>you will not be able 
                        to login quickly using google.
                        </em>
                    </div>

                    <div>
                        <button disabled={loading} onClick={handleUpdate}>Update</button>
                    </div>

                    <div className="wish_ad">
                        <Link to="/" className="linkbtn">My Listings</Link>
                        <Link to="/" className="linkbtn">My Wishlist</Link>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Profile