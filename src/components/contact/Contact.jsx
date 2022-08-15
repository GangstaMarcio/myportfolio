import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Entre em Contacto</h5>
      <h2>Contacte-me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>marcioflavio@live.com.pt</h5>
            <a href='https://outlook.live.com/mail/0/' target='_blank'>Enviar mensagem</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Message</h4>
            <h5>marciocosta</h5>
            <a href="https://www.facebook.com/profile.php?id=100080685787857" target='_blank'>Enviar mensagem</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+244 945 650 656</h5>
            <a href="https://api.whatsapp.com/send?phone=+244945650656" target='_blank'>Enviar mensagem</a>
          </article>
        </div>
        {/**** END OF CONTACT OPTIONS ****/}
        <form action=''>
          <input type="text" name='name' placeholder='Seu nome' required />
          <input type="email" name='email' placeholder='Seu email' required />
          <textarea name="message" cols="20" rows="7" placeholder='Sua mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'> Enviar Mensagem </button>
        </form>
      </div>
    </section>
  )
}

export default Contact