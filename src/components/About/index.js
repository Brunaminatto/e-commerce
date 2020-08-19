import React from 'react'

import logo from '../../assets/images/logo.jpg'

import './styles.css'

function About() {
    return(
        <div id="about">
            <div id="about-container" className="container">
                <h1>Somos uma empresa de ....</h1>
                <div className="logo-container"><img className="logo-img" src={logo} /></div>
            </div>
        </div>
    )
}

export default About