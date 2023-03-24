// place outlet where you want the children route to display
import { Outlet, Link } from 'react-router-dom'
import Home from './home'
import Navbar from './Navbar'

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <Navbar/>
       </div>
      <div id="detail">
        <Outlet/>
      </div>
    </>
  );
}