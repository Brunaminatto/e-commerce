import React from 'react'

import Header from '../components/Header'
import About from '../components/About'
import Produtos from '../components/Produtos'
import Contact from '../components/Contact'

import '../assets/styles/global.css'
import './styles.css'

export default function Home() {
  return (
    <div id="page-home-form">
      <Header />
      <About /> 
      <Produtos />
      <Contact />
    </div>
  )
}
