import "../css/login.css"

function Login() {
    return (
    <div class = "login">
        <div class ="left"></div>
        <div class ="right">
        <div class ="form">
            <h2>BIENVENIDO ART PICTURES</h2>
            <form>
            <label htmlFor="username">Nombre de Usuario:</label>
            <input type="text" id="username" name="username" />
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" />
            <p><a href="#">¿Olvidaste tu Contraseña?</a></p>
            <button type="submit">Iniciar sesión</button>
            </form>
            <p> ¿No tienes cuenta? <a href="./Registro">Registrate</a></p>
        </div>
        </div>
    </div>
    );
}

export default Login;