import React from 'react'
import './notFound.css'

function NotFound(props) {
    return (
        <div className="nfMsg">
            {props.msg}
        </div>
    )
}

export default NotFound