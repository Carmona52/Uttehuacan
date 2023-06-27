export default function Home() {
    return (
     <div style={{
        display: "flex",
        flexDirection:"column",
        widt:"500px"
     }}>
        <form>
            <input type="text" placeholder="INSERTE SU USUARIO">

            </input>

            <input type="password" placeholder="INSERTE LA CONTRASEÑA">
                
            </input>

            <button action="submit">BOTON DE ENVIAR</button>

        </form>
     </div>
    )
  }
  