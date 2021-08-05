import React, {useContext} from 'react'
import Layout from 'components/Layout'
import noImg from 'img/product.jpg'
import Favorite from 'img/favorite.svg'
import {useParams} from 'react-router'
import Cart from 'img/cart.svg'
import UserContext from '../contexts/users'


const OneProduct = () => {

const {slug} = useParams()
const userData = useContext(UserContext)


    return (
    <Layout>
     <main>
      {/*remove later*/}
      <h1 style={{fontSize: `4em`, textAlign: `center`}}>WORK IN PROGRESS</h1>

      <article className="one-product">
        <div style={{width:`200px`, margin: `0`}}>
          <div className="gallery img-product">
            <img className="bigimg" id="bigimg" alt="Product Image" src={noImg} />
            <img id="thumb1" className="thumb" alt="Product Image" src={noImg} />
            <img id="thumb2" className="thumb" alt="Product Image" src={noImg} />
            <img id="thumb3" className="thumb" alt="Product Image" src={noImg} />
          </div>
        </div>
        <header className="product-info">
          <h3 className="one-price">{slug}</h3>
          <dl>
            <dt>Rating</dt>
            <dd>5.0 <span className="material-icons-round">star</span><span className="material-icons-round">star</span><span className="material-icons-round">star</span><span className="material-icons-round">star</span><span className="material-icons-round">star</span></dd>
          </dl>
          <data value="39"><del>$80.00</del> <ins className="one-price">$68.50</ins></data>
        </header>
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

        <div className="description"> <p>Sailor Japanese Pen Company takes pride in the professionally skilled craftsman who ensure each nib is perfect. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, consequuntur. Nisi ab quis eaque consectetur maiores atque sint quasi accusamus totam magnam doloribus expedita voluptatum modi, amet vitae hic mollitia! </p> </div>

        <footer>
          <div className="related-products">
            <label>Related Products</label>
              <div className="more-pictures">
                <img src={noImg} alt="Product picture" /><img src={noImg} alt="Product picture" /><img src={noImg} alt="Product picture" />
              </div>
          </div>
        </footer>
      </article>
    </main>
    </Layout>
    )    
}

export default OneProduct