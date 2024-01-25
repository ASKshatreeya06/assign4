import React, { useState } from 'react'
import axios from 'axios'

const Sinup = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const Sinup = async (e) => {
        e.preventDefault();
        try {
            const body = { fullName, email, password }
            await axios.post("http://localhost:8080/signup", body)
            alert("Sign Up successful")
            window.location = '/login'

        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div className='container mt-3 '>
            <h2 className='text-center fw-bold'>REGISTER FORM</h2>
            <form className='shadow p-5' onSubmit={Sinup}>

                <div className="mb-3">
                    <label for="exampleInputfullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" value={fullName} onChange={e => setFullName(e.target.value)} />

                </div>
                {/* <div className="mb-3">
                    <label for="exampleInputLastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" />

                </div> */}
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

export default Sinup
