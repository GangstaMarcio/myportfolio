import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { SiDiscord } from 'react-icons/si'
import { AiFillFacebook } from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'

const HeaderSociais = () => {
  return (
    <div className='header__sociais'>
        <a href="LinkIden" target="_blank"><BsLinkedin/></a>
        <a href='Github' target="_blank"><FaGithub/></a>
        <a href="Discord" target="_blank"><SiDiscord/></a>
        <a href="Facebook" target="_blank"><AiFillFacebook/></a>
    </div>
  )
}

export default HeaderSociais