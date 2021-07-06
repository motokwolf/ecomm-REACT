import React from 'react'
import ProductRow from 'components/ProductRow'
import Pagination from 'components/Pagination'

const SearchResults = ({result}) => {

  const theProduct = result.slice(0,8).map((product) => <ProductRow key={product.id} data={product} />)
  // Pagination is next

  // How many are in the original set (total that meet the criteria)?
  // How many to display per page?
  // What page are we currently showing?


  return (
  <>
    <div className="results">
      <section >
      <h2 className="subheading">Results</h2>
      <ul id="productsTable" className="productGrid">{theProduct}</ul>
      </section>
      <p id="numProducts" style={{textAlign: `center`}}>
    {theProduct.length} {(theProduct.length === 1) ? `product` : `products`} of {result.length}
    </p>
    </div>
    
    {/*<Pagination />*/}
    
  </>
  )
}

export default SearchResults