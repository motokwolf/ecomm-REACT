import React from 'react'
//import ProductRatings from 'components/ProductRatings'
import ProductButtons from 'components/ProductButtons'
import TestImg from 'img/product.jpg'

const ProductRow = ({data}) => {
  const {id, name, ins, description, rating, colours} = data

  const ColourOptions = () => {
    let colour = colours.value
    console.log(colour)
    return (
      <li style={{listStyleType: `circle`}}>{colour}</li>
    )}

  
  return (
      <li className="product">
        <div className="card">
            <figure className="card-figure">
              <a href="product.html">
              <div className="card-img-container">
                  <img className="card-image" src={TestImg} alt={`Product Image: ${name}`} title={name}/>  
              </div>
              </a>
            </figure>
        
          <h3>{name}</h3> 
          <span style={{fontSize: `0.9em`, textAlign:`right`}}>
            <dd >{rating} <span className="material-icons-round">star</span>
            {/*<ProductRatings /> */}
            </dd>
          </span>

          <data value={ins}><ins>${ins.toFixed(2)}</ins></data>

          <ProductButtons />

          <p>{description} <a href="product.html" style={{textDecoration: `none`, letterSpacing: `2px`, fontWeight: `bold`}}>...</a></p>
        
          <form>
            <fieldset>  
              <legend style={{fontSize: `0.8em`}}>Colours Options</legend>
              <ul> 
              <ColourOptions />
              </ul>
            </fieldset>
          </form>
          
        </div>
    </li>
  )
}

export default ProductRow