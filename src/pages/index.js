import React from 'react'

import '../assets/styles/global.css'
import './styles.css'

import produto from '../assets/images/produto.svg'
import name from '../assets/images/name.svg'

export default function Home() {
  return (
    <div id="page-home-form">
      <div id="produto-container" className="container">
          <div className="logo-container">
              <img src={name} alt="Proffy"/>
              <h2>Revendedora de produtos</h2>
          </div>

          <img className="produto-logo" src={produto} />
          
          <div className="buttons-container">
              <a className="btn-produto">
                Ver Produtos
              </a>
              <a className="btn-about">
                About
              </a>
          </div>
      </div>
    </div>
  )
}
