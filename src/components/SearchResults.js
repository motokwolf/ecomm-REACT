import React, {useState}from 'react'
import ProductRow from 'components/ProductRow'
import Pagination from 'components/Pagination'

const SearchResults = ({result}) => {

  const [pageNum, setPageNum] = useState(1)

  const sliceSize = 8
  
  const totalSize = result.length

  const start = (pageNum - 1) * sliceSize
  const end = start + sliceSize
  
  //page 1
  const theProduct = result.slice(start,end).map((product) => <ProductRow key={product.id} data={product} />)
  // Pagination is next

  // How many are in the original set (total that meet the criteria)?
  // How many to display per page?
  // What page are we currently showing?
  
  const updatePage = (page) => {
    if 
    (page <= 0) setPageNum(1)
    else if 
    (page > Math.ceil(totalSize / sliceSize)) setPageNum(Math.ceil(totalSize / sliceSize))
    else
    setPageNum(page)
  }


  return (
  <>
    <div className="results">
      <section >
      <h2 className="subheading">Results</h2>
      <p id="numProducts" >
      {theProduct.length} {(theProduct.length === 1) ? `product` : `products`} of {totalSize} products found
           </p>
      <ul id="productsTable" className="productGrid">{theProduct}</ul>
      </section>
      <div style={{textAlign: `center`}}>
          <p id="numProducts" >
            Page {pageNum} of {(Math.ceil(totalSize / sliceSize) === 0) ? `1` : (Math.ceil(totalSize / sliceSize))} 
           <br /><button onClick={()=> updatePage(pageNum-1)}>Previous Page</button><button onClick={()=> updatePage(pageNum+1)} >Next Page</button></p>
           </div>
    </div>
    
    {/*<Pagination />*/}
    
  </>
  )
}

export default SearchResults