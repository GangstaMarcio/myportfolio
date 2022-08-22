import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { SiDiscord } from 'react-icons/si'
import { AiFillFacebook } from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>Sobre mim</a></li>
        <li><a href='#experience'>Experiências</a></li>
        <li><a href='#portfolio'>Portfólio</a></li>
        <li><a href='#contact'>Contacte-me</a></li>
      </ul>
      <div className='footer__socials'>
        <a href="LinkIden" target="_blank"><BsLinkedin/></a>
        <a href='Github' target="_blank"><FaGithub/></a>
        <a href="Discord" target="_blank"><SiDiscord/></a>
        <a href="Facebook" target="_blank"><AiFillFacebook/></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Marcio Costa. Todos direitos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer