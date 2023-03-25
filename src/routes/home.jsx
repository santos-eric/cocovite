import React from 'react'
import '../styles/home.sass'
import Carousel from './carousel.jsx'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const home = () => {
  return (
    <>
      <main>
        <div className="left-col">
          <h1>Quality seafood without the price tag</h1>
          <p className="subhead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum amet corrupti consequatur.
          </p>
          <div className="cta-btns">
          <a href="#" className="primary-cta">Order Online</a>
          <a href="#" className="secondary-cta">View Menu</a>
        </div>
        </div>
        <div className="right-col">
          <Carousel/>
        </div>
        {/* <div className="hero">
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
          </div> */}
      </main>
    </>
  )
}

export default home