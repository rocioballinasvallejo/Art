import "./css/navbar.css"
import Link from 'next/link';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link href="/">
                    <img src="https://web.opendrive.com/api/v1/download/file.json/NDFfNTQ4MDY1MDJfVnkzeWY?session_id=3a6238c3dbf44f2a48119e3c31ba8269b53173d247cfbb6ee6b84a8592cb6c16&inline=1&preview=1"
                        style={{ width: '64px', height: '64px' }}
                    />
                </Link>
            </div>
            <div className="center-content">
                <Link href="/Precio">
                    <p>Filtrar por precio</p>
                </Link>
            </div>
            <div className="Inicio">
                <Link href="/Pintores">
                    <p >Sobre pintores</p>
                </Link>
            </div>
            <div className="pintores">
                <Link href="/RegPinturas">
                    <p>Registrar Pinturas </p>
                </Link>
            </div>
            <div className="login">
                <Link href="/Comentarios/Chat">
                    <p >Comentarios</p>
                </Link>
            </div>
            <div className="login">
                <Link href="/login">
                    <p >Iniciar Sesión</p>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;