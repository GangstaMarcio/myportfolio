import React, { useState } from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {

  const [show, setShow] = useState('noShow');

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
              <small>2+ Anos</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projectos</h5>
              <small>19+ Feitos</small>
            </article>
          </div>

          <article>
            <p>
              Meu nome é Marcio Costa e sou um apaixonado por tecnologia. O meu primeiro contacto com as tecnologias foi em 2015, quando frequentei o ensino médio. Apesar de ter gostado
              da área, só comecei a dar o devido foco em 2021, onde conceitos como <b>lógica de programação</b>, <b>algoritmo</b> e <b>conectividade em uma rede</b> serviram-me como base
              de aprendizado para investir numa carreia de TI.
            </p>
            <p>
              Além disso, em busca de ser um profissional de TI sólido, procurei à academia de redes da <b>CISCO</b> CINFOTEC, Talatona. Conclui o curso <b>CCNAv7: Introdução às redes</b>, logo em seguida, conclui o curso <b>CCNAv7: Switching, Routing e 
              Wireless Essentials.</b> 
            </p>
            <p>
              Entre tanto, sempre tive domínio de falar em público e hablidades com programas de apresentação de projectos como o <b>Power Point</b>, trabalhando com transições, gráficos, efeitos de texto 
              e muito mais, daí foi-me apresentado por um professor programas de <b>edição de videos</b>, que levou-me a trabalhar numa startup como <b>videomaker</b>.
            </p>
            <p>
              Hoje já entendo de tecnologias voltadas a <b>CISCO</b> e <b>edição de videos publicitários</b>.
            </p>
          </article>
          <article>
            <a href="#contact" className='btn btn-primary'>Vamos conversar?</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About