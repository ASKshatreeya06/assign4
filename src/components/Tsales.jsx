import React from 'react'
import './Tsales.css'

const Tsales = ({ products }) => {
    const topSales = products.sort((a, b) => b.amount - a.amount).slice(0, 5); //find top 5 value which product anount is high
   
    return (
        <div className='container mt-5'>
            <h2 className='text-center fw-bold'>TOP 5 SALES</h2>
            <table className="table table-success table-striped p-3" >
                <thead id='table_head'>
                    <tr >
                        <th>#</th>
                        <th>Sales Id</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Sale Amount</th>
                    </tr>
                </thead>

                <tbody>

                    {topSales.map((title, index) =>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{title.id}</td>
                            <td>{title.product}</td>
                            <td>{title.quantity}</td>
                            <td>{title.amount}</td>
                        </tr>)}

                </tbody>
            </table>
        </div>
    )
}

export default Tsales
