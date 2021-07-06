import React from 'react'

const SearchField = () => {
  return (
    <fieldset>
      <input type="search" name="search" id="filterName" placeholder="Search" value={query} onChange={handleQueryChange} className="field search" autocomplete="off" />
       <button type="button"><span className="material-icons-round">search</span></button>
    </fieldset>
  )
}

export default SearchField