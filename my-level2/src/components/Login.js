import React from "react";



export default function Login() {
    return (
        <form>


            <div className="registre">
                <h1>Login</h1>
                <div className="cont">Login Page</div>

                <label>Nom</label>
                <input type={'text'} placeholder="nom"></input>

                <label>Prenom</label>
                <input type={'text'} placeholder="prenom"></input>

                <label>Adresse email</label>
                <input type={'email'} placeholder="email"></input>

                <label>Passeword</label>
                <input type={'passeword'} placeholder="passeword"></input>

                <button>Login</button>

            </div>
        </form>
    )
}