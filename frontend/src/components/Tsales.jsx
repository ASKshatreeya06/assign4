import React, { useEffect, useState } from 'react';
import './Tsales.css';
import axios from 'axios';

const Tsales = () => {
    const [topSales, setTopSales] = useState([]); // Initial state for topSales

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        },
    };

    const fetchTopSales = async () => {
        try {
            const response = await axios.get("http://localhost:8080/allproductsUser", config);
            const products = response.data;
            const sortedTopSales = products.sort((a, b) => b.amount - a.amount).slice(0, 5);
            setTopSales(sortedTopSales);
        } catch (error) {
            console.error('Error fetching top sales:', error);
        }
    };

    useEffect(() => {
        fetchTopSales();
    }, []); // Pass an empty dependency array to run the effect only once when the component mounts

    return (
        <div className='container mt-5'>
            <h2 className='text-center fw-bold'>TOP 5 SALES</h2>
            <table className="table table-success table-striped p-3">
                <thead id='table_head'>
                    <tr>
                        <th>#</th>
                        <th>Sales Id</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Sale Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {topSales.map((title, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{title.id}</td>
                            <td>{title.productName}</td>
                            <td>{title.quantity}</td>
                            <td>{title.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Tsales;
