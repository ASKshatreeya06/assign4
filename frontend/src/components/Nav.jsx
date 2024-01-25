import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    const isLogin = sessionStorage.getItem('token')
    const navigate = useNavigate();
    const logOut = () => {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('user')
        // navigate('/login');
        window.location='/login'
    }
    return (

        <nav className="navbar navbar-expand-lg text-success bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">SALES APP</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                       { isLogin?(<> <Link className="nav-link active" aria-current="page" to="/">ADD SALES</Link>
                            <Link className="nav-link" to="/tsales">TOP SALES</Link>
                            <Link className="nav-link" to="/tdrevenue">TODAY TOTAL REVENUE</Link>
                            <Link className="nav-link" onClick={logOut}>LOGOUT</Link>
                        </>):
                        (<> <Link className="nav-link" to="/login">LOGIN</Link>
                            <Link className="nav-link" to="/signup">REGISTER</Link>
                        </>)}


                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
