import React from "react";
import { useLocation } from "react-router-dom";


export default function Button() {
    const location = useLocation()
    console.log(location);
    return (
        <button>Sign up</button>
       
    )
}