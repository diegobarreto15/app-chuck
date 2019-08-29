import React from 'react'
import { ReactComponent as LogoF } from '../images/facebook-logo.svg';
import { ReactComponent as LogoI } from '../images/instagram.svg';
import { ReactComponent as LogoL } from '../images/linkedin.svg';
import './Card.css'

class Card extends React.Component {

  render() {
    return (
      <div className='col-4'>

        <div className='row justify-content-center'>
          <div className='col-11 card-container'>

            <div className='row justify-content-center my-3'>
              <div className='col-8'>
                <img className='img-fluid img-card' src={this.props.fotoURL} alt={'Foto Tarjeta'} />
              </div>
            </div>

            <div className='text-center px-2'>
              <h1>{this.props.nombre}</h1>
              <h3>{this.props.rol}</h3>   
              <div className="logos">
              <LogoF className="logo"></LogoF>
              <LogoI className="logo2"></LogoI>
              <LogoL className="logo3"></LogoL>
              </div>
            </div>

            <div className='text-center py-3 botonSelect'>
              <button>Seleccionar</button>
            </div>

          </div>
        </div>

      </div>
    )
  }
}

export default Card;