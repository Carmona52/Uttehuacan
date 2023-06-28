export default function Home() {
    return (
     <div style={{
        display: "flex",
        flexdirection:"column",
        width:"500px"
     }}>
        <form>
            <input type="text" placeholder="INSERTE SU USUARIO">

            </input> <br></br> <br></br>

            <input type="password" placeholder="INSERTE LA CONTRASEÑA">
                 
            </input> <br></br> <br></br>
 
            <button action="submit">BOTON DE ENVIAR</button>

        </form>
     </div>
    )
  }
  