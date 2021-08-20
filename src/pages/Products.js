import React, {useState} from 'react'
import Layout from 'components/Layout'
import SearchResults from 'components/SearchResults'
//import SearchField from 'components/SearchField'
import ProductHeader from 'img/product-detail03.jpg'
import SearchFilter from '../components/SearchFilter'

const Products = ({data}) => {

  // ****** FILTER STATES *******
  // The state of each filter
  const [searchState, setSearchState] = useState({
    minRating: 0.0,
    query: ``,
    colourss: [],
    sort: (a, b) => a.ins - b.ins
  })

 

  // For convenience, destructure all of the values into local variables
  const {minRating, query, colourss, sort} = searchState

  

  // ****** FILTER ******
  // Filter the results into a new array that's the same size or smaller
  const searchResult = data
                      .filter(({rating}) => rating >= Number(minRating))
                      .filter(({name}) => name.toUpperCase().includes(query.toUpperCase()))
                      .filter(({colours}) => colourss.length === 0 || 
                                             colours.filter((colour) => colourss.includes(colour)).length > 0)
                      .sort(sort)



  // ****** EVENT LISTENERS *******
  const handleRatingChange = (event) => {

    setSearchState({
      ...searchState,
      minRating: Number(event.target.value),
    })
  }

  const handleQueryChange = (event) => {
    //setQuery(event.target.value)

    setSearchState({
      ...searchState,
      query: event.target.value
    })
  }


  
  const handleColourChange = ({target}) => {
    //setQuery(event.target.value)

    if (target.checked) {
      setSearchState({
        ...searchState, 
        colourss: [...searchState.colourss, target.value]
      })
    } else {
      setSearchState({
        ...searchState,
        colourss: searchState.colourss.filter((colour) => colour !== target.value)
      })
    }
  }


  const handleSortChange = ({target}) => {

    let sorting
    if (target.value === `price-low`) {
      sorting = (a, b) => a.ins - b.ins
    } else if (target.value === `price-high`) {
      sorting = (a, b) => b.ins - a.ins
    }

    setSearchState({
      ...searchState,
      sort: sorting
    })
  }


  return (
    <Layout>

      <header className="heading">
        <h1>Fountain Pens</h1>
        <div className="fill"><img className="fill" src={ProductHeader} alt="Pens on paper Banner" /></div>
      </header>

      <div className="products">
      
      <div className="filters">
    <form>
        <h2>Filters</h2>

        <div className="filter-options">

          <fieldset>
            <span className="material-icons-round">search</span>
            <input type="search" name="search" id="filterName" placeholder="Search" value={query} onChange={handleQueryChange} className="field search" autoComplete="off" />
          </fieldset>
        

          <fieldset className="colour-field" onChange={handleColourChange}>
            <legend>Colour</legend>
            <ul className="filter-list">
              <li>
                <label htmlFor="black" className="color-opt">Black
                <input type="checkbox" name="colour" value="black" id="black" />
                <span className="checkmark"></span>
                </label>
              </li>
              <li>
                <label htmlFor="white" className="color-opt">White
                <input type="checkbox" name="colour" value="white" id="white" />
                <span className="checkmark"></span>
              </label>
              </li>
              <li>
                <label htmlFor="silver" className="color-opt">Silver
                <input type="checkbox" name="colour" value="silver" id="silver" />
                <span className="checkmark"></span>
                </label>
              </li>
              <li>
                <label htmlFor="gold" className="color-opt">Gold
                <input type="checkbox" name="colour" value="gold" id="gold" /> 
                <span className="checkmark"></span>
                </label>
              </li>
              <li>
                <label htmlFor="red" className="color-opt">Red
                <input type="checkbox" name="colour" value="red" id="red" />
                <span className="checkmark"></span>
              </label>
              </li>
              <li>
                <label htmlFor="blue" className="color-opt">Blue
                <input type="checkbox" name="colour" value="blue" id="blue" />
                <span className="checkmark"></span>
              </label>
              </li>
            </ul>
          </fieldset>

          <fieldset className="rating-field" onChange={handleRatingChange}>
            <legend>Ratings (and above)</legend>
            <ul className="filter-list" id="ratingFilter">
              <li>
                <label htmlFor="aboveFour" className="rating-opt">
                  <input type="radio" name="rating" value="4" id="aboveFour" />
                  <span className="material-icons-round">star</span><span className="material-icons-round">star</span><span className="material-icons-round">star</span><span className="material-icons-round">star</span><span className="material-icons-round">star_border</span>
                </label>
              </li>
              <li>
                <label htmlFor="aboveThree"  className="rating-opt">
                  <input type="radio" name="rating" value="3" id="aboveThree" />
                  <span className="material-icons-round">star</span><span className="material-icons-round">star</span><span className="material-icons-round">star</span><span className="material-icons-round">star_border</span><span className="material-icons-round">star_border</span>
                </label>
              </li>
              <li>
                <label htmlFor="aboveTwo" className="rating-opt">
                  <input type="radio" name="rating" value="2" id="aboveTwo" />
                  <span className="material-icons-round">star</span><span className="material-icons-round">star</span><span className="material-icons-round">star_border</span><span className="material-icons-round">star_border</span><span className="material-icons-round">star_border</span>
                </label>
              </li>
              <li>
                <label htmlFor="aboveOne" className="rating-opt">
                  <input type="radio" name="rating" value="1" id="aboveOne" />
                  <span className="material-icons-round">star</span><span className="material-icons-round">star_border</span><span className="material-icons-round">star_border</span><span className="material-icons-round">star_border</span><span className="material-icons-round">star_border</span>
                </label>
              </li>
            </ul>
          </fieldset>
        </div>
        <fieldset className="sort-field">
          <label  htmlFor="sort">Show</label>
          <select name="sort" id="sort" className="field dropdown" defaultValue="newest" onChange={handleSortChange}>
            <option value="newest">Best Selling</option>
            <option value="price-high">Price, highest to lowest</option>
            <option value="price-low">Price, lowest to highest</option>
            <option value="newest">Newest releases</option>
          </select>
        </fieldset>
      </form>
      </div>
      
      
      <SearchResults result={data} />
      </div>
    </Layout>
  )
}

export default Products