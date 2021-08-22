import React, {useState, useContext } from 'react'
//import ProductRatings from 'components/ProductRatings'
import ProductButtons from 'components/ProductButtons'
import Cart from 'img/cart.svg'
import Favorite from 'img/favorite.svg'
import {Link} from 'react-router-dom'
import userContext from 'contexts/UserContext'

const ProductRow = ({value=false, style, data, ...otherProps}) => {

  const {id, name, ins, description, rating, colours, img} = data

  const user = useContext(userContext).data

  const {toggleFavourite} = useContext(userContext)

  const {handleAddCart} = useContext(userContext)

  /*const ColourOptions = { (
    colours.forEach(colour =>{
      const addColour = colour
      console.log(addColour)
    }) =>
 (
      <li style={{listStyleType: `circle`}}>{colours}</li>
    )}*/
    
    const [isFavourite, setIsFavourite] = useState(value)

  
    // Handle inverting the isFavourite state variable
    const invertFav = (event) => {
      setIsFavourite( !isFavourite )
       // flip a boolean using the NOT operator (!)
    }

    const handleFavouriteClick = (id) => {
     // Favorite toggle
     console.log(id)

     toggleFavourite(id)
    }

    const updater = (id) => {
      console.log(id)

      handleAddCart(id)
    }

  
  return (
      <li className="product">
        <div className="card">
            <figure className="card-figure">
              <Link to={`/oneproduct/${id}`}>
              <div className="card-img-container">
                  <img className="card-image" src={require(`../img/${img}`).default} alt={`Product Image: ${name}`} title={name}/>  
              </div>
              </Link>
            </figure>
        
          <Link  to={`/oneproduct/${id}`} style={{textDecoration: `none`}}><h3>{name}</h3></Link>
          <span style={{fontSize: `0.9em`, textAlign:`right`}}>
            <dd >{rating} <span className="material-icons-round">star</span>
            {/*<ProductRatings /> */}
            </dd>
          </span>

          <data value={ins}><ins>${ins.toFixed(2)}</ins></data>

          <footer className="productbuttons">
            <button type="button" onClick={() => updater(id)}><img src={Cart} alt="Shopping Cart" width="24" /> Add to Cart <span><em>{(user.userCart.map(product => product.id).includes(id)) && ` +Added`}</em></span></button>
            <button type="button" onClick={() => handleFavouriteClick(id)}><span className={ `${(user.userFav.includes(id)) && `fav`}`}>❤</span></button>
            </footer>

          <p>{description} <Link to={`/oneproduct/${id}`} style={{textDecoration: `none`, letterSpacing: `2px`, fontWeight: `bold`}}>...</Link></p>
        
        {/* <form>
            <fieldset>  
              <legend style={{fontSize: `0.8em`}}>Colours Options</legend>
              <ul> 
              {ColourOptions}
              </ul>
            </fieldset>
          </form>*/
         }
        </div>
    </li>
  )
}

export default ProductRow