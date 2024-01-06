import React, { useState } from 'react'

const Salentry = ({pdata}) => {
  const ran = Math.floor(Math.random()*100); //generate random number for id creation
  const dom = Math.floor(Math.random() * (90 - 65 + 1)) + 65; // generate number for ASCII value A to Z
  const char = String.fromCharCode(dom); // convert dom value in character
  let id = char+dom+ran; // generate id for product

  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [amount, setAmount] = useState('');

  const addSele = (e) => {
    e.preventDefault();

    const newProduct = {
      id:id,
      product: product,
      quantity: quantity,
      amount: amount
    };

    // Call the function passed from the parent to update the products state
    pdata(prevProducts => [...prevProducts, newProduct]);

    // Clear input fields after submitting
    setProduct('');
    setQuantity('');
    setAmount('');
  };
  return (
    <div className='container mt-3 '>
      <h2 className='text-center fw-bold'>ADD SALES ENTRY</h2>
      <form className='shadow p-5' onSubmit={addSele}>

        <div class="mb-3">
          <label for="exampleInputProductName" class="form-label">Product Name</label>
          <input type="text" class="form-control" value={product} onChange={e => setProduct(e.target.value)} />

        </div>
        <div class="mb-3">
          <label for="exampleInputQuantity" class="form-label">Quantity</label>
          <input type="text" class="form-control" value={quantity} onChange={e => setQuantity(e.target.value)} />

        </div>
        <div class="mb-3">
          <label for="exampleInputAmunt" class="form-label">Amount</label>
          <input type="Number" class="form-control" value={amount} onChange={e => setAmount(e.target.value)} />

        </div>


        <button type="submit" class="btn btn-primary fw-bold w-100">Submit</button>
      </form>
    </div>
  )
}

export default Salentry
