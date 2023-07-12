"use client"
import React from "react"
import "./login.css"
import { register } from "../services/firebase/auth";
export default function register(email, password, displayName) {

    const[state,setState] = React.useState({
        email:"",
        password:"",
        displayName:""
    });

    function onChange(event) {
        
        const value = event.target.value;
        const name = event.target.name;
        
        setState({
            ...state, 
            [name]: value
        })
    
        
    }

    function onRegister() {
        //const email = state.email;
        //const password = state.password;
        //const displayName = state.displayName;

        const args ={email, password, displayName}

        register(args);
    }

    return (
     <div >
       <form onSubmit={onRegister} className="container">
            <input name="email" onChange={onChange} value={state.email} type="text" placeholder="User">

            </input> <br></br>

            <input name="password" 
            onChange={onChange} 
            value={state.password} 
            type="password" 
            placeholder="Password">
            required
            </input> <br></br>

            <input name="displayName">
                onChange={onchange}
                value={state.displayName}
                placeholder="Tu Nombre"
                type="text"
                required
            </input>
 
            <button action="submit">Enviar Formulario</button>
        </form>
     </div>
    )
  }
  