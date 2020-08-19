import React from 'react'

import logo from '../../assets/images/logo.jpg'

import './styles.css'

function About() {
    return(
        <div id="about-container" className="container">
            <h1>Somos uma empresa de ....</h1>
            <img className="logo-img" src={logo} />
        </div>
    )
}

export default About