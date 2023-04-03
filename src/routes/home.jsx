import React from 'react'
import '../styles/home.sass'
import Carousel from './carousel.jsx'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const home = () => {
  return (
    <>
      <main>
        <div className="left-col">
          <h1>Mexico Style Seafood, Munchies and Drinks</h1>
          <p className="subhead">
            Made with Love in East El Paso and now In Juarez, Mexico. Est. 2016
          </p>
          <div className="cta-btns">
          <a href="https://food.google.com/chooseprovider?restaurantId=/g/11c7srbm2x&g2lbs=ADZRdkuzO84mLBH5XzNdd1HIOMkWr1myxVoFmvM1v-ss-PYjRrmq8tPYp4KkWW4qAiwr1GwaRTM648Tt7t_EwOFI6L6qh8scIg%3D%3D&hl=en-US&gl=us&cs=1&ssta=1&fo_m=MfohQo559jFvMWvkddHzV46uMT_RFPQ05bfKMQVr5-7IofUJMU_hT8vrWuwRMUv3d8yCO4PgMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=OUonZPCpN4-rqtsP7ae16AI&ei=OUonZPCpN4-rqtsP7ae16AI&fo_s=OA,AH&sei=CQULzZvvTV2REQhqifLxYm9M&utm_campaign" className="primary-cta">Order Online</a>
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