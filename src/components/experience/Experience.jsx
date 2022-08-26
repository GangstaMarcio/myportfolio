import React from 'react'
import './experience.css'
import CCNA1 from '../../assets/CCNA1 Comunidade - certificate.pdf'
import CCNA2 from '../../assets/CCNA2 Comunidade -certificate.pdf'
import { BsPatchCheckFill } from 'react-icons/bs'
import { SiCisco } from 'react-icons/si'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Quais Habilidades eu Tenho</h5>
      <h2>Experiências</h2>

      <div className="container experience__container">
        <div>
          <h3>CCNAv7 - 1</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiCisco className='experience__details-icon' />
              <div>
                <h4>CCNAv7: Introdução às redes</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
          <a href={CCNA2} download className='btn btn-primary'>
            Baixar certificado
          </a>
        </div>
        <div>
          <h3>CCNAv7 - 2</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiCisco className='experience__details-icon' />
              <div>
                <h4>CCNAv7: Switching, Routing, and Wireless</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
          <a href={CCNA1} download className='btn btn-primary'>
            Baixar certificado
          </a>
        </div>
        {/* END OF CCNA 1 E 2 */}

        <div>
          <h3>VideoMaker</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Camtasia Studio</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>RenderForest</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF CCNA 1 E 2 */}

        <div>
          <span>Em breve</span>
        </div>
        {/* EM BREVE */}
        
      </div>
    </section>
  )
}

export default Experience