import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Salentry = ({ pdata }) => {
  const ran = Math.floor(Math.random() * 100); //generate random number for id creation
  const dom = Math.floor(Math.random() * (90 - 65 + 1)) + 65; // generate number for ASCII value A to Z
  const char = String.fromCharCode(dom); // convert dom value in character
  let id = char + dom + ran; // generate id for product

  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [amount, setAmount] = useState('');

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    },
  };

  const addSele = async (e) => {
    e.preventDefault();


    try {

      const body = { id, productName, amount, quantity }
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        },
      };
     const res= axios.post("http://localhost:8080/createpost", body, config)
     
      alert("product add successfully")
    } catch (error) {
      console.log(error.message);
    }



    // const newProduct =
    // {
    //   id: id,
    //   productName: productName,
    //   quantity: quantity,
    //   amount: amount
    // };




    // Clear input fields after submitting
    
    setProductName('');
    setQuantity('');
    setAmount('');
  };
  
  // const fetch = async () => {
   
  //   const response = await axios.get("http://localhost:8080/allproductsUser", config)
  //   const newProduct = response.data;
  //   console.log(newProduct);
  //   // Call the function passed from the parent to update the products state
  //   pdata(prevProducts => [...prevProducts, newProduct]);
  // };
  // useEffect(() => {
  //   fetch();
  // },[addSele])

  return (
    <div className='container mt-3 '>
      <h2 className='text-center fw-bold'>ADD SALES ENTRY</h2>
      <form className='shadow p-5' onSubmit={addSele}>

        <div className="mb-3">
          <label for="exampleInputProductName" className="form-label">Product Name</label>
          <input type="text" className="form-control" value={productName} onChange={e => setProductName(e.target.value)} />

        </div>
        <div className="mb-3">
          <label for="exampleInputQuantity" className="form-label">Quantity</label>
          <input type="text" className="form-control" value={quantity} onChange={e => setQuantity(e.target.value)} />

        </div>
        <div className="mb-3">
          <label for="exampleInputAmunt" className="form-label">Amount</label>
          <input type="Number" className="form-control" value={amount} onChange={e => setAmount(e.target.value)} />

        </div>


        <button type="submit" className="btn btn-primary fw-bold w-100">Submit</button>
      </form>
    </div>
  )
}

export default Salentry
