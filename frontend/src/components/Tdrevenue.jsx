import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Tdrevenue = () => {
  const [sum, setSum] = useState(0);

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    },
  };

  const fetchAmount = async () => {
    try {
      const response = await axios.get("http://localhost:8080/allproductsUser", config);
      const products = response.data;
      let totalAmount = 0;

      for (let i = 0; i < products.length; i++) {
        totalAmount += parseFloat(products[i].amount);
      }

      setSum(totalAmount);
    } catch (error) {
      console.error('Error fetching amount:', error);
    }
  };

  useEffect(() => {
    fetchAmount();
  }, []); // Call fetchAmount when the component mounts

  return (
    <div className='container mt-5'>
      <h2 className='text-center fw-bold'>TODAY REVENUE IS : &#8377;  {sum} /</h2>
    </div>
  );
};

export default Tdrevenue;
