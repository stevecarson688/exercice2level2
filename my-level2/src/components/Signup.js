import React from "react";



export default function Signup() {
    return (
        <form>
            <div className="registre">
            <h1>Signup</h1>
            <div className="cont">Sign up Page</div>
            <label>Adresse email</label>
            <input type={'email'} placeholder="email"></input>

            <label>Passeword</label>
            <input type={'passeword'} placeholder="passeword"></input>

            <button>Sign up</button>
        </div>
        </form >
    )
}