import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserContext from 'contexts/UserContext'
import Products from 'pages/Products'
import OneProduct from  'pages/OneProduct'
import Cart from  'pages/Cart'
import Fail from 'pages/Fail'
import firebase from 'utils/firebase'

const App = () => {

    //All Product Data
    const [productsAr, setProductsAr] = useState([])

    //firestore connection
    const db = firebase.firestore() 
        //pull once
        useEffect(() => {  
        //READ
        db.collection(`products`).get().then((snapshot) => {
            setProductsAr(
                snapshot.docs.reduce((products,doc) => [... products, doc.data()], [])
            )
        })}, [])

//user?
 const [userData, setUserData] = useState({
    id:123,
    username: `toki`,
    photo: `user.png`,
    userFav: [ ],
    userCart: [ ],
});


const handleAddCart = (id) => {

  const cproduct = productsAr.find(product => product.id === id)

  console.log(cproduct)

  setUserData({...userData, userCart: [...userData.userCart, cproduct]}) 
  
}

const toggleFavourite = (id) => {
        console.log(id)

        if (userData.userFav.includes(id)) {
          // remove
          setUserData({...userData, userFav: userData.userFav.filter((fav) => fav !== id)})
        } else {
          // Add
          setUserData({...userData, userFav: [...userData.userFav, id]})
        }
      }

      const numFavs = userData.userFav.length  
      const numItems = userData.userCart.length

      //handleAddCart:handleAddCart, toggleFavourite:toggleFavourite, handleAddCart:handleAddCart
return (
    <Router>
        <UserContext.Provider value={{data:userData, toggleFavourite:toggleFavourite, numFavs:numFavs, numItems:numItems, handleAddCart:handleAddCart}}>
        <Switch>
            <Route exact path="/"><Products data={productsAr} /></Route>
            <Route path="/oneproduct/:slug">
                <UserContext.Provider value={{data:productsAr}}>
                     <OneProduct data={productsAr}/>
                </UserContext.Provider>
            </Route>
            <Route path="/cart"><Cart data={userData}/></Route>
            <Route path="*"><Fail /></Route>
        </Switch>
        </UserContext.Provider>
    </Router>
  )

}

export default App