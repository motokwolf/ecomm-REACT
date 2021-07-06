import React from 'react'

const SearchFilter = () => {
  return (
    <div className="filters">
      <form>
        <h2>Filters</h2>

        <div className="filter-options">

          <fieldset>
             <input type="search" name="search" id="filterName" placeholder="Search" value={query} onChange={handleQueryChange} className="field search" autoComplete="off" />
             <span className="material-icons-round">search</span>
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
  )
}

export default SearchFilter