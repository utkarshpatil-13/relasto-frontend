import React from 'react'

const Pagination = () => {

    const {page, nbPages} = useGlobalContext();

  return (
    <div className='pagination_btn'> 
        <button onClick={() => {getPreviousPage}}>PREV</button>
        <p>
            {page} of {nbPages}
        </p>
        <button onClick={() => {getNextPage}}></button>
    </div>
  )
}

export default Pagination