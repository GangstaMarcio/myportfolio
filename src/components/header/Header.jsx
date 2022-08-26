import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSociais from './HeaderSociais'
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>

        <h4>Ola, Eu sou</h4>
        <h1>Marcio Costa</h1>
        <h4 className='text-light'> CCNAv7 | VideoMacker </h4>

        <CTA/>
        <HeaderSociais/>

        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
        
      </div>
    </header>
  )
}

export default Header