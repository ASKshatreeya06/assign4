import axios from 'axios';
import React, { useState } from 'react'
;

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const login = async (e) => {
        e.preventDefault();
        try {
            const body = { email, password }
            const response = await axios.post("http://localhost:8080/login", body)
            debugger
            sessionStorage.setItem("token", response.data.result.token)
            const user = JSON.stringify(response.data.result.user);
            sessionStorage.setItem('user', user)
            
            alert("login successful")
           
            // Navigate('/tsales')
            window.location = '/tsales'

        } catch (error) {
            console.log(error);

        }
    }
    return (
        <div className='container mt-3 '>
            <h2 className='text-center fw-bold'>LOGIN FORM</h2>
            <form className='shadow p-5' onSubmit={login}>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)} />

                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary fw-bold w-100">Submit</button>
            </form>
        </div>
    )
}

export default Login
