import React from 'react'

const Tdrevenue = ({products}) => {

  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    sum += parseFloat(products[i].amount); //calculate total amount of sales
  }
  return (
    <div className='container mt-5'>
      <h2 className='text-center fw-bold'>TODAY REVENUE IS : &#8377;  {sum} /</h2>
    </div>
  )
}

export default Tdrevenue
