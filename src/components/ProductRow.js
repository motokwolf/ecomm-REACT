import React from 'react'
//import ProductRatings from 'components/ProductRatings'
import ProductButtons from 'components/ProductButtons'
import {Link} from 'react-router-dom'

const ProductRow = ({data}) => {
  const {id, name, ins, description, rating, colours, img} = data


  const ColourOptions = () => {

    colours.forEach(colour =>{
      const addColour = colour
      console.log(addColour)
    })

    return (
      <li style={{listStyleType: `circle`}}>{colours}</li>
    )}

  
  return (
      <li className="product">
        <div className="card">
            <figure className="card-figure">
              <Link to={`/oneproduct/${id}`}>
              <div className="card-img-container">
                  <img className="card-image" src={`../src/img/${img}`} alt={`Product Image: ${name}`} title={name}/>  
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

          <ProductButtons />

          <p>{description} <Link to={`/oneproduct/${id}`} style={{textDecoration: `none`, letterSpacing: `2px`, fontWeight: `bold`}}>...</Link></p>
        
          {/*<form>
            <fieldset>  
              <legend style={{fontSize: `0.8em`}}>Colours Options</legend>
              <ul> 
              <ColourOptions />
              </ul>
            </fieldset>
          </form>*/}
          
        </div>
    </li>
  )
}

export default ProductRow