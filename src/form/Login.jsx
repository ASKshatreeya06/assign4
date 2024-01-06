import React from 'react'

const Login = () => {
    return (
        <div className='container mt-3 '>
            <h2 className='text-center fw-bold'>LOGIN FORM</h2>
            <form className='shadow p-5'>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" aria-describedby="emailHelp" />

                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" />
                </div>

                <button type="submit" class="btn btn-primary fw-bold w-100">Submit</button>
            </form>
        </div>
    )
}

export default Login
