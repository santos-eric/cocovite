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
        <div className="hours">
          <div className="text">
            <h1>Closed Mondays</h1>
            <h1>Open Sun - Thur</h1>
            <h2>10:30am - 10pm</h2>
            <h1>Open Fri - Sat</h1>
            <h2>10:30am - 12am</h2>
          </div>
        </div>
      </main>
    </>
  )
}

export default home