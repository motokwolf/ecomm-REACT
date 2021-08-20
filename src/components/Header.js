import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import SearchField from 'components/SearchField'
import ScriptaLogo from 'img/Scripta-logo.svg'
import Favorite from 'img/favorite.svg'
import Cart from 'img/cart.svg'
import {useParams} from 'react-router'


const Header = () => {

  

  function menuToggle() {
    document.getElementById("menu").classList.toggle("show");
  }

  return (
    <header className="page-header">
      <a href="/" className="logo"><img src={ScriptaLogo} alt="Scripta Logo" width="130" /></a>
      <div className="dropdown-menu">
        <button type="button" className="nav-toggle" onClick={menuToggle}>
          <span className="material-icons-round">menu</span>
        </button>
        <nav aria-label="Primary" className="navigation" id="nav-toggle">
          <ul className="menu" id="menu">
            <li><a href="/">Shop</a>
              <ul className="submenu">  
                <li><a href="/">Fountain Pens</a></li>
                <li><a href="/">Calligraphy Pens</a></li>
                <li><a href="/">Inks</a></li>
              </ul>
            </li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>

      <ul className="your-products">
        <li><a href="/"><img src={Favorite} alt="Favorites" width="30" /></a></li>
        <li><Link to="/cart"><img src={Cart} alt="Shopping Cart" width="30" /></Link></li>
      </ul>
    </header>
  )
}

export default Header