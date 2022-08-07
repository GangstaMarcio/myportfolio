import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum at expedita magni consequuntur ipsum, autem mollitia explicabo vero officia ducimus adipisci, quam eligendi? Dolor adipisci magnam hic quam minima doloremque',
  },
  {
    avatar: AVTR2,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum at expedita magni consequuntur ipsum, autem mollitia explicabo vero officia ducimus adipisci, quam eligendi? Dolor adipisci magnam hic quam minima doloremque',
  },
  {
    avatar: AVTR3,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum at expedita magni consequuntur ipsum, autem mollitia explicabo vero officia ducimus adipisci, quam eligendi? Dolor adipisci magnam hic quam minima doloremque',
  },
  {
    avatar: AVTR4,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum at expedita magni consequuntur ipsum, autem mollitia explicabo vero officia ducimus adipisci, quam eligendi? Dolor adipisci magnam hic quam minima doloremque',
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Revisão de Cliente</h5>
      <h2>Depoimentos</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
          modules={[ Pagination ]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt={name} />
                </div>
                <div>
                  <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>
                    {review}
                  </small>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials  