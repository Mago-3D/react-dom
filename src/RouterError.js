import React from "react"
import {Link} from 'react-router-dom'

export default function RouterError() {
    return (
        <div>
            <h1>Error 404</h1>
            <p>Page not found</p>
            <p>Go to<Link to='/react-router-dom-exercise'>Home</Link> </p>
        </div>
    )
}