import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(pro) {
    return (
        <nav className={`px-3 navbar navbar-expand-lg navbar-${pro.mode} bg-${pro.mode}`}>
            <Link className={`navbar-brand text-${pro.mode==='light'?'dark':'light'}`} to="/">TextMange</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className={`nav-link text-${pro.mode==='light'?'dark':'light'}`} to="/">Home</Link>
                    </li>
                  
                </ul>
                <div className={`form-check form-switch text-${pro.mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input" onClick={pro.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label pl-3" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                </div>
            </div>
        </nav>
    )
}
