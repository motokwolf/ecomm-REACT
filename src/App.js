import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserContext from 'contexts/UserContext'
import Products from 'pages/Products'
import OneProduct from  'pages/OneProduct'
import Cart from  'pages/Cart'
import Fail from 'pages/Fail'


const App = () => {

 //user?
 const [userData, setUserData] = useState({
    id:123,
    username: `toki`,
    photo: `user.png`,
    userFav: [],
    userCart: [{
        id: 1,
        name: `Pilot Fountain Pen Kakuno`,
        ins: 68.50,
        description: `Sailor Japanese Pen Company takes pride in the professionally skilled craftsman who ensure each nib is perfect.`,
        rating: 5.0,
        colours: [ `black`, `white` ],
        img: `product01.jpg`,
    },
    {
        id: 2,
        name: `Pilot Metropolitan`,
        ins: 30.00,
        description: `Includes one proprietary Pilot squeeze converter for use with bottled ink, and one proprietary ink cartridge.`,
        rating: 2.5,
        colours: [ `silver`,  `white`, `blue`] ,
        img: `product02.jpg`,
    }],
});

const productsAr = [
    {
        id: 1,
        name: `Pilot Fountain Pen Kakuno`,
        ins: 68.50,
        description: `Sailor Japanese Pen Company takes pride in the professionally skilled craftsman who ensure each nib is perfect.`,
        rating: 5.0,
        colours: [ `black`, `white` ],
        img: `product01.jpg`,
    }, {
        id: 2,
        name: `Pilot Metropolitan`,
        ins: 30.00,
        description: `Includes one proprietary Pilot squeeze converter for use with bottled ink, and one proprietary ink cartridge.`,
        rating: 2.5,
        colours: [ `silver`,  `white`, `blue`] ,
        img: `product02.jpg`,
    }, {
        id: 3,
        name: `Lamy Z24 Converter`,
        ins: 20.90,
        description: `Century 37760oe converter with purchase.`,
        rating: 3.5,
        colours: [`black` ],
        img: `product03.jpg`,
    }, {
        id: 4,
        name: `Noodler's Ahab Flex Fountain Pen`,
        ins: 39.00,
        description: `This pen is a great way to get into the world of flex pens - writes like a fine nib with minimal pressure.`,
        rating: 5.0,
        colours: [ `gold`, `black`] ,
        img: `product04.jpg`,
    }, {
        id: 5,
        name: `Pilot Metropolitan - Plain`,
        ins: 30.00,
        description: `The Pilot Metropolitan is a great starter pen. With its sleek metal body, easy snap cap, and smooth nib it's a perfect everyday writer.`,
        rating: 4.9,
        colours: [ `rd`, `white`, `blue` ],
        img: `product05.jpg`,
    }, {
        id: 6,
        name: `Lamy Al-Star Fountain Pen`,
        ins: 21.00,
        description: `With one of the smoothest nibs in its price range, it has the additional bonus of easily interchangeable nibs.`,
        rating: 4.2,
        colours: [ `gold`, `silver` ],
        img: `product06.jpg`,
    }, {
        id: 7,
        name: `Kaweco Classic Sport Fountain Pen`,
        ins: 33.50,
        description: `Aptly named their "classic" fountain pen, the Sport has been an icon of the Kaweco brand for more than 80 years.`,
        rating: 4.5,
        colours: [ `red`],
        img: `product07.jpg`,
    }, {
        id: 8,
        name: `Parker Fountain Pen`,
        ins: 25.90,
        description: `Parker Jotter Fountain Pen - Bond Street Black CT. Comes with: 1 cartridge.`,
        rating: 4.4,
        colours: [ `silver`],
        img: `product08.jpg`,
    }, {
        id: 9,
        name: `Faber-Castell School Fountain Pen`,
        ins: 20.00,
        description: `A perfect starter pen, with an ergonomic triangular rubberised grip.`,
        rating: 3.0,
        colours: [ `red`, `white`, `blue` ],
        img: `product09.jpg`,
    }, {
        id: 10,
        name: `Lamy Al-Star Fountain Pen`,
        ins: 49.50,
        description:  `It's a pen in every veteran writer's collection and its price makes it a top choice for new writers.`,
        rating: 4.6,
        colours: [ `silver`, `white`, `black` ],
        img: `product10.jpg`,
    }, { 
        id: 11,
        name: `Kaweco Brass Sport Fountain Pen`,
        ins: 82.50,
        description: `The Kaweco Brass Sport is made from solid brass with a raw finish that will darken and develop a unique patina over time, giving it an antique, vintage feel.`,
        rating: 4.9,
        colours: [ `gold`, `white` ],
        img: `product11.jpg`,
    }, {
        id: 12,
        name: `Platinum Preppy`,
        ins: 18.00,
        description: `Like Pilot, Platinum produces their nibs in-house, which lets them create remarkably smooth and consistent nibs at shockingly affordable prices.`,
        rating: 3.5,
        colours: [ `silver`,  `white`, `blue`,`red`] ,
        img: `product12.jpg`,
    }, {
        id: 13,
        name: `TWSBI ECO`,
        ins: 20.90,
        description: `TWSBI (pronounced “twiz-bee”) has quickly earned a reputation with their own-brand pens for providing high-end features and eye-catching designs at budget-friendly prices.`,
        rating: 4.5,
        colours: [`black`, `white` ],
        img: `product13.jpg`,
    }, {
        id: 14,
        name: `Pelikan Twist`,
        ins: 29.00,
        description: `This funky fountain pen is sure to put a smile on your face whenever you use it. Despite its unusual design, it’s actually quite comfortable to hold whether you’re right- or left-handed.`,
        rating: 2.0,
        colours: [ `red`, `blue`] ,
        img: `product14.jpg`,
    }, {
        id: 15,
        name: `Noodler's Triple Tail Flex Fountain Pen`,
        ins: 55.00,
        description: `Featuring a special three-tined flex nib, the Triple Tail offers excellent line variation and a generous ink flow to keep up with the demands of flex nib calligraphy.`,
        rating: 4.9,
        colours: [  `white` ],
        img: `product15.jpg`,
    }, {
        id: 16,
        name: `Pilot Custom 912 Fountain Pen - Black Body - Falcon Nib`,
        ins: 90.00,
        description: `Part of Pilot's "Custom" family of high-quality gold nib fountain pens, the Custom 912 features a sleek and stylish combination of black resin and rhodium trim. What it's best known for, however, is its wide selection of interesting and exotic nibs.`,
        rating: 4.4,
        colours: [ `black` ],
        img: `product16.jpg`,
    }, {
        id: 17,
        name: `Noodler's Konrad Flex Fountain Pen - Ivory Darkness`,
        ins: 20.50,
        description: `Noodler's flex pens are ideal for fountain pen enthusiasts who enjoy tinkering with their pens. `,
        rating: 4.5,
        colours: [ `black`, `white`],
        img: `product17.jpg`,
    }, {
        id: 18,
        name: `Sailor Pro Gear Slim Shikiori Fountain Pen - 14k Medium Fine Nib`,
        ins: 199.90,
        description: `This pen's beautiful resin construction is complemented by warm 24k gold-plated accents. Its medium-fine nib is perfect for everyday writing and drawing.`,
        rating: 5.0,
        colours: [ `gold`],
        img: `product18.jpg`,
    }, {
        id: 19,
        name: `Pilot Vanishing Point Fountain Pen - Black Matte - Fine Nib`,
        ins: 90.00,
        description: `This Vanishing Point retractable fountain pen from Pilot features a beautifully designed metal body with a modern, sophisticated matte black finish.`,
        rating: 4.9,
        colours: [ `black` ],
        img: `product19.jpg`,
    }, {
        id: 20,
        name: `Pilot Parallel Pen - 2.4 mm Nib`,
        ins: 10.50,
        description:  `The Pilot Parallel calligraphy pen features a unique nib comprised of two parallel metal plates. This allows it to distribute ink more evenly than conventional metal italic nibs while also being crisper and far more durable than a felt-tipped calligraphy pen.`,
        rating: 3.6,
        colours: [ `white` ],
        img: `product20.jpg`,
    }
  ]

const handleAddCart =  (event, name) => {

  const cproduct = productsAr.find(product => product.name.includes(name))
  userCart.push(cproduct)
  
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


  return (
    <Router>
        <UserContext.Provider value={{data:userData, handleAddCart:handleAddCart, toggleFavourite:toggleFavourite, handleAddCart:handleAddCart}}>
        <Switch>
            <Route exact path="/"><Products data={productsAr} />  </Route>
            <Route path="/oneproduct/:slug">
                <UserContext.Provider value={userData}>
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