import React from 'react'
import '../styles/home.sass'
import Carousel from './carousel.jsx'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const home = () => {
  return (
    <>
      <main className="home">
        <div className="hero">
          <Carousel />
        </div>
          <div className="news">
            <p>Closed Mondays</p>
            <section className='hours'>
              <p>Open Sun - Thur</p>
              <p>10:30am - 10pm</p>
            </section>
            <section className='hours'>
              <p>Open Fri - Sat</p>
              <p>10:30am - 12am</p>
            </section>
          </div>
      </main>
    </>
  )
}

export default home