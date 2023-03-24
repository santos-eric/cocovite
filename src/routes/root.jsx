// place outlet where you want the children route to display
import { Outlet, Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './footer'

export default function Root() {
  return (
    <>
      <Navbar />
      <div id="detail">
        <Outlet/>
      </div>
      <Footer/>
    </>
  );
}