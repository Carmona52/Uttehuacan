export default function Login() {
    return (
     <div style={{
        display: "flex",
        flexDirection:"column",
        width:"500px",
        marginLeft:"30%",
        marginTop:"20%"
     }}>
        <form>
            <input type="text" placeholder="User">

            </input> <br></br> <br></br>

            <input type="password" placeholder="Password">
                 
            </input> <br></br> <br></br>
 
            <button action="submit">Enviar Formulario</button>

        </form>
     </div>
    )
  }
  