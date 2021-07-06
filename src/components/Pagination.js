import React from 'react'

const Pagination = ({result}) => {

  let pagesNum = result.length/8


  return (
    
    <nav aria-label="Pagination" className="pagination">
        <ul className="pages">
            <li><a href="#" aria-label="Current Page, Page 1" aria-current="true">1</a></li>
            <li><a href="#" aria-label="Page 2">{pagesNum}</a></li>
        </ul>
    </nav>
  )
}

export default Pagination


