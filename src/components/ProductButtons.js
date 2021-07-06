import React from 'react'
import Favorite from 'img/favorite.svg'
import Cart from 'img/cart.svg'

const ProductButtons = () => {
  return (
    <footer className="productbuttons">
      <button type="button"><img src={Cart} alt="Shopping Cart" width="24" /> Add to Cart</button>
      <button type="button"><img src={Favorite} alt="Favorites" width="24" /></button>
    </footer>
  )
}

export default ProductButtons