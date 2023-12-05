import '../css/registro.css'

function Registro () {
    return(
        <div class="container">
            <div class="left"></div>
            <div class="right">
                <div class="form">
                <h2>REGISTRATE</h2>
                <form>
                    <label htmlFor="username">Nombre de Usuario:</label>
                    <input type="text" id="username" name="username" />
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password" />
                    <button type="submit">Registrarme</button>
                </form>
                <p>¿Ya tienes cuenta? <a href="/login">Inicia Sesión</a></p>
                </div>
            </div>
        </div>
    );
}

export default Registro;