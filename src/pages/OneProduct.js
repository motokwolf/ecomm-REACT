import React, {useContext} from 'react'
import Layout from 'components/Layout'
import Favorite from 'img/favorite.svg'
import {useParams} from 'react-router'
import Cart from 'img/cart.svg'
import UserContext from 'contexts/UserContext'
import ProductRow from '../components/ProductRow'


const OneProduct = ({data}) => {

const {slug} = useParams()
const userData = useContext(UserContext)
const singleProduct = data.find(one => one.id === parseInt(slug));
const {name, ins, description, rating, colours, img} = singleProduct


    return (
    <Layout>
      <main>
      <article className="one-product">
        <h1 style={{fontSize: `3em`, textAlign: `center`}}>{name}</h1>
        <div className="block">
          <div style={{width:`200px`, margin: `0`}}>
            <div className="gallery img-product" >
              <img className="bigimg" id="bigimg" alt="Product Image" src={`../src/img/${img}`} />
             
            </div>
          </div>
          <header className="product-info">
            <dl> <h3 className="one-price">${ins.toFixed(2)}</h3>
              <dt>Rating</dt>
              <dd>{rating}<span className="material-icons-round">star</span><span className="material-icons-round">star</span><span className="material-icons-round">star</span><span className="material-icons-round">star</span><span className="material-icons-round">star</span></dd>
            </dl>
          </header>
        </div>
        <form className="product-option">
          <fieldset className="sort-field">
            <label  htmlFor="sort">Colours</label>
            <select name="sort" id="sort">
              <option value="choice">Choose colour</option>
              <option value="k">Black</option>
              <option value="w">White</option>
              <option value="r">Red</option>
            </select>
          </fieldset>

          <button type="button" className="one-button"><img src={Cart} alt="Shopping Cart" width="24" style={{verticalAlign: `middle`}} /> Add to Cart</button>
        </form>

        <div className="description"> <p>{description}</p> </div>

        <footer>
          <div className="related-products">
            <label>See more products</label>
              <div className="more-pictures">
                <img src={`../src/img/product-detail01.jpg`} alt="Product picture" />
              </div>
          </div>
        </footer>
      </article>
    </main>
    </Layout>
    )    
}

export default OneProduct