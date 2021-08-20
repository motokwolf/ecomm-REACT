import React, { useState } from 'react'
import Layout from 'components/Layout'
import { Link } from 'react-router-dom'


const Cart = ({data}) => {

    

    const cart = data.userCart

    console.log(cart)

    const useMoney = (cents) => {
        return `$ ${cents.toFixed(2)}`
    }

    let subtotal = 0


    const mappedProducts = (cart.map(item => { subtotal += item.ins
                                             return <li key={item.id}><b>{item.name}</b>({item.count} x {useMoney(item.ins)})<b>{useMoney(item.ins)}</b></li> }) 
                           )
	
                           console.log(subtotal)

    return (
        <Layout>
            <div className="center">
            <h2>Your Cart</h2>
            <div>
                <ul className="cartRow">
                    {(cart.length) ? (mappedProducts) : (<div>No items in your cart, try going to the <Link to="/">shop</Link></div> ) }
                </ul>
                <button style={{float: 'right', fontSize: `1em`}}>Check out {useMoney(subtotal)}</button>
            </div>
			</div>
            
        </Layout>
    )
}

export default Cart