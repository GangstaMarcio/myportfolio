import React from 'react'
import './experience.css'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3Alt } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { BsPatchCheckFill } from 'react-icons/bs'
import { RiReactjsLine } from 'react-icons/ri'
import { SiPhp } from 'react-icons/si'

import { CgFigma } from 'react-icons/cg'
import { SiInkscape } from 'react-icons/si'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Quais Habilidades eu Tenho</h5>
      <h2>Experiências</h2>

      <div className="container experience__container">
        <div>
          <h3>FrontEnd</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML5</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCss3Alt className='experience__details-icon' />
              <div>
                <h4>CSS3</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <IoLogoJavascript className='experience__details-icon' />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <RiReactjsLine className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div>
          <h3>BackEnd</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiPhp className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF DESIGN WEB */}

        <div>
          <h3>Design Web</h3>
          <div className="experience__content">
            <article className="experience__details">
              <CgFigma className='experience__details-icon' />
              <div>
                <h4>Figma</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiInkscape className='experience__details-icon' />
              <div>
                <h4>Inkscape</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF DESIGN WEB */}

        <div>
          <h3>CCNAv7</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF CCNA 1 E 2 */}

        <div>
          <h3>VideoMaker</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF CCNA 1 E 2 */}

        <div className='experience__'>
          <span>Em breve</span>
        </div>
        {/* EM BREVE */}
        
      </div>
    </section>
  )
}

export default Experience