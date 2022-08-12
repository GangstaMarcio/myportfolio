import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Conhecer</h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experiências</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projectos</h5>
              <small>80+ Completed</small>
            </article>

          </div>

          <p>
            Meu nome é Marcio Costa e sou um paixonado por tecnologia. Meu primeiro contacto com a 
            programação foi em 2015, quando ainda estava no ensino médio. Apesar de ter gostado da área, 
            só comecei a dar o devido foco em 2021, quando um amigo me apresentou o desenvolvimento Web.
          </p>
          <p>
            Hoje já entendo de tecnologias voltadas a Front End. Também gosto de brincar com design no 
            Figma, criando interfaces para projectos pessoais e de amigos.
          </p>
         

          <a href="#contact" className='btn btn-primary'>Vamos conversar?</a>

        </div>
      </div>
    </section>
  )
}

export default About