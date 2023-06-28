import "./login.css"
export default function Login() {
    return (
     <div>
        <form  className="container"> 
            <input type="text" placeholder="User">

            </input> <br></br>

            <input type="password" placeholder="Password">
                 
            </input> <br></br>
 
            <button action="submit">Enviar Formulario</button>

        </form>
     </div>
    )
  }
  