import React from 'react'

import produto from '../../assets/images/produto.svg'

import './styles.css'

function Produtos () {
    return(
        <div id="produto">
            <div id="produto-container" className="container">
                <img className="produto-img" src={produto} />
                <div className="container-produto-btn">
                    <button className="produto-btn">
                        Ver Produtos
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Produtos