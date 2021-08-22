import React, {useState} from 'react'
import Favorite from 'img/favorite.svg'
import Cart from 'img/cart.svg'

const ProductButtons = ({value=false, style, ...otherProps}) => {
  

    // Store the current state of the favourite button
    const [isFavourite, setIsFavourite] = useState(value)

    // Set some basic styles, as well as allow for custom styles (via "style" prop) as well
    const cssStyle = {
      font: `inherit`,
      cursor: `pointer`,
      ...style
    }
    
    // Handle inverting the isFavourite state variable
    const invertFav = (event) => {
      setIsFavourite( !isFavourite )
       // flip a boolean using the NOT operator (!)
    }

    const handleFavouriteClick = (id) => {
     // Favorite toggle
     console.log(id)

    }

  return (
    <footer className="productbuttons">
      <button type="button" onClick={() => updater(id)}><img src={Cart} alt="Shopping Cart" width="24" /> Add to Cart</button>
      <button type="button" onClick={() => handleFavouriteClick(id)} style={cssStyle} {...otherProps}>{(isFavourite) ? `❤️` : `🤍`
			}</button>
    </footer>
  )
}

export default ProductButtons