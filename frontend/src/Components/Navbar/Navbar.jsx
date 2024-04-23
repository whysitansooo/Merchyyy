import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'

const Navbar = () => {

    const [menu , setMenu] = useState("shop");

    const handleMenuChange = (newMenu) => {
        setMenu(newMenu);
    }

  return (
    <div  className='navbar'>

         <div className="nav-logo">
            <img src={logo} alt="logo"/>
            <p>Merchyy</p>

          </div>  

          <ul className='nav-menu'>
            <li onClick={() => handleMenuChange("shop")}>Shop{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={() => handleMenuChange("mens")}>Men{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={() => handleMenuChange("womens")}>Women{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={() => handleMenuChange("kids")}>Kids{menu==="kids"?<hr/>:<></>}</li>

          </ul>

            <div className='nav-login-cart'>
                <button>Login</button>
                <img src={cart_icon} alt="cart" />
                <div className="nav-cart-count">0</div>
            </div>


    </div>
  )
}

export default Navbar