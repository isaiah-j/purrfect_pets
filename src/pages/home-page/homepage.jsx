import React from 'react'
import { Link } from 'react-router-dom'
import './homepage.styles.scss'

const HomePage = () => {
    return (
        <div>
            <h1>Some static page</h1>
            <Link to='/pets/info'>I don't care about your design, take me to the form!</Link>
        </div>
    )
}

export default HomePage