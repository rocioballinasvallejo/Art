import "../css/RegPinturas.css"

function Registro () {
    return (
        <div className= "container">
            <header className= "header">
                </header>
                <div className= "right">
                    <div className= "form">
                    <h2>REGISTRA TU PINTURA</h2>
                    <form>
                        <label htmlFor="username">Nota:</label>
                        <input type="text" id="username" name="username" />
                        <label htmlFor="password">Archivos:</label>
                        <input type="password" id="password" name="password" />
                        <button type="submit">Examinar</button>
                        <label htmlFor="password">Tipo de archivo:</label>
                        <input type="password" id="password" name="password" />
                        <button type="submit">Publicar</button>
                    </form>
                    </div>
                </div>
            </div>
    )
}

export default Registro;