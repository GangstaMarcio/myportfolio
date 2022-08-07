import React from 'react'
import './header.css'
import CTA from './CTA'
import Toggle from './Toggle'
import HeaderSociais from './HeaderSociais'
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>

        <article className='top__container'>
          <Toggle />
        </article>

        <h4>Ola, Eu sou</h4>
        <h1>Marcio Costa</h1>
        <h4 className='text-light'> VideoMacker / Design Web / CCNA 1 e 2</h4>
        <CTA />
        <HeaderSociais />

        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
        
      </div>
    </header>
  )
}

export default Header