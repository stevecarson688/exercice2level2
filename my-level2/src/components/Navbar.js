import React from "react";
import { Link } from "react-router-dom";



export default function Navbar() {
    return (
        <nav className="nav">
            <Link className="l1" to="/login">Login</Link>
            <Link className="l1" to="/signup">Signup</Link>
            <Link className="l1" to="/forget">Forget</Link>
        </nav>
    )
}