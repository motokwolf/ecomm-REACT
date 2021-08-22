import React, { useState, useContext } from 'react'
import Layout from 'components/Layout'
import { Link } from 'react-router-dom'
import userContext from 'contexts/UserContext'


const Cart = () => {

    

    const user = useContext(userContext).data

    console.log(user)

    const useMoney = (cents) => {
     return `$ ${cents.toFixed(2)}`
 }

    let subtotal = 0



    const mappedProducts = (user.userCart.map(item => { 
                                             subtotal += item.ins
                                             return (<li key={item.id}><b>{item.name}</b>({item.count} x {useMoney(item.ins)})<b>{(item.ins)}</b></li> )}) 
                           )
	 

    return (
        <Layout>
            <div className="center">
            <h2>Your Cart</h2>
            <div>
                <ul className="cartRow">
                    {(user.userCart.length) ? (mappedProducts) : (<div>No items in your cart, try going to the <Link to="/">shop</Link></div> ) }
                </ul>
                {Boolean(user.userCart.length) && <button style={{float: 'right', fontSize: `1em`}}>Check out {useMoney(subtotal)} </button>}
            </div>
			</div>

            
        </Layout>
    )
}

export default Cart