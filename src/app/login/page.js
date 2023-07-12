"use client"
import React from "react"
import "./login.css"
import {login} from "../services/firebase/auth";

export default function register(email, password) {

    const[state,setState] = React.useState({
        email:"",
        password:""
    });

    function onChange(event) {
        
        const value = event.target.value;
        const name = event.target.name;
        
        setState({
            ...state, 
            [name]: value
        })
    
        
    }

    function onLogin() {
        const email = state.email;
        const password = state.password;

        login(email,password);
    }
    return (
     <div >
       <form onSubmit={onLogin} className="container">
            <input name="email" onChange={onChange} value={state.email} type="text" placeholder="User">

            </input> <br></br>

            <input name="password" onChange={onChange} value={state.password} type="password" placeholder="Password">
                 
            </input> <br></br>
 
            <button action="submit">Enviar Formulario</button>
        </form>
     </div>
    )
  }
  